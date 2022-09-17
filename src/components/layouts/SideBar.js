import React from 'react';
import { Link } from 'react-router-dom';


function SideBar() {
     return (
          <>
               <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
    <div className="os-resize-observer-host"><div className="os-resize-observer observed" style={{left: 0, right: 'auto'}} /></div>
    <div className="os-size-auto-observer" style={{height: 'calc(100% + 1px)', float: 'left'}}><div className="os-resize-observer observed" /></div>
    <div className="os-content-glue" style={{margin: '0px -8px', width: 249, height: 123}} />
    <div className="os-padding">
      <div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: 'scroll'}}>
        <div className="os-content" style={{padding: '0px 8px', height: '100%', width: '100%'}}>
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"><img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /></div>
            <div className="info"><a href="#" className="d-block">Lee Dong Chul</a></div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

              <li className="nav-item has-treeview">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-copy" />
                  <p>Sản phẩm<i className="fas fa-angle-left right" /></p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/product/list" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Quản lý sản phẩm</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product/category" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Quản lý danh mục</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product/add" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Thêm sản phẩm</p>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a href="" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                 */}
                
                </ul>
              </li>

              

            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px, 0px)'}} /></div>
    </div>
    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
      <div className="os-scrollbar-track"><div className="os-scrollbar-handle" style={{height: '9.83347%', transform: 'translate(0px, 7.91557px)'}} /></div>
    </div>
    <div className="os-scrollbar-corner" />
  </div>
</aside>

          </>
     )
}

export default SideBar
