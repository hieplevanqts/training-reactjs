import React from 'react';

function Header() {
     return (
          <>
               <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
      
    </ul>
    
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
     
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> Đăng xuất
          </a>
        </div>
      </li>
     
    </ul>
  </nav>
          </>
     )
}

export default Header
