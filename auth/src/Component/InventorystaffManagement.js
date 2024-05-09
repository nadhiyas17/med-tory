import React from 'react'
import Header from '../Login/Header'
import Navbar from '../Navbar/Navbar'
import InventoryContent from '../MainDataComponent/InventoryContent'

const InventorystaffManagement = () => {
  return (
    <>
    <Header/>
    <Navbar  home="/"
        inventoryTitle="Inventory Management"
        supplierTitle="Supplier Management"
        orderTitle="Order Management"
        viewerTitle="Viewer"/>

    
    
    <div>InventorystaffManagement
      <InventoryContent/>
    </div>
    </>
  )
}

export default InventorystaffManagement