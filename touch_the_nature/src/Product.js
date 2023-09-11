import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { useState } from "react";

import Sidebar from "./Sidebar";


import axios from "axios";
import Admin_footer from "./Admin_footer";
import Admin_header from "./Admin_header";


const Product = () => {
    const navigate = useNavigate()
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [catagory, setcatagory] = useState("");
    const [price, setprice] = useState("");
    // const [isget, issetget] = useState(false);
    const [message, setmessage] = useState("");
    var data = "";
    const btnhandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/createproduct", {
                product_image: image,
                product_name: name,
                product_description: description,
                product_catagory:catagory,
                product_price: price,
            })
            .then(function (response) {
                data = response.data;

                if (data != "") {
                    navigate('/Viewpd');
                } else {
                    setmessage(response.message);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
            return (
                <>

                    <Admin_header   />
                    <Sidebar />
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Quick Example</h3>
                            </div>
                            {/* /.card-header */}
                            {/* form start */}
                            <form>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Product URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            onChange={e => setimage(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            onChange={e => setname(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            onChange={e => setdescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product catagory</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            onChange={e => setcatagory(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            onChange={e => setprice(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary" onClick={btnhandler}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Admin_footer/>

                </>
            )
        }
    




export default Product;