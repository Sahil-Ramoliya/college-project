import Footer from "./Footer"
import Header from "./Header"
import './Cart.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BsHouseDoorFill, BsChevronRight, BsX } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import img1 from './img1/asset2.jpeg';

const Shopping = () => {
    const [data, setdata] = useState([]);
    const [resp, setresp] = useState([]);
    const [count, setCount] = useState(1);
    // const [total, settotal] = useState(0.0)

    const getcart = () => {
        const id = sessionStorage.getItem('Userid');

        console.log(id);
        axios.post(`http://localhost:5000/getcart`, {
            user_id: id
        })
            .then(function (response) {
                console.log(response.data.data);
                setresp(response.data.data);
               
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
       getcart()     

    },[]);

    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (count > 1)
            setCount(count - 1);
    }
    const deletecart = (_id) => {
        var id = sessionStorage.getItem('Userid');
        // alert()
        // console.log(id);
        axios.post(`http://localhost:5000/removecart`, {
            product_id: _id,
            user_id: id
        })
            // .then(function (response) {
            //     console.log(response.data.data);
            //     setresp(response.data.data)
            // })
            .catch(function (error) {
                console.log(error);
            });
            getcart()
    }
    return (
        <>
            <Header />

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

            <div className="row_default">
                {/* {
                    data.map((item) => {
                        return ( */}
                {/* <> */}
                <Table>
                    <thead>
                        <tr className="product_table">
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            resp.map((item) => {
                                return (
                                    <tr className="card_item">
                                        <td><button onClick={() => { deletecart(item._id) }}><BsX /></button></td>
                                        <td> <img src={item.product_image}></img></td>
                                        <td className="product-name"><a href="#">{item.product_name}</a></td>
                                        <td>${item.product_price}.00</td>
                                        <td className="d-flex product_qnt ">
                                            <div className="input_icn" onClick={dec}><FaMinus /></div>
                                            <input type="text" value={count} className="input_text" readOnly></input>
                                            <div className="input_icn" onClick={inc}><FaPlus /></div>
                                        </td>
                                        <td>42.00</td>
                                    </tr>
                                )
                            })
                        }
                        {/* <tr>
                            <td colSpan={6}>
                                <div className="coupon"></div>
                            </td>
                        </tr> */}


                    </tbody>
                </Table>
                {/* </>
                        )
                    })
                } */}
            </div>
            <div className="cart-collaterals">
                <div className="cart_totals ">
                    <h2>Cart totals</h2>
                    <Table cellspacing="0">
                        <tbody>
                       
                            <tr>
                                <th>Subtotal</th>
                                <td><span>$42.00</span></td>
                            </tr>
                              
                            <tr>
                                <th>Total</th>
                                <td><span className="price">$42.00</span></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="wc-proceed-to-checkout">
                    <a href="#">Proceed to checkout</a>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Shopping;