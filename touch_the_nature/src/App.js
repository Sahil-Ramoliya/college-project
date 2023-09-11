import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';
import Shop from './Shop';
import Greenapple from './Greenapple';
// import Dashboard from './Dashboard';
import Editpd from './Editpd';
import Product from './Product';
import Viewpd from './Viewpd';
import Cart from './Cart';
import Shopping from './Shopping';
import Blog from './Blog';



function App() {
  return (
    <>
    {/* <Header/>
    <Body/>
    <Footer/> */}
    {/* <Shop/> */}
    <Outlet />
    {/* <Greenapple/> */}
    {/* <Dashboard/> */}
    {/* <Editpd/> */}
    {/* <Sidebar/> */}
    {/* <Product/> */}
    {/* <Viewpd/> */}
    {/* <Cart/> */}
    {/* <Shopping/> */}
    {/* <Blog/> */}
    </>
  );
}

export default App;
