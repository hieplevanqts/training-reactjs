import React from 'react';
import { Route, Switch } from "react-router-dom";
import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import DashboardHead from './../Dashboard/DashboardHead';
import DashboardContent from './../Dashboard/DashboardContent';
import ListProduct from './../Products/ListProduct';
import Breadcrumb from './Breadcrumb';
import Dashboard from './../Dashboard'
import Category from '../Products/Category';
import AddProduct from '../Products/AddProduct';








function Home() {
     return (
          <>
               <div className="wrapper">
                    <Header />
                    <SideBar />
                    <div className="content-wrapper">
                    <Breadcrumb />
                    <section className="content">
                         <div className="container-fluid">
                              <Switch>
                                   <Route exact path={process.env.PUBLIC_URL + "/"} component={Dashboard} />
                                   <Route path={process.env.PUBLIC_URL + "/product/list"} component={ListProduct} />
                                   <Route path={process.env.PUBLIC_URL + "/product/category"} component={Category} />
                                   <Route path={process.env.PUBLIC_URL + "/product/add"} component={AddProduct} />
                                   
                              </Switch>
                         </div>
                    </section>
                    </div>
                    <Footer />
                    <aside className="control-sidebar control-sidebar-dark">
                    </aside>
                    </div>
          </>
     )
}

export default Home
