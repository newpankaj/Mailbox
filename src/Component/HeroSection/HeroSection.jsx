import React from "react";
import './style.scss';

const HeroSection = () =>{
    return(
        <>
        <section className="hero">
            {/* <video src={require('../../Assets/mailbox-main.mp4')} muted loop autoPlay controls style={{}}/> */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2>Mailbox Money</h2>
                        <h4>Grow Invest Earn</h4>
                        <button className="btn2" data-aos="fade-up">
                            <a href="https://boardwalkwealth.investnext.com/" target="_blank">Access the Investor Portal 
                                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9V7L1 7L1 9Z" fill="white"/>
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
               
        </section>
        </>
    )
}

export default HeroSection;