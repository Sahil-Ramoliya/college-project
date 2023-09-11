import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import { BsHouseDoorFill, BsChevronRight } from "react-icons/bs";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FaRegWindowMaximize } from "react-icons/fa";
import './Cart.css';
import axios from "axios";

const Cart = () => {    

    return(
        <>
        <Header/>
        <div className='main-content1'>
                <div className='Product_bgimg1'>
                    <div className='content_row1'>
                        <div className='content_col1'>
                            <h1>Cart</h1>
                        </div>
                        <div className="content_col2">
                            <ul className='d-flex3'>
                                <li>
                                    <Link to="/"><BsHouseDoorFill /> Home</Link>
                                    <span><BsChevronRight /></span>
                                </li>
                                <li>
                                    <a>Cart</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* card_content start */}

            <div className="card_content_row">
                <div className="card_content_col">
                    <div className="Card_inner">
                        <p className="card_info">
                            <FaRegWindowMaximize className="card_icn"/>
                            Your cart is currently empty.</p>
                        <p className="return_shop">
                            <button>Return to shop</button>
                        </p>
                    </div>
                </div>
            </div>
            {/* card_content end */}
        <Footer/>
        </>
    )
}
export default Cart;