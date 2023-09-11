import { Link, useNavigate } from "react-router-dom";
// import './App.css';
import Header from '../Header';
import Footer from '../Footer';
import './login.css';
import { useState } from "react";
import axios from "axios";

const Login = (Productid) => {
    const navigate = useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const [message, setmessage] = useState("");
    sessionStorage.setItem('Email', email);
    sessionStorage.setItem('Password', password);

    var data = "";

    const btnhandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/userLogin", {
                email: email,
                password: password,

            })
            .then(function (response) {
                data = response.data;

                if (data != "") {
                    sessionStorage.setItem('Userid', response.data._id)
                    sessionStorage.setItem('Username', response.data.name)

                    if (data.role === "user") {

                        const _id = sessionStorage.getItem('Productid')
                        const userid = sessionStorage.getItem('Userid')
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

                    } else {
                        navigate('/Dashboard')
                    }
                } else {
                    setmessage(response.message);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }, []);


    };
    return (
        <>
            <Header/>
            <div className="main-container">
                <h2>LOGIN YOUR ACCOUNT</h2>
                <form action="" method="post">
                    <div className="fildone">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            onChange={(e) => { setemail(e.target.value) }}
                            value={email}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={(e) => { setpassword(e.target.value) }}
                            value={password}
                        />
                    </div>
                    <div className="button">
                        <a href="#">
                            <button onClick={btnhandler}>Login</button>
                        </a>
                        <br />
                        <br />
                        <span>
                            <Link to="/Register" className="text-center">
                                Register a new membership
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
            <Footer/>    

        </>
    )
}
export default Login;