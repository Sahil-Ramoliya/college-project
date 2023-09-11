import img13 from '../src/img/asset12.png';
import img14 from '../src/img/asset13.jpeg';
import img15 from '../src/img/asset14.jpeg';
import { BsChevronRight, BsFillSignpostSplitFill, BsFillTelephoneFill, BsPhone, BsEnvelope, BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillRightCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className='bg_color'>
                <div className='footer_bg'>
                    <div className="footer-content container">
                        <div className="footer-with d-flex">
                            <div className="row1">
                                <div className='row_with'>
                                    <div className="col">
                                        <img src={img13}></img>
                                        <div className='text_with'>
                                            <p>Aliquam lorem ante, dapibus in, viverra quis,
                                                feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. </p>
                                        </div>
                                        <div>
                                            <div className='footer_email'>
                                                <span><input type="email" placeholder='Your Email Address'></input></span>
                                                <span className='footer_icon'>
                                                    <div className='right_icon'><BsChevronRight /></div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='pd-l'>
                                <div className='d-flex'>
                                    <div className='col'>
                                        <div className='inner_col'>
                                            <h5>CONTACT</h5>
                                        </div>
                                        <div className='text_style d-flex'>
                                            <div className='footer_icon1'><BsFillSignpostSplitFill /></div><div>63739 Street B:9<br />City, Country</div>
                                        </div>
                                        <div className='text_style d-flex'>
                                            <div className='footer_icon1'><BsFillTelephoneFill /> </div><div></div> +1 123 312 32 23</div>
                                        <div className='text_style d-flex'>
                                            <div className='footer_icon1'><BsPhone /> </div><div></div> +1 123 312 32 24</div>
                                        <div className='text_style1 d-flex'><div className='footer_icon1'><BsEnvelope /></div><a href='#'>info@company.com</a></div>
                                    </div>
                                    <div className='col'>
                                        <div className='inner_col'>
                                            <h5>CATEGORIES</h5>
                                            <div className='text_style'><p><AiFillRightCircle /> Chocolate Cookies</p></div>                           </div>
                                        <div className='text_style'><p><AiFillRightCircle /> Diet Muesli</p></div>
                                        <div className='text_style'><p><AiFillRightCircle /> Jams & Honeys</p></div>
                                        <div className='text_style'><p><AiFillRightCircle /> Organic Foods</p></div>
                                        <div className='text_style'><p><AiFillRightCircle /> SPA Products</p></div>
                                    </div>
                                    <div className='row_with1'>
                                        <div className='col'>
                                            <div className='inner_col'>
                                                <h5>LATEST NEWS</h5>
                                            </div>
                                            <div>
                                                <div className='d-flex'>
                                                    <div className='inner_col'>
                                                        <span>February 27,2022</span>
                                                        <div className='text_style'><a>Natural Therapeutic Soaps With Mind Body Benefits</a></div>
                                                    </div>
                                                    <div className='footer_img'>
                                                        <img src={img14}></img>
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <div className='inner_col'>
                                                        <span>February 27,2022</span>
                                                        <div className='text_style'><a>Six Top Grade Natural Aromatherapy Essential Oils</a></div>
                                                    </div>
                                                    <div className='footer_img'>
                                                        <img src={img15}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr size="5px" align="" color='#e1e8ee' width="100%"></hr>

                <div className='container pd-t'>
                    <div className='footer1'>
                        <div className='copyright'>Copyright ©
                            <a href="http://rtthemes.com" target="_blank" title="Premium WordPress Themes">RT-Themes</a>
                        </div>
                        <div>
                            <ul className='footer_end text_deco'>
                                <a href='#'><li>Terms</li></a>
                                <a href='#'><li>Privacy Policy</li></a>
                                <a href='#'><li>Careers</li></a>
                            </ul>
                        </div>
                        <div>
                            <ul className='footer_end footer_icn'>
                            <a href='#'><li><BsFacebook /></li></a>
                            <a href='#'><li><AiFillInstagram /></li></a>
                            <a href='#'><li><BsLinkedin /></li></a>
                            <a href='#'><li><BsTwitter /></li></a>
                            <a href='#'><li><BsYoutube /></li></a> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;