import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewSale() {
  const [sales, setSales] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSales();
  }, []);
  const fetchSales = () => {
    axios
      .post("http://localhost:3000/view-sale")
      .then((res) => setSales(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const filtered = sales.filter(
    (s) =>
      (s.billId || "").toLowerCase().includes(search.toLowerCase()) ||
      (s.medicineName || "").toLowerCase().includes(search.toLowerCase()) ||
      (s.pharmacistName || "").toLowerCase().includes(search.toLowerCase()),
  );

  const payBadge = (m) => {
    const c =
      {
        Cash: "success",
        Card: "primary",
        UPI: "warning",
        "Net Banking": "info",
      }[m] || "secondary";
    return <span className={`badge bg-${c}`}>{m}</span>;
  };

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ background: "linear-gradient(to right,#eefaf4,#fff)" }}
      >
        <div className="container">
          <div
            className="rounded-4 p-5 text-center text-white shadow mb-4"
            style={{
              background: "linear-gradient(135deg,#198754,#20c997,#0dcaf0)",
            }}
          >
            <i className="bi bi-capsule-pill display-3"></i>
            <h1 className="fw-bold mt-2">Medicine Sales Records</h1>
            <p>View and search pharmacy sales.</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-8">
              <input
                className="form-control form-control-lg"
                placeholder="Search Bill ID, Medicine or Pharmacist..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                  <h6>Total Records</h6>
                  <h3 className="text-success">{filtered.length}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body table-responsive">
              {loading ? (
                <div className="text-center p-5">
                  <div className="spinner-border text-success" />
                </div>
              ) : (
                <table className="table table-hover align-middle">
                  <thead className="table-success">
                    <tr>
                      <th>#</th>
                      <th>Bill ID</th>
                      <th>Medicine ID</th>
                      <th>Medicine Name</th>
                      <th>Batch</th>
                      <th>Pharmacist</th>
                      <th>Prescription</th>
                      <th>Doctor</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Counter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length ? (
                      filtered.map((s, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{s.billId}</td>
                          <td>{s.medicineId}</td>
                          <td>{s.medicineName}</td>
                          <td>{s.batchNumber}</td>
                          <td>{s.pharmacistName}</td>
                          <td>
                            <span
                              className={`badge bg-${s.prescriptionRequired === "Yes" ? "danger" : "secondary"}`}
                            >
                              {s.prescriptionRequired}
                            </span>
                          </td>
                          <td>{s.doctorName}</td>
                          <td>{s.quantity}</td>
                          <td>₹ {s.unitPrice}</td>
                          <td className="fw-bold text-success">
                            ₹ {s.totalAmount}
                          </td>
                          <td>{s.saleDate}</td>
                          <td>{payBadge(s.paymentMethod)}</td>
                          <td>{s.billingCounterNumber}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="14" className="text-center py-5">
                          No sales found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
