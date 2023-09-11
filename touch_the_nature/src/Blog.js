import Header from "./Header"
import './Blog.css';
import { BsHouseDoorFill, BsChevronRight } from "react-icons/bs";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Blog = () => {
    return(
        <>
        <Header/>
        
        {/* Main content start */}

        <div className='main-content1'>
                <div className='Product_bgimg1'>
                    <div className='content_row1'>
                        <div className='content_col1'>
                            <h1>Blog</h1>
                        </div>
                        <div className="content_col2">
                            <ul className='d-flex3'>
                                <li>
                                    <Link to="/"><BsHouseDoorFill /> Home</Link>
                                    <span><BsChevronRight /></span>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main content end */}
            {/* Blog-content start */}

            <div className="blog_bg">
                <div className="blog-text">
                    <h1>Comming<br/>Soon...</h1>
                </div>
            </div>
            {/* Blog-content end */}
            <Footer/>
        </>
    )
}
export default Blog;