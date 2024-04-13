import React from "react";
import Login from "../Login/Login";
import { Routes, Route } from "react-router-dom";
import UserManagement from "../Login/UserManagement";
import UpdateUser from "../Login/UpdateUser"
import AdminManagement from "../Component/AdminManagement";
import InventorystaffManagement from "../Component/InventorystaffManagement";
import SupplierManagement from "../Component/SupplierManagement";
import ViewerManagement from "../Component/ViewerManagement";
import Header from "../Login/Header";

const Routess = () => {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmin" element={<UserManagement />} />
        <Route path="/admin" element={<AdminManagement />} />
        <Route path="/inventorystaff" element={<InventorystaffManagement />} />
        <Route path="/supplier" element={<SupplierManagement />} />
        <Route path="/viewer" element={<ViewerManagement />} />
        <Route path="updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default Routess;
