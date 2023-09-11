import { Link, useNavigate } from "react-router-dom";
import './App.css';
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
            const userid  = sessionStorage.getItem('Userid')
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
      <center>
        <div className="login-box">
          <div className="login-logo">
            <a>
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form>
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
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button className="btn btn-primary btn-block" onClick={btnhandler}>
                      Login
                    </button>



                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <Link to="/Register" className="text-center">
                  Register a new membership
                </Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </center>

    </>
  )
}
export default Login;