import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
  <div className="sidebar">
    <div className="company-name">
      <img src='' alt=''/>
      <div className="title">Sentinel <span id='software'>Software</span></div>
    </div>
   <hr />
    <div className="menu-icons">
      <ul>
        <li>
          HOME
        </li>
        <li>User Central</li>
        <li>Access Request</li>
        <li>Admin</li>
      </ul>
      <hr />
      <ul>
        <li>Settings</li>
        <li>Support</li>
        <li>Quit</li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar
