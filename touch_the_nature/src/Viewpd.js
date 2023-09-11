import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";


import './Viewpd.css';
import Header from './Header';
import Sidebar from './Sidebar';

import axios from "axios";


const Viewpd = (e) => {
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



  },)

  const getval = (_id) => {

    sessionStorage.setItem("Id", _id);
    navigate('/Editpd')

  }
  const delpro = (_id) => {
    axios.delete(`http://localhost:5000/deleteproduct/${_id}`)
      .then(function (response) {
        e.preventDefault();

        console.log(response.data);
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
      <Header />
      <Sidebar/>
      {/* <table align="center" border="1px solid" cellSpacing='0' cellPadding='20px'> */}
      <div className='maincard'>
        {
          data.map((item) => {
            return (
              <>
                <div className="content-wrapper">
                  <div className='card'>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={item.product_image} />
                      <Card.Body>
                        <Card.Title>{item.product_name}</Card.Title>
                        <Card.Text>
                          {item.product_description}
                        </Card.Text>
                        <Card.Text>
                          {item.product_catagory}
                        </Card.Text>
                        <h6>{item.product_price}</h6>
                      </Card.Body>
                      <div className='btn1'>
                        <Button variant="primary" onClick={() => { getval(item._id) }}>Edit</Button>{' '}
                        <Button variant="danger" onClick={() => { delpro(item._id) }}>Delete</Button>{' '}
                      </div>
                    </Card>

                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      {/* </table> */}
    </>
  )
}

export default Viewpd;