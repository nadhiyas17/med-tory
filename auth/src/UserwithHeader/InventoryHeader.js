import React from 'react'
import Header from '../Login/Header'
import Navbar from '../Navbar/Navbar'
import InventorystaffManagement from '../Component/InventorystaffManagement'
import InventoryContent from '../MainDataComponent/InventoryContent'

const InventoryHeader = () => {
  return (
    <div>
        <Header/>
        <Navbar
     home="/"
     
     inventoryTitle1="Inventory Management"

     InventoryContent="/inventorycontent"
     supplierTitle="Supplier Management"
     orderTitle="Order Management"
     viewerTitle="Viewer"/>
      {/* <InventorystaffManagement/> */}
      <InventoryContent/>
    </div>
  )
}

export default InventoryHeader
