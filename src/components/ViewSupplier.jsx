import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewSupplier = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:3000/view-supplier")
      .then((res) => setSuppliers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = suppliers.filter(
    (s) =>
      (s.supplierId || "").toLowerCase().includes(search.toLowerCase()) ||
      (s.supplierName || "").toLowerCase().includes(search.toLowerCase()) ||
      (s.companyName || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ background: "linear-gradient(to right,#eefaf4,#fff)" }}
      >
        <div className="container">
          <div
            className="rounded-4 text-center text-white p-5 shadow mb-4"
            style={{
              background: "linear-gradient(135deg,#198754,#20c997,#0dcaf0)",
            }}
          >
            <h1 className="fw-bold">Supplier Management</h1>
            <p>View Supplier Records</p>
          </div>

          <div className="row mb-4">
            <div className="col-md-8">
              <input
                className="form-control form-control-lg"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body text-center">
                  <h6>Total Suppliers</h6>
                  <h3>{filtered.length}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body table-responsive">
              {loading ? (
                <div className="text-center p-5">
                  <div className="spinner-border text-success"></div>
                </div>
              ) : (
                <table className="table table-hover">
                  <thead className="table-success">
                    <tr>
                      <th>#</th>
                      <th>Supplier ID</th>
                      <th>Supplier Name</th>
                      <th>Company</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Contact</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Pincode</th>
                      <th>GST</th>
                      <th>Registration</th>
                      <th>Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.length ? (
                      filtered.map((s, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{s.supplierId}</td>
                          <td>{s.supplierName}</td>
                          <td>{s.companyName}</td>
                          <td>{s.email}</td>
                          <td>{s.phoneNumber}</td>
                          <td>{s.address}</td>
                          <td>{s.contactPerson}</td>
                          <td>{s.city}</td>
                          <td>{s.state}</td>
                          <td>{s.pincode}</td>
                          <td>{s.gstNumber}</td>
                          <td>{s.registrationDate}</td>
                          <td>{s.supplierCode}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="14" className="text-center">
                          No suppliers found.
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
};

export default ViewSupplier;
