import React from 'react'
import Header from '../Login/Header'
import Navbar from '../Navbar/Navbar'

const OrderManagement = () => {
  return (
    <div>
      <Header/>
    <Navbar
     home="/"
     inventoryTitle="Inventory Management"
     supplierTitle="Supplier Management"
     orderTitle="Order Management"
     viewerTitle="Viewer"/>
      OrderManagement
    </div>
  )
}

export default OrderManagement
