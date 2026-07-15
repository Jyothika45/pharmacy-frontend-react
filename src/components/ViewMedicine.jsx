import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewMedicine = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:3000/add-medicine").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>

<table class="table">
                <thead>
                    <tr>
                        <th scope="col">MedicineID</th>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Batch Numbe</th>
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
                    {data.map(
                    (value,index)=>{
                        return(
                            <tr>
                                <th scope="row">{value.bookingID}</th>
                                    

                                    
                                    
                                    <td>{value.medicineId}</td>
                                    <td>{value.medicineName}</td>
                                    <td>{value.category}</td>
                                    <td>{value.manufacturer}</td>                                    
                                    <td>{value.batchNumber}</td>                                
                                    <td>{value.manufacturingDate}</td>                                
                                    <td>{value.expiryDate}</td>                                
                                    <td>{value.dosage}</td>                                
                                    <td>{value.purchasePrice}</td>                                
                                    <td>{value.sellingPrice}</td>  
                                    <td>{value.stockQuantity}</td>                              
                                    <td>{value.supplierName}</td>                              
                                    <td>{value.shelfNumber}</td>                              

                                </tr>
                        )
                    }
                )}
                 </tbody>
            </table>
                        
              
    </div>
  )
}

export default ViewMedicine