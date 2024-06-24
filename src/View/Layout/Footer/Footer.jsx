import React from "react";
import './style.scss';
import { image } from "../../../Assets";

const Footer = () =>{
    return(<>
        <footer>
            <div className="container main-footer">
                <div className="row">
                    
                    <div className="col-lg-2 col-4 logo">
                        <img src={image.logo} alt="" />
                    </div>
                    <div className="col-lg-8 col-6 menu-wrapper d-flex align-items-center justify-content-center">
                        <div className="menu">
                            <ul> 
                                <li><a href="https://boardwalkwealth.investnext.com/" target="_blank">Investor</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/media">Media</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/podcast">Podcast</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-2 linkedin d-flex gap-3 justify-content-end">

                        <a href="https://www.youtube.com/@mailboxmoneyre" target="_blank">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1069_126)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.3347 0C28.3577 0 30 1.64238 30 3.66527V26.3347C30 28.3576 28.3576 30 26.3347 30H3.66527C1.64238 30 0 28.3576 0 26.3347V3.66527C0 1.64238 1.64232 0 3.66527 0L26.3347 0ZM25.1062 10.2908C24.8637 9.38326 24.1489 8.66854 23.2414 8.42602C21.5962 7.98516 15 7.98516 15 7.98516C15 7.98516 8.40381 7.98516 6.75861 8.42602C5.85123 8.66854 5.13639 9.38326 4.89381 10.2908C4.45312 11.9358 4.45312 15.3681 4.45312 15.3681C4.45312 15.3681 4.45312 18.8003 4.89381 20.4451C5.13639 21.3527 5.85123 22.0676 6.75861 22.3101C8.40381 22.7508 15 22.7508 15 22.7508C15 22.7508 21.5962 22.7508 23.2414 22.3101C24.1489 22.0676 24.8637 21.3527 25.1062 20.4451C25.5469 18.8003 25.5469 15.3681 25.5469 15.3681C25.5469 15.3681 25.5469 11.9358 25.1062 10.2908ZM12.8905 18.5322V12.204L18.3708 15.3681L12.8905 18.5322Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1069_126">
                            <rect width="30" height="30" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/dusten-hendrickson" target="_blank">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1046_496)">
                            <path d="M27.4738 0.958984H2.90124C1.4025 0.958984 0.1875 2.17398 0.1875 3.67273V28.2452C0.1875 29.744 1.4025 30.959 2.90124 30.959H27.4737C28.9725 30.959 30.1875 29.744 30.1875 28.2452V3.67273C30.1875 2.17398 28.9725 0.958984 27.4738 0.958984ZM9.47077 26.863C9.47077 27.2991 9.11721 27.6527 8.68103 27.6527H5.31931C4.88313 27.6527 4.52957 27.2991 4.52957 26.863V12.7707C4.52957 12.3346 4.88313 11.981 5.31931 11.981H8.68103C9.11721 11.981 9.47077 12.3346 9.47077 12.7707V26.863ZM7.00017 10.6526C5.23637 10.6526 3.80651 9.22273 3.80651 7.45893C3.80651 5.69514 5.23637 4.26527 7.00017 4.26527C8.76397 4.26527 10.1938 5.69514 10.1938 7.45893C10.1938 9.22273 8.76404 10.6526 7.00017 10.6526ZM27.0391 26.9266C27.0391 27.3276 26.7139 27.6527 26.3129 27.6527H22.7056C22.3046 27.6527 21.9794 27.3276 21.9794 26.9266V20.3165C21.9794 19.3305 22.2687 15.9955 19.4025 15.9955C17.1793 15.9955 16.7283 18.2782 16.6378 19.3026V26.9266C16.6378 27.3276 16.3127 27.6527 15.9117 27.6527H12.4227C12.0217 27.6527 11.6966 27.3276 11.6966 26.9266V12.7071C11.6966 12.3061 12.0217 11.981 12.4227 11.981H15.9117C16.3127 11.981 16.6378 12.3061 16.6378 12.7071V13.9366C17.4622 12.6994 18.6873 11.7445 21.2958 11.7445C27.0721 11.7445 27.0391 17.1411 27.0391 20.1062V26.9266Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1046_496">
                            <rect width="30" height="30" fill="white" transform="translate(0.1875 0.958984)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="col-12">
                        <p className="disclosure">
                            Disclosure of Interests:<br/>
                        “ All securities offered by Mailbox Money RE and its affiliates are made pursuant to an exemption from registration under the Securities Act of 1933. The Securities offered are only done so to certain qualified investors through the offering documents and may involve certain risk factors as discussed therein. Nothing on this website can be constituted to be an offer or sale of securities. We make no representation or guarantee as to the success of any investment. Investors should always consult a qualified financial professional before making any investment decisions."
                        </p>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <span>© Mailbox Money 2024. All rights reserved. </span>
                        <span><a href="/privacy-policy" style={{color:'#fff',textDecoration:'none', paddingLeft:'50px',pointer:'cursor'}}> Privacy Policy</a></span>
                    </div>
                    <div className="col-sm-6 col-12 d-flex justify-content-end">
                        <span className="poweredby">Powered by <a href="https://www.techqilla.com" target="_blank" style={{color:'#ffffff90',opacity:'0.6',textDecoration:'none',cursor:'pointer'}}>TechQilla</a> </span>
                    </div>
                </div>
            </div>
            
        </footer>
    </>)
}

export default Footer;