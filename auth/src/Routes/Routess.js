import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import UserManagement from "../Login/UserManagement";
import UpdateUser from "../Login/UpdateUser";
import AdminManagement from "../Component/AdminManagement";
import InventorystaffManagement from "../Component/InventorystaffManagement";
import SupplierManagement from "../Component/SupplierManagement";
import ViewerManagement from "../Component/ViewerManagement";
import Header from "../Login/Header";
import { UseAuth } from "../UseContext/Usecontextapi";
import OrderManagement from "../Component/OrderManagement";
import InventoryHeader from "../UserwithHeader/InventoryHeader";
import SupplierComponent from "../MainDataComponent/SupplierComponent";


const Routess = () => {
  const { getRole, setgetRole } = UseAuth();
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Superadmin Routes */}
        <Route path="/superadmin" element={<UserManagement />}>
        <Route path="inventorystaff" element={<InventoryHeader />}/>
        <Route path="suppliercomp" element={<SupplierComponent />} />
          <Route path="updateuser/:id" element={<UpdateUser />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminManagement />} />

        {/* Order Routes */}
        <Route path="/order" element={<OrderManagement />} />

        {/* Inventory Staff Routes */}
        <Route path="/inventorystaff" element={<InventoryHeader />}>
          <Route path="inventoryheader" element={<InventorystaffManagement />} />
        </Route>

        {/* Supplier Routes */}
        <Route path="/supplier" element={<SupplierManagement />} />

        {/* Viewer Routes */}
        <Route path="/viewer" element={<ViewerManagement />} />
      </Routes>
    </div>
  );
};

export default Routess;
