// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { BsCart4, BsSearch, BsHeart, BsPerson } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";


const Header = () => {
    var styleb = {
        display: 'block'
    }
    var stylen = {
        display: 'none'
    }
    return (
        <>
            {/*------- Promotion bar start --------*/}
            {/* <div className="bar_menu">
                <a href="#">
                    <b>BLAZING FAST!</b> PURCHASE THIS INCREDIBLE THEME NOW <b>FOR THE SUCCESS OF YOUR BUSSINESS !</b>
                </a>
            </div> */}
            {/*-------Promotion bar end----------*/}


            {/*--------Header start--------*/}

            <div className=" container  d-flex align-items-center">
                <div className="d-flex" >
                    {/* <div> */}
                    <div className="logo">
                        <img src={require('./img/img1.png')}></img>
                    </div>
                    <div className="vr virtical"></div>
                    <div className='navbar'>
                        <Nav
                        //   activeKey="/home"
                        //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                        >
                            <Nav.Item>
                                <Link to="/" className="font" href="/home">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/Service" className="font" eventKey="link-1">Service</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/shop" className="font" eventKey="link-2">Shop</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/Blog" className="font" eventKey="disabled" >Blog</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="font" eventKey="disabled" >Contact</Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    {/* </div> */}
                </div>


                <div className="text_end">
                    <div className="tag text-end">
                        <ul className="main_menu">
                            {/* <li><a href="/Shopping"><BsCart4 /></a></li> */}
                            <li>
                                <Link to="/Shopping">
                                <BsCart4 />
                                </Link>
                            </li>
                            {/* <li><a href="#"><BsSearch /></a></li> */}
                            <li><a href="#"><BsHeart /></a></li>
                            <li><a href="#"><BsPerson /></a>
                                <ul className="sub_menu">
                                    <li>
                                        <Link to="/Register">
                                            Register
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Login">
                                            Login
                                        </Link>
                                    </li>
                                    <li onClick={() => { sessionStorage.clear() }} style={(sessionStorage.getItem('Username')) ? styleb : stylen}><a href="/#">Logout</a></li>
                                    <li><a>{sessionStorage.getItem('Username')}</a></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
            {/*---------Header end---------*/}

        </>
    );
}
export default Header;