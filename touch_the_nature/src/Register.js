import { Link, useNavigate } from "react-router-dom";
import './App.css';
import { isValidElement, useState } from "react";
import axios from "axios";
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
      if((password.length<=6) || (password .length>=12) && (retypepassword.length<=6) || (retypepassword.length>=12)){
        isValid = false;
        alert("Enter Valid Name !!!")
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
        <center>
          <div className="register-box">
            <div className="register-logo">
              <a >
                <b>Admin</b>LTE
              </a>
            </div>
            <div className="card">
              <div className="card-body register-card-body">
                <p className="login-box-msg">Register a new membership</p>
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                      onChange={(e) => { setname(e.target.value) }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => { setemail(e.target.value) }} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => { setpassword(e.target.value) }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Retype password"
                      onChange={(e) => { setretypepassword(e.target.value) }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    {/* <div>
                      <select className="form-control input-group-append
                      " onChange={(e) => {setRole(e.target.value)}} >
                        <option value="user" disabled selected>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="terms"
                          defaultValue="agree"
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    {/* /.col */}
                    <div className="col-4">
                      <button className="btn btn-primary btn-block" onClick={btnhandler}>
                        Register
                      </button>
                    </div>
                    {/* /.col */}
                  </div>
                </form>
                <div className="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" />
                    Sign up using Facebook
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" />
                    Sign up using Google+
                  </a>
                </div>
                <a href="login.html" className="text-center">
                  I already have a membership
                </a>
              </div>
              {/* /.form-box */}
            </div>
            {/* /.card */}
          </div>
          {/* /.register-box */}
          {/* jQuery */}
          {/* Bootstrap 4 */}
          {/* AdminLTE App */}
        </center>

      </>
    )
  }

  export default Register;