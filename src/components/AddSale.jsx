import { useState } from "react";
import axios from "axios";

function AddSale() {
  const [sale, setSale] = useState({
    billId: "",
    medicineId: "",
    medicineName: "",
    batchNumber: "",
    pharmacistName: "",
    prescriptionRequired: "",
    doctorName: "",
    quantity: "",
    unitPrice: "",
    totalAmount: "",
    saleDate: "",
    paymentMethod: "",
    billingCounterNumber: "",
  });

  const handleChange = (event) => {
    setSale({ ...sale, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(sale);

    axios
      .post("http://localhost:3000/add-sale", sale)
      .then((res) => {
        alert("Sale Added Successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add sale.");
      });
  };

  return (
    <>

      <div className="container py-5">
        <div className="card shadow-lg border-0 rounded-4 p-5">

          <div className="text-center mb-5">
            <i className="bi bi-receipt-cutoff display-4 text-success"></i>

            <h2 className="fw-bold mt-3">
              Add Medicine Sale
            </h2>

            <p className="text-muted">
              Enter the medicine sale details below.
            </p>
          </div>

          <div className="row">

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Bill ID
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Bill ID"
                name="billId"
                value={sale.billId}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Medicine ID
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Medicine ID"
                name="medicineId"
                value={sale.medicineId}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Medicine Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Medicine Name"
                name="medicineName"
                value={sale.medicineName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Batch Number
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Batch Number"
                name="batchNumber"
                value={sale.batchNumber}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Pharmacist Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Pharmacist Name"
                name="pharmacistName"
                value={sale.pharmacistName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Prescription Required
              </label>

              <select
                className="form-select"
                name="prescriptionRequired"
                value={sale.prescriptionRequired}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Doctor Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Doctor Name"
                name="doctorName"
                value={sale.doctorName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Quantity
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Quantity"
                name="quantity"
                value={sale.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Unit Price
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Unit Price"
                name="unitPrice"
                value={sale.unitPrice}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Total Amount
              </label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Total Amount"
                name="totalAmount"
                value={sale.totalAmount}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Sale Date
              </label>

              <input
                type="date"
                className="form-control"
                name="saleDate"
                value={sale.saleDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Payment Method
              </label>

              <select
                className="form-select"
                name="paymentMethod"
                value={sale.paymentMethod}
                onChange={handleChange}
              >
                <option value="">Select Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>

            <div className="col-md-12 mb-4">
              <label className="form-label fw-semibold">
                Billing Counter Number
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Billing Counter Number"
                name="billingCounterNumber"
                value={sale.billingCounterNumber}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="text-center mt-4">
            <button
              type="button"
              className="btn btn-success btn-lg px-5 rounded-pill"
              onClick={handleSubmit}
            >
              <i className="bi bi-check-circle-fill me-2"></i>
              Add Sale
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AddSale;