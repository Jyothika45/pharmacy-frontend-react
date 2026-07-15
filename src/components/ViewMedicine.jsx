import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewMedicine = () => {
    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        axios.post("http://localhost:3000/view-medicine").then(
            (response) => {
                changeData(response.data)
                setLoading(false)
            }
        ).catch(
            (error) => {
                console.log(error)
                setLoading(false)
            }
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                            background: "linear-gradient(135deg,#198754,#20c997,#0dcaf0)"
                        }}
                    >
                        <i className="bi bi-capsule-pill display-3"></i>
                        <h1 className="fw-bold mt-2">Medicine Records</h1>
                        <p>View all available medicines in the pharmacy.</p>
                    </div>

                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body table-responsive">

                            {loading ? (
                                <div className="text-center p-5">
                                    <div className="spinner-border text-success"></div>
                                </div>
                            ) : (
                                <table className="table table-hover align-middle">
                                    <thead className="table-success">
                                        <tr>
                                            <th scope="col">Medicine ID</th>
                                            <th scope="col">Medicine Name</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Manufacturer</th>
                                            <th scope="col">Batch Number</th>
                                            <th scope="col">Manufacturing Date</th>
                                            <th scope="col">Expiry Date</th>
                                            <th scope="col">Dosage</th>
                                            <th scope="col">Purchase Price</th>
                                            <th scope="col">Selling Price</th>
                                            <th scope="col">Stock Quantity</th>
                                            <th scope="col">Supplier Name</th>
                                            <th scope="col">Shelf Number</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.length ? (
                                            data.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{value.medicineId}</td>
                                                        <td>{value.medicineName}</td>
                                                        <td>{value.category}</td>
                                                        <td>{value.manufacturer}</td>
                                                        <td>{value.batchNumber}</td>
                                                        <td>{value.manufacturingDate}</td>
                                                        <td>{value.expiryDate}</td>
                                                        <td>{value.dosage}</td>
                                                        <td>₹ {value.purchasePrice}</td>
                                                        <td className="fw-bold text-success">₹ {value.sellingPrice}</td>
                                                        <td>{value.stockQuantity}</td>
                                                        <td>{value.supplierName}</td>
                                                        <td>{value.shelfNumber}</td>
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="13" className="text-center py-5">
                                                    No medicines found.
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
    )
}

export default ViewMedicine