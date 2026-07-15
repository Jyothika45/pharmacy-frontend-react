import axios from 'axios'
import React, { useState } from 'react'


const AddSupplier = () => {
    const [input, changeInput] = useState(
        {

            supplierId: "",
            supplierName: "",
            companyName: "",
            email: "",
            phoneNumber: "",
            address: "",
            contactPerson: "",
            city: "",
            state: "",
            pincode: "",
            gstNumber: "",
            registrationDate: "",
            supplierCode: ""

        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-supplier", input).then(

            (response) => {
                alert("Supplier added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding supplier", error)
                alert("failed to add supplier")
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

                                <label htmlFor="" className="form-label">Supplier ID</label>
                                <input type="text" className="form-control" name="supplierId" value={input.supplierId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Supplier Name</label>
                                <input type="text" className="form-control" name="supplierName" value={input.supplierName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" name="companyName" value={input.companyName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" name="phoneNumber" value={input.phoneNumber} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Contact Person</label>
                                <input type="text" className="form-control" name="contactPerson" value={input.contactPerson} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">State</label>
                                <input type="text" className="form-control" name="state" value={input.state} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pincode" value={input.pincode} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">GST Number</label>
                                <input type="text" className="form-control" name="gstNumber" value={input.gstNumber} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input type="date" className="form-control" name="registrationDate" value={input.registrationDate} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Supplier Code</label>
                                <input type="text" className="form-control" name="supplierCode" value={input.supplierCode} onChange={inputHandler} />

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

export default AddSupplier