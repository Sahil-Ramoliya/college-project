import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img from './img/asset21.png';
import img1 from './img/asset22.png';
import img2 from './img/asset23.png';
const options = {
    loop:true,
    items: 1,   
    autoplay: true,
    autoplayTimeout:3000
    
};

const Slider = () => {
    return (
        <>
            {/* -------slider start------- */}
            <OwlCarousel className='owl-carousel'{...options}>
                <div class='item'>
                    <img src={img}></img>
                    <div className='text text-center'>
                        <span className='content'>our latest natural products</span>
                        <h2>NATURAL SOLUTIONS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et fringilla orci.
                            Maecenas<br /> convallis nisl et massa consequat pellentesque. Vivamus sed condimentum enim.</p>
                        <div className='content1'>
                            <a href='#'><button className='input'>SHOP NOW</button></a>
                            <a href='#'><span className='product'>see more product</span></a>
                        </div>
                    </div>
                </div>
                <div class='item item1'>
                    <div className='text text-center'>
                        <span className='content'>our latest skincare products</span>
                        <h2>HEALTHY & BEAUTIFUL</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et fringilla orci.
                            Maecenas convallis nisl et massa consequat pellentesque. Vivamus sed condimentum enim.</p>
                        <div className='content1'>
                            <a href='#'><button className='input'>SHOP NOW</button></a>
                            <a href='#'><span className='product'>see more product</span></a>
                        </div>
                    </div>
                    <img src={img1}></img>
                </div>
                <div class='item item2'>
                    <img src={img2}></img>
                    <div className='text text-center'>
                        <span className='content'>our latest healthy products</span>
                        <h2>HEALTHY & BEAUTIFUL</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et fringilla orci.
                            Maecenas<br /> convallis nisl et massa consequat pellentesque. Vivamus sed condimentum enim.</p>
                        <div className='content1'>
                            <a href='#' className='effect'><button className='input'>SHOP NOW</button></a>
                            <a href='#'><span className='product'>see more product</span></a>
                        </div>
                    </div>
                </div>

            </OwlCarousel>

            {/* -------slider end------- */}
        </>
    )
}
export default Slider;