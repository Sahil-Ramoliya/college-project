import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from './Shop';
import Home from './Home';
import Login from './component/Login';
import Greenapple from './Greenapple';
import Dashboard from './Dashboard';
import Editpd from './Editpd';
import Register from './component/Register';
import Product from './Product';
import Viewpd from './Viewpd';
import Shopping from './Shopping';
import Cart from './Cart';
import Blog from './Blog';
import Service from './Service';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>} />
          <Route path='Login' element={<Login/>} />
          <Route path='Register' element={<Register/>} />
          <Route path='Product' element={<Product/>} />
          <Route path='Viewpd' element={<Viewpd/>} />
          <Route path="shop" element={<Shop />} />
          <Route path="Greenapple" element={<Greenapple/>} />
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="Editpd" element={<Editpd/>} />
          <Route path="Shopping" element={<Shopping/>} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Service" element={<Service />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
