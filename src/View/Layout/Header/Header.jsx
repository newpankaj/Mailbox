import React, {useEffect, useState} from "react";
import './style.scss';
import 'font-awesome/css/font-awesome.min.css';
import { image } from "../../../Assets";
import { Location, useLocation } from "react-router-dom";


const Header = () =>{

    const [openMenu, setopenMenu] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        const headerMenulink = document.querySelectorAll('.menu ul li a');        
        if (headerMenulink) {
            for(var i= 0; i<headerMenulink.length; i++)
            {   
                if(window.location.href === headerMenulink[i].href){
                    (headerMenulink[i].parentElement.classList.add('active'))   
                }
            }
        }
          
    }, [location.pathname]);
    

    return(
        <>      
        <header>
            <div className="topbar container-fluid">
                <div className="row">
                    <div className="col-6">
                        <span><a href="https://calendly.com/mailboxmoneyre" target="_blank">lets talk about investment</a></span>
                    </div>
                    <div className="col-6 mail">
                        <a href="mailto:dusten@mailboxmoenyre.com"><i className="fa fa-envelope" /> dusten@mailboxmoneyre.com</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mainbar">
                <div className="row">
                    <div className="col-3">
                        <a href="/"><img src={image.logo} alt="" id="logo"/></a>
                    </div>
                    <div className="col-9 d-flex align-items-center justify-content-end">
                        <div className="menu">
                            <ul>
                                <li className="page-link"><a href="/">Home</a></li>
                                {/* <li className="page-link"><a href="https://boardwalkwealth.investnext.com/" target="_blank">Investor</a></li> */}
                                <li className="page-link"><a href="/about">About</a></li>
                                <li className="page-link"><a href="/portfolio">Portfolio</a></li>
                                <li className="page-link"><a href="/media">Media</a></li>
                                <li className="page-link"><a href="/contact">Contact</a></li>
                                <li className="page-link"><a href="/podcast">Podcast</a></li>
                                <li><button className="btn"><a href="https://boardwalkwealth.investnext.com/" target="_blank" style={{color:'#fff',fontSize:'18px',textDecoration:'none'}}>Investor Login</a></button></li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mobilemainbar">
                <div className="row">
                    <div className="col-6">
                        <img src={image.logo} alt=""  />
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <button className="menubtn" onClick={()=>setopenMenu(!openMenu)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <div className="mobilemenu" style={{left:openMenu ? '0%' : '-100%'}}>
            <ul>
                <li className="page-link"><a href="/">Home</a></li>
                <li className="page-link"><a href="https://boardwalkwealth.investnext.com/" target="_blank">Investor</a></li>
                <li className="page-link"><a href="/about">About</a></li>
                <li className="page-link"><a href="/portfolio">Portfolio</a></li>
                <li className="page-link"><a href="/media">Media</a></li>
                <li className="page-link"><a href="/contact">Contact</a></li>
                <li className="page-link"><a href="/podcast">Podcast</a></li>
                <li><button className="btn"><a href="https://boardwalkwealth.investnext.com/" target="_blank" style={{color:'#fff',fontSize:'18px',textDecoration:'none'}}>Investor Login</a></button></li>
            </ul>

            <svg onClick={()=>setopenMenu(!openMenu)} id="closebtn" width="40" height="40" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.93823 15.3547L15.3546 1.93825" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2.64539 1.93825L16.0618 15.3547" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>

        </div>
        </>
    )
}

export default Header;