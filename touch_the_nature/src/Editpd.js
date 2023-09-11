
import { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Admin_header from "./Admin_header";
import Admin_footer from "./Admin_footer";


const Editpd = () => {
    const [data, setdata] = useState()
    const [name, setname] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");
    const navigate = useNavigate();
    // e.preventDefault();
    // navigate('/Editpd')
    const id = sessionStorage.getItem("Id");

    useEffect(() => {
        console.log(id)
        axios.post(`http://localhost:5000/updateproduct/${id}`)
        .then(function (response) {
        console.log(response.data);
        setname(response.data.product_name)
        setimage(response.data.product_image)
        setdescription(response.data.product_description)
        setprice(response.data.product_price)
    })
    .catch(function (error) {
      console.log(error);
    });
    }, [])
    
    const getval = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/updateproduct/${id}`, {
                product_image: image,
                product_name: name,
                product_description: description,
                product_price: price,
            })
            .then(function (response) {
                    setdata(response.data);

                if (data != "") {
                    navigate('/Viewpd');
                } else {
                    // setmessage(response.message);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            }

    return(
       <>
        <Admin_header/>
        <Sidebar/>
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
                                            value={image}
                                            onChange={e => setimage(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={name}
                                            onChange={e => setname(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={description}
                                            onChange={e => setdescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Product Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            value={price}
                                            onChange={e => setprice(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* /.card-body */}
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary" onClick={getval}>
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
export default Editpd;