import { Link, useNavigate } from "react-router-dom";
// import './App.css';
import { isValidElement, useState } from "react";
import axios from "axios";
import Header from '../Header';
import Footer from '../Footer';
import './register.css';
const Register = () => {

    const navigate = useNavigate()
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [retypepassword, setretypepassword] = useState("");
    const [role, setRole] = useState("")
    // const [isget, issetget] = useState(false);
    const [message, setmessage] = useState("");
    var data = "";
    const btnhandler = (e) => {
        let isValid = true;

        e.preventDefault();

        if (password !== "undefined" && retypepassword !== "undefined") {
            if (password != retypepassword) {
                isValid = false;
                alert('Please enter correct password')
            }
            if ((password.length <= 6) || (password.length >= 12) && (retypepassword.length <= 6) || (retypepassword.length >= 12)) {
                isValid = false;
                alert("Enter Valid Name")
            }

            else {

                axios
                    .post("http://localhost:5000/userRegister", {
                        name: name,
                        email: email,
                        password: password,
                        role: "user",

                    })
                    .then(function (response) {
                        data = response.data;

                        if (data != "") {
                            navigate('/Login');
                        } else {
                            setmessage(response.message);
                        }
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    }, []);

            }
        }
    };
    return (
        <>
        <Header/>
            <div className="containers">
                <h2>Registration Form</h2>
                <form>
                    <div className="forms-groups">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required 
                        onChange={(e)=>{setname(e.target.value)}} value={name}/>
                    </div>
                    <div className="forms-groups">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                    </div>
                    <div className="forms-groups">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
                    </div>
                    <div className="forms-groups">
                        <label htmlFor="con-password">Conform Password</label>
                        <input type="password" name="retypepassword" required onChange={(e)=>{setretypepassword(e.target.value)}} value={retypepassword}/>
                    </div>
                    <div className="divforbtn">
                            <button onClick={btnhandler}>Register</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Register;