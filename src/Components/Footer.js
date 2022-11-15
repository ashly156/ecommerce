import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3">
                        <div className="text-center">
                            <img src="/image/fast-delivery.png" alt='fast-delivery' className='img-fluid text-center' />
                        
                        <div className="footer-delivery">Fast delivery in 3-5 Days</div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <div className="footer-content d-flex justify-content-around">
                            <div>
                                <h4>QUICK LINKS</h4>
                                <ui className="footer-items list-unstyled">
                                    <li>Gift Card  </li>
                                    <li>Lookbook 2021</li>
                                    <li>Privacy Policy </li>
                                    <li>Shipping & Refund</li>
                                </ui>
                            </div>
                            <div>
                                <h4>COMPANY</h4>
                                <ui className="footer-items list-unstyled">
                                    <li>About Us   </li>
                                    <li>Contact Us</li>
                                    <li>Pricing Plan</li>
                                    <li>Knowledge Base</li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <h4>NEWSLETTER</h4>
                        <p>Sign up & get all our latest updates and special offers</p>
                        <InputGroup className=" footer-placeholder mb-3">
                            <Form.Control
                                placeholder="Enter Your Email address"
                                aria-label="Enter Your Email address"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">SUBSCRIBE</InputGroup.Text>
                        </InputGroup>
                        <ui className="footer-list list-unstyled">
                            <li> <img src="/image/Iconmetro-youtube2.svg" alt='metro-youtube' className='img-fluid' /></li>
                            <li><img src="/image/Iconawesome-linkedin.svg" alt='linkedin' className='img-fluid' /></li>
                            <li><img src="/image/Iconawesome-twitter.svg" alt='twitter' className='img-fluid' /></li>
                            <li><img src="/image/Iconawesome-facebook-f.svg" alt='facebook' className='img-fluid' /></li>
                        </ui>
                    </div>
                </div>
            </div>
            <div className="footer-row">
                    <p className="footer-copyright">© 2021 Alba. All Rights Reserved.
                    </p>
                </div>
        </div>
    );
}

export default Footer;