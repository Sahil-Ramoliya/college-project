import Header from "./Header";
import './Greenapple.css';
import img1 from './img1/asset2.jpeg';
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";
import { BsHouseDoorFill, BsChevronRight, BsShare, BsCartDash } from "react-icons/bs";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import img9 from './img1/asset10.jpeg';
import img8 from './img1/asset9.jpeg';
import img2 from './img1/asset3.jpeg';
import img3 from './img1/asset4.jpeg';
import Footer from "./Footer";

const Greenapple = () => {

    const [data, setdata] = useState([]);
    const [img, setimg] = useState([]);
    const [val, setval] = useState([]);
    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const id = sessionStorage.getItem('Productid');
    useEffect((_id) => {
        // console.log(id)
        axios.get(`http://localhost:5000/getsingleproduct/${id}`)
            .then(function (response) {
                // console.log(response.data);
                setdata(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });


        axios.get('http://localhost:5000/getallproduct')
            .then(function (response) {
                // console.log(response.data);
                setimg(response.data)
                setval(img.filter((img) => { return img.id !== id }));
                console.log(img);

                // console.log(response.data.splice(index))
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if (count > 1)
            setCount(count - 1);
    }

    const tocart = (_id) => {
        const userid = sessionStorage.getItem('Userid')
        if (!sessionStorage.getItem('Userid')) {
            navigate('/Login');
        }
        else {
            axios.post('http://localhost:5000/addtocart', {
                product_id: _id,
                user_id: userid
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
                navigate('/Shopping')
        }

    }


    // useEffect(() => {

    //     axios.get('http://localhost:5000/getallproduct')
    //         .then(function (response) {
    //             console.log(response.data);
    //             setdata(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });



    // }, []);
    return (
        <>
            <Header />
            {/* Main content start */}

            <div className='main-content1'>
                <div className='Product_bgimg1'>
                    <div className='content_row1'>
                        <div className='content_col1'>
                            <h1>Shop</h1>
                        </div>
                        <div className="content_col2">
                            <ul className='d-flex3'>
                                <li>
                                    <Link to="/"><BsHouseDoorFill /> Home</Link>
                                    <span><BsChevronRight /></span>
                                </li>
                                <li>
                                    <a>Diet Muesli</a>
                                    <span><BsChevronRight /></span>
                                </li>
                                <li>
                                    <a>Green Apple Muesli</a>
                                    <span><BsChevronRight /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main content end */}
            {/* Main content row start */}

            <div className="content_row1">
                <div className="content_with">
                    <div className="product_bar d-flex">
                        <div className="sticky_img sidebar sticky">
                            {/* <figure class="zoom" onmousemove="zoom(event)">
                                <img src={img1} />
                            </figure> */}
                            <img src={data.product_image}></img>

                            {/* <img src={img1}></img> */}
                            <div className="icn1"><FaSearch /></div>
                        </div>
                        <div className="column_inner1 content">
                            <div className="col_text">
                                <h2>{data.product_name}</h2>
                                <hr size="5px" align="" color='#E1E8EE' width="100%"></hr>
                                <p>${data.product_price}.00</p>
                                <p className="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <div className="product_meta d-flex">
                                    <div className="quantity d-flex ">
                                        <div className="input_icn" onClick={dec}><FaMinus /></div>
                                        <input type="text" value={count} className="input_text" readOnly></input>
                                        <div className="input_icn" onClick={inc}><FaPlus /></div>

                                    </div>
                                    <div className="btn2"><Button onClick={() => { tocart(data._id) }}>ADD TO CART</Button></div>
                                </div>
                                <hr size="5px" align="" color='#E1E8EE' width="100%"></hr>
                                <div className="product_meta1">
                                    <div className="product_meta_row">
                                        <div className="product_meta_col">
                                            <span className="posted_in">Category:
                                                <a href="#">Diet Muesli</a>
                                            </span>
                                            <div className="vr vrline"></div>
                                            <span className="tagged_as">Tags:
                                                <a href="#">apple, </a>
                                                <a href="#">green, </a>
                                                <a href="#">natural, </a>
                                                <a href="#">organic</a>
                                            </span>
                                        </div>
                                        <div className="product_meta_col1">
                                            <div className="product_icon"><BsShare /></div>
                                        </div>
                                    </div>
                                </div>
                                <hr size="5px" align="" color='#E1E8EE' width="100%"></hr>
                                <div className="woo_commerce">
                                    <ul className="tabs">
                                        <li className="Discript"><a href="#">Description</a></li>
                                        <li className="info"><a href="#">Additional information</a></li>
                                        <li className="info"><a href="#">Reviews (0)</a></li>
                                    </ul>
                                </div>
                                <div className="tab_title">
                                    <p>Proin justo eros, hendrerit vitae odio ac, laoreet suscipit risus.
                                        Curabitur vel sagittis lectus. Donec vitae efficitur ante. Nam mollis
                                        ligula tortor. Interdum et malesuada fames ac ante ipsum primis in
                                        faucibus. In et placerat risus, sed bibendum purus. Curabitur blandit
                                        mauris nec porta dapibus. Morbi porta lacinia eros vitae ullamcorper.
                                        Donec vulputate, lectus aliquam semper imperdiet, tortor purus hendrerit
                                        mauris, ac congue augue neque a risus. Curabitur mi mauris, vehicula sit
                                        amet sem ac, tincidunt blandit enim. Proin ornare quam et ullamcorper auctor.</p>
                                    <p>Suspendisse tristique porttitor magna, ac pulvinar libero lobortis at. Quisque sit amet facilisis eros. Vestibulum id ligula elementum, rutrum nunc sit amet, vulputate diam. Phasellus finibus mauris leo, quis commodo elit pellentesque quis. Phasellus a justo in enim maximus dictum nec interdum erat. Integer varius justo id nunc vulputate scelerisque. Curabitur maximus tristique magna. Nulla ut laoreet turpis, vel porta mauris. Suspendisse et varius orci, eget ullamcorper lacus. Duis accumsan odio at elit facilisis semper.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main content row end */}

            {/* Product 5516 start---- */}

            <section className="related_product container">
                <h2>Related products</h2>
                <hr size="5px" align="" color='#E1E8EE' width="83%"></hr>
            </section>
            <div className='row_content_img'>
                <div className='product_img d-flex'>
                    {
                        img.slice(0, 4).map((item) => {
                            return (
                                <>

                                    <ul className="product_column_4">
                                        <li className='prod_img'>
                                            <div><a href="#"><img src={item.product_image}></img></a></div>
                                            <div className='product_content d-flex'>
                                                <a href='#'><h2>{item.product_name}</h2></a>
                                                <span>${item.product_price}.00</span>
                                                <a className='cart_icon'><BsCartDash /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            {/* Product 5516 end---- */}
            <Footer />

        </>
    )
}
export default Greenapple;