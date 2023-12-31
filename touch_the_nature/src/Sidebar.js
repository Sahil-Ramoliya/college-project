import Accordion from 'react-bootstrap/Accordion';
import { FaEdit,FaRegCircle,FaTable } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return(
        <>
             {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                <li className="nav-item menu-open">
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="./index.html" className="nav-link active">
                        <i className="far fa-circle nav-icon" />
                        <p>Dashboard</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                     
                      
                        {/* <div><FaEdit/></div> */}
                        <Accordion.Header className="backg"><FaEdit className="tag"/>Product</Accordion.Header>
                      
                      
                        <Accordion.Body >
                          <FaRegCircle className="tag1"/>
                          <Link to = "/Product"> Add Product</Link>
 
                        </Accordion.Body>
                        
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li className="nav-item">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                     
                      
                        {/* <div><FaEdit/></div> */}
                        <Accordion.Header className="backg"><FaTable className="tag"/>Table</Accordion.Header>
                      
                      
                        <Accordion.Body >
                          <FaRegCircle className="tag1"/>
                          DataTable
                        </Accordion.Body>
                        
                    </Accordion.Item>
                  </Accordion>
                </li>
                
                
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        </>
    )
}
export default Sidebar;