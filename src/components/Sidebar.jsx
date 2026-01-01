import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  const [open,setOpen]=useState(false);
return (
<>

  <nav className="navbar navbar-dark bg-dark d-md-none fixed-top shadow">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
          onClick={()=>setOpen(true)}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      
      {/* <NavLink className="navbar-brand fs-4" to="/">
        Home
      </NavLink> */}
    </div>
  </nav>

 
  <div className="d-md-none" style={{ height: "56px" }}></div>

  {/* Offcanvas Sidebar (Mobile) */}
 <div
  className={`offcanvas offcanvas-start text-bg-dark d-md-none ${open ? 'show' : ''}`}
  style={{ visibility: open ? 'visible' : 'hidden' }}
>

    <div className="offcanvas-header border-bottom border-secondary">
      <NavLink 
        className="nav-link fs-4" 
        to="/" 
        // data-bs-dismiss="offcanvas"
      >
        Home
      </NavLink>
     <button
  className="btn-close btn-close-white"
  onClick={() => setOpen(false)}
></button>

    </div>

    <div className="offcanvas-body">
      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <NavLink 
            className="nav-link text-white" 
            to="/hollywood" 
             onClick={() => setOpen(false)}
            // data-bs-dismiss="offcanvas"
          >
            Hollywood Songs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link text-white" 
            to="/bollywood" 
            // data-bs-dismiss="offcanvas"
          >
            Bollywood Songs
          </NavLink>
        </li>
      </ul>
    </div>
  </div>

  {/* Desktop Sidebar */}
  <div
    className="d-none d-md-flex flex-column p-3 text-bg-dark"
    style={{ width: '280px', height: '100vh', position: 'sticky', top: 0 }}
  >
    <NavLink className="nav-link fs-4 mb-2 text-white" to="/">Home</NavLink>
    <hr className="mt-0" />

    <ul className="nav nav-pills flex-column gap-2">
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/hollywood">
          Hollywood Songs
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/bollywood">
          Bollywood Songs
        </NavLink>
      </li>
    </ul>
  </div>
</>
)
}
export default Sidebar