import axios from 'axios'
import React, { useState } from 'react'


const AddMedicine = () => {
    const [input, changeInput] = useState(
        {

            medicineId: "",
            medicineName: "",
            category: "",
            manufacturer: "",
            batchNumber: "",
            manufacturingDate: "",
            expiryDate: "",
            dosage: "",
            purchasePrice: "",
            sellingPrice: "",
            stockQuantity: "",
            supplierName: "",
            shelfNumber: ""

        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-medicine", input).then(

            (response) => {
                alert("Medicine added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding medicine", error)
                alert("failed to add medicine")
            }
        )
    }
    return (
        <div>
           

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">MedicineID</label>
                                <input type="text" className="form-control" name="medicineId" value={input.medicineId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Medicine Name</label>
                                <input type="text" className="form-control" name="medicineName" value={input.medicineName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Category</label>
                                <select name="" id="" className="form-control" name="category" value={input.category} onChange={inputHandler}>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Tablet">Tablet</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Injection">Injection</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Manufacturer</label>
                                <input type="text" className="form-control" name="manufacturer" value={input.manufacturer} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Batch Number</label>
                                <input type="text" className="form-control" name="batchNumber" value={input.batchNumber} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Manufacturing Date</label>
                                <input type="date" className="form-control" name="manufacturingDate" value={input.manufacturingDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Expiry Date</label>
                                <input type="date" className="form-control" name="expiryDate" value={input.expiryDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Dosage</label>
                                <input type="text" className="form-control" name="dosage" value={input.dosage} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Purchase Price</label>
                                <input type="number" className="form-control" name="purchasePrice" value={input.purchasePrice} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Selling Price</label>
                                <input type="number" className="form-control" name="sellingPrice" value={input.sellingPrice} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Stock Quantity</label>
                                <input type="number" className="form-control" name="stockQuantity" value={input.stockQuantity} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Supplier Name</label>
                                <input type="text" className="form-control" name="supplierName" value={input.supplierName} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Shelf Number</label>
                                <input type="text" className="form-control" name="shelfNumber" value={input.shelfNumber} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMedicine