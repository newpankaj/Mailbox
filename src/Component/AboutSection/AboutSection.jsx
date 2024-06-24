import React from "react";
import './style.scss';
import { image } from "../../Assets";

const AboutSection = () =>{
    return(
        <>
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="title" data-aos="fade-right">
                            <h2>What is <br/>Mailbox Money?</h2>
                        </div>
                        <p data-aos="fade-left" data-aos-delay="200">Mailbox money is our term for passive income. Although there is no such thing as passive income, the goal is to make it as passive as possible.</p>
                        <p data-aos="fade-left" data-aos-delay="200">Appreciation is the most passive way to create wealth and real estate is the least risky.</p>
                        <p data-aos="fade-left" data-aos-delay="200">That’s why we choose to invest in multifamily real estate, where a $50,000 investment can earn you $330 cash flow per month while you reap the rewards of appreciation, depreciation, and debt reduction.</p>
                        <p data-aos="fade-left" data-aos-delay="200">There’s three ways that we create forced appreciation</p>
                        <ul data-aos="fade-left" data-aos-delay="200">
                            <li>We buy undermarket through our network of deep relationships.</li>
                            <li>We purchase poorly managed properties.</li>
                            <li>We purchase dated units in need of updates.</li>
                        </ul>
                        <br/>
                        <button className="btn2" data-aos="fade-right" data-aos-delay="400">
                            <a href="/about" style={{color:'#000',textDecoration:'none',fontSize:'19px'}}>
                            Learn How
                            </a>                         
                            <svg width="17" height="12" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9V7L1 7L1 9Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">
                        <img src={image.homeabout} alt="" id="aboutimg"  data-aos="fade-up" data-aos-delay="200" style={{width:'80%',float:'right'}}/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default AboutSection;