import Slider from "./Slider";
import Card from 'react-bootstrap/Card';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsShop, BsChevronRight } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import img3 from '../src/img/asset2.png';
import img4 from '../src/img/asset3.png';
import img5 from '../src/img/asset4.png';
import img6 from '../src/img/asset5.png';
import img7 from '../src/img/asset6.png';
import img8 from '../src/img/asset7.png';
import img9 from '../src/img/asset8.png';
import img10 from '../src/img/asset9.png';
import img11 from '../src/img/asset10.png';
import img12 from '../src/img/asset11.png';


const options = {
    loop: true,
    items: 2,
    autoplay: true,
    autoplayTimeout: 2000
};
const Body = () => {
    return (
        <>
            <Slider />
            {/* card section start */}
            <CardGroup className="card">
                <Card className="card1">
                    <Card.Body className="txt">
                        <div className="icon">
                            <div className="border1">
                                <div className="icon1">
                                    <BsShop />
                                </div>
                            </div>
                        </div>
                        <div className="txt1">
                            <h6>Availability</h6>
                            <p>Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card1">
                    <Card.Body className="txt">
                        <div className="icon">
                            <div className="border1">
                                <div className="icon1">
                                    <FaFlask />
                                </div>
                            </div>
                        </div>
                        <div className="txt1">
                            <h6>Natural Process</h6>
                            <p>Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card1">
                    <Card.Body className="txt">
                        <div className="icon">
                            <div className="border1">
                                <div className="icon1">
                                    <RiPlantLine />
                                </div>
                            </div>
                        </div>
                        <div className="txt1">
                            <h6>Organic Products</h6>
                            <p>Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum.</p>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* card section end */}

            {/* background image start */}

            <div className="bg_img">
                <div className="background d-flex">
                    <div className="head container">
                        <div className="text1">
                            <span>NEW PRODUCTS</span>
                        </div>
                        <div className="text2">
                            <span>naturalife is good for your health</span>
                            <div className="d-flex2">
                                <h4>How NarturaLife Helps You Feel Better After Ten Days of Usage? </h4>
                                <svg width="95" height="10" viewBox="0 0 95 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8" stroke-width="3" stroke="#6CC139" fill="none" fill-rule="evenodd"></path></svg>
                            </div>
                            <div className="text3">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor nisl nec ex consectetur, quis ornare sem molestie. Sed suscipit sollicitudin nulla tempor congue. Integer sed elementum odio. </p>
                            </div>
                            <div className="tag1">
                                <div className="icn"><BsChevronRight /></div>
                                <div className="txt2"><a>read more</a></div>
                            </div>
                        </div>

                        <div className="img1">
                            <img src={img3}></img>
                        </div>
                    </div>
                </div>
                <div className="backg"></div>

            </div>

            {/* background image end */}

            {/* slider section start */}
            <div className="sec_content">
                <div className="container">
                    <div className="sec_row d-flex">
                        <div className="text1">
                            <span>TESTIMONIALS</span>
                        </div>
                        <div className="sec_col">
                            <OwlCarousel className='owl-carousel' {...options}>
                                <div className='item3'>
                                    <div>
                                        <span className="icn1">
                                            <fontsninja-text id="fontsninja-text-790" class="fontsninja-family-rule_roboto-slab_700_normal">“</fontsninja-text>
                                        </span>
                                        <h6 className="quote">100% Recommended</h6>
                                        <p className="text4">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                            massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                                        <div className="d-flex3">
                                            <div className="client_image">
                                                <img src={img4}></img>
                                            </div>
                                            <div className="client_info">
                                                <h6>Larry Wilson</h6>
                                                <span>Journalist</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item3'>
                                    <div>
                                        <span className="icn1">
                                            <fontsninja-text id="fontsninja-text-790" class="fontsninja-family-rule_roboto-slab_700_normal">“</fontsninja-text>
                                        </span>
                                        <h6 className="quote">I Feel Healthy, Vital and Energetic Once Again!</h6>
                                        <p className="text4">Nullam a ultrices ex, quis finibus neque. Etiam facilisis consectetur
                                            ante ac bibendum. Sed pretium lacinia sollicitudin. Fusce molestie ac turpis cursus
                                            ultricies. Sed euismod justo vitae lectus auctor, mattis ultrices nisi pretium.</p>
                                        <div className="d-flex3">
                                            <div className="client_image">
                                                <img src={img5}></img>
                                            </div>
                                            <div className="client_info">
                                                <h6>Amanda Richard</h6>
                                                <span>Teacher</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item3'>
                                    <div>
                                        <span className="icn1">
                                            <fontsninja-text id="fontsninja-text-790" class="fontsninja-family-rule_roboto-slab_700_normal">“</fontsninja-text>
                                        </span>
                                        <h6 className="quote">NaturaLife is the Best!</h6>
                                        <p className="text4">Nam orci orci, pretium vel elementum eu, vestibulum at sapien.
                                            Sed pretium turpis lacus, ut vehicula odio tempor non. Duis fermentum massa sed
                                            laoreet suscipit. Mauris sed semper urna, a facilisis elit. </p>
                                        <div className="d-flex3">
                                            <div className="client_image">
                                                <img src={img6}></img>
                                            </div>
                                            <div className="client_info">
                                                <h6>Jane Travis</h6>
                                                <span>Writer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider section end */}

            {/* image section start */}

            <div className="bg_text">
                <div className="container">
                    <div className="img_row d-flex">
                        <div className="img_text">
                            <span>OUR CLIENTS</span>
                        </div>
                        <div className="img_text1">
                            <div className="img_col">
                                <div className="img_head">
                                    <h4>Trusted by World’s Biggest Brands</h4>
                                    <svg width="95" height="10" viewBox="0 0 95 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 8l11.54-6 11.538 6 11.54-6 11.538 6 11.538-6 11.54 6L81.77 2 94 8"
                                        stroke-width="3" stroke="#6CC139" fill="none" fill-rule="evenodd"></path></svg>

                                </div>
                                <div className="img_cont">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor nisl nec ex consectetur, quis ornare sem molestie. Sed suscipit sollicitudin nulla tempor congue. Integer sed elementum odio. </p>
                                </div>
                                <div className="tag1">
                                    <div className="icn"><BsChevronRight /></div>
                                    <div className="txt2"><a>read more</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="img_banner">
                            <div className="row gy-4">
                                <div className="col-4">
                                    <img src={img7}></img>
                                </div>
                                <div className="col-4">
                                    <img src={img8}></img>
                                </div>
                                <div className="col-4">
                                    <img src={img9}></img>
                                </div>
                                <div className="col-4">
                                    <img src={img10}></img>
                                </div>
                                <div className="col-4">
                                    <img src={img11}></img>
                                </div>
                                <div className="col-4">
                                    <img src={img12}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* image section end */}

            {/* bg image start */}

            <div className="bg_img1">
                <div className="img2">
                    <div className="container1">
                        <div className="bg_text1 text-center">
                            <div className="mar-b"> <span>35</span></div>
                            <div className="bg_text2">
                                <h4 className="text-center">Free shipping to every corner of the world </h4>
                            </div>
                            <div className="bg_text3">
                                <p>Vivamus commodo turpis vitae ligula luctus malesuada. Quisque non turpis ac felis molestie bibendum nec
                                    eget sem. Mauris feugiat pretium est, at iaculis est. Integer nec eros velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bg image end */}
            {/* text board start */}

            <div className="text_bd">
                <div className="container1">
                    <div>
                        <div className="text_bd1 d-flex">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor
                                nisl nec ex consectetur, quis ornare sem molestie. </p>
                            <div className='content2'>
                                <a href='#'><button>SHOP NOW</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* text board end */}




        </>
    )
}
export default Body;