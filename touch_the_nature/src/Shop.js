import Header from './Header';
import './Shop.css';
import { BsHouseDoorFill, BsChevronRight, BsCartDash, BsFillRecordFill, BsSearch } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { AiFillRightCircle } from "react-icons/ai";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from './img1/asset2.jpeg';
import img2 from './img1/asset3.jpeg';
import img3 from './img1/asset4.jpeg';
import img4 from './img1/asset5.jpeg';
import img5 from './img1/asset6.jpeg';
import img6 from './img1/asset7.jpeg';
import img7 from './img1/asset8.jpeg';
import img8 from './img1/asset9.jpeg';
import img9 from './img1/asset10.jpeg';
import Footer from './Footer';

const Shop = () => {
    const navigate = useNavigate();

    const [message, setmessage] = useState('')

    const [data, setdata] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/getallproduct')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });


 
    }, []);
    const greencard = (_id,i) => {
        sessionStorage.setItem("Productid",_id); 
            navigate('/greenapple')
    }

    return (
        <><Header />

            {/* Main content start */}

            <div className='main-content'>
                <div className='Product_bgimg'>
                    <div className='content_row'>
                        <div className='content_col'>
                            <h1>Shop</h1>
                        </div>
                        <div>
                            <ul className='d-flex2'>
                                <li>
                                    <Link to="/"><BsHouseDoorFill />Home</Link>
                                    <span><BsChevronRight /></span>
                                </li>
                                <li>
                                    <a>Shop</a>
                                    <span><BsChevronRight /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main content end */}
            <div className='shop_content d-flex container justify-content-between'>
                <div className='inner_content'>
                    <p>	Showing all {data.length} results</p>
                </div>
                <div className='inner_content1'>
                    <select>
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by latest</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                    </select>
                </div>
            </div>

            <div className='line'></div>
            <div className='d-flex'>

                <div className='main_content_row d-flex'>
                    {
                        data.map((item,i) => {
                            return (
                                <>


                                    <ul className='d-flex img_with'>
                                        <li className='prod_img'>
                                            <div onClick={() => { greencard(item._id,i)}}>
                                            <img src={item.product_image}></img>
                                            </div>
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
                <div className='row_content1'>
                    <div className='col_content1'>
                        <div className='column_inner'>
                            <div className='prod_icon'><FaAngleRight /></div>
                            <h5>Categories</h5>
                            <hr size="5px" align="" color='#E1E8EE' width="40%"></hr>
                        </div>
                        <div className='column_inner1'>
                            <ul>
                                <li className='text_style'><p><AiFillRightCircle /> Chocolate Cookies</p></li>
                                <li className='text_style'><p><AiFillRightCircle /> Diet Muesli</p></li>
                                <li className='text_style'><p><AiFillRightCircle /> Jams & Honeys</p></li>
                                <li className='text_style'><p><AiFillRightCircle /> Organic Foods</p></li>
                                <li className='text_style'><p><AiFillRightCircle /> SPA Products</p></li>
                                <li className='text_style'><p><AiFillRightCircle /> Uncategorized</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='Price_filter'>
                        <div className='Price_filter_content'>
                            <div className='price_dots_l'><BsFillRecordFill /></div>
                            <div className='Price_line'></div>
                            <div className='price_dots_r'><BsFillRecordFill /></div>
                        </div>
                        <div className='Price_slider_amount'>
                            <button type='submit' className='button'>Filter</button>
                            <div className='Price_label '>price:<span className='Price'>$10-$50</span></div>
                        </div>
                    </div>
                    <div className='product_content1'>
                        <div className='column_inner'>
                            <div className='prod_icon'><FaAngleRight /></div>
                            <h5>Recent products</h5>
                            <hr size="5px" align="" color='#E1E8EE' width="20%"></hr>
                        </div>
                        <div>
                            <ul className='product_list_widge'>
                                <li className='product_img1'>
                                    <a href='#'><img src={img9}></img></a>
                                    <div className='class'>
                                        <a href='#'><p>Low Fat Natural Yoghurt</p></a>
                                        <span>$14.00</span>
                                    </div>

                                </li>
                                <hr size="2px" align="" color='#E1E8EE' width="70%"></hr>

                                <li className='product_img1'>
                                    <a href='#'><img src={img8}></img></a>
                                    <div className='class'>
                                        <a href='#'><p>Low Carb Protein Muesli</p></a>
                                        <span>$12.00</span>
                                    </div>

                                </li>
                                <hr size="2px" align="" color='#E1E8EE' width="70%"></hr>
                                <li className='product_img1'>
                                    <a href='#'><img src={img1}></img></a>
                                    <div className='class'>
                                        <a href='#'><p>Green Apple Muesli</p></a>
                                        <span>$42.00</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='tag_cloud'>
                        <div className='column_inner'>
                            <div className='prod_icon'><FaAngleRight /></div>
                            <h5>Tags</h5>
                            <hr size="5px" align="" color='#E1E8EE' width="50%"></hr>
                        </div>
                        <div className='tagcloud'>
                            <button className='btn1'>apple</button>
                            <button>breakfast</button>
                            <button>coffie</button>
                            <button>green</button>
                            <button>natural</button>
                            <button>organic</button>
                        </div>
                    </div>
                    <div className='search_product'>
                        <span><input type="text" placeholder='Search Products...'></input> </span>
                        <span className='search_icon'><div><BsSearch /></div></span>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    );
}
export default Shop;