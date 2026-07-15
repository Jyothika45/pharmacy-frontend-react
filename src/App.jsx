import AddMedicine from './components/AddMedicine'
import Home from './components/Home.jsx'
import ViewMedicine from './components/ViewMedicine.jsx'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddMedicine from "./components/AddMedicine";
import ViewMedicine from "./components/ViewMedicine";
import AddSale from "./components/AddSale";
import ViewSale from "./components/ViewSale";
import AddSupplier from "./components/AddSupplier";
import ViewSupplier from "./components/ViewSupplier";

function App() {
  return (
    <>
    {/* <AddMedicine/>
    <ViewMedicine/> */}
    <Home/>
   </>
  )
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-medicine" element={<AddMedicine />} />
        <Route path="/view-medicine" element={<ViewMedicine />} />
        <Route path="/add-sale" element={<AddSale />} />
        <Route path="/view-sale" element={<ViewSale />} />
        <Route path="/add-supplier" element={<AddSupplier />} />
        <Route path="/view-supplier" element={<ViewSupplier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;