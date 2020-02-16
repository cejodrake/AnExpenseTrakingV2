import React from 'react';

const Footer = () => {

    return (

        <footer className="mainfooter" role="contentinfo">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <h4>Information in Ours Company</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#"></a></li>
                                    <li><a href="#">Payment Information  Center</a></li>
                                    <li><a href="#">Contact Directory</a></li>
                                    <li><a href="#">News and Updates</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">

                            <div className="footer-pad">
                                <h4>Codes</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#">Tutorial</a></li>
                                    <li><a href="#">Youtube Training </a></li>
                                    <li><a href="#">Email</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Webmaster</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <h4>Follow Us</h4>
                            <ul className="social-network social-circle">
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 copy">
                            <p className="text-center">&copy; Copyright 2020 - Company DaYaSa .  All rights reserved.</p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>

    )
}

export default Footer;