import React from "react";
import Header from "../Login/Header";
import Navbar from "../Navbar/Navbar";

const ViewerManagement = () => {
  return (
    <>
      <Header />
      <Navbar
        home="/"
        // userTitle="User Management"
        // inventoryTitle="Inventory Management"
        // supplierTitle="Supplier Management"
        // orderTitle="Order Management"
        viewerTitle="Viewer"
      />
      <div>ViewerManagement</div>
    </>
  );
};

export default ViewerManagement;
