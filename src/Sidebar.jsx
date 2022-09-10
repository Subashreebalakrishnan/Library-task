import { Link } from "react-router-dom"

function Sidebar () {

  return   <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

  {/* <!-- Sidebar - Brand --> */}
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">Library Management</div>
  </a>

  {/* <!-- Divider --> */}
  <hr className="sidebar-divider my-0"/>

  {/* <!-- Nav Item - Dashboard --> */}
  <li className="nav-item active">
      <Link className="nav-link" to= "/library">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Library</span></Link>
  </li>

  {/* <!-- Divider --> */}
  
  


  

  {/* <!-- Heading --> */}
  

  {/* <!-- Nav Item - Pages Collapse Menu --> */}
  

</ul>
      
}

export default Sidebar