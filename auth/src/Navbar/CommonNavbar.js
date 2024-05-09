import React from 'react'
import { Link } from 'react-router-dom'

const CommonNavbar = () => {
    const navbar={
        home:"/",

    }
  return (
    <div>
        <Link to={navbar.home}>Home</Link>
      
    </div>
  )
}

export default CommonNavbar
