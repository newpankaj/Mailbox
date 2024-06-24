import React from "react";
import './style.scss';
import Banner from "../../../Utils/Banner/Banner";
import { image } from "../../../Assets";

const Invest = () =>{
    return(
        <>
        <Banner title="Earn Mailbox Money" bg={image.investorpagebg}/>
        <section className="loginform">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12 padd50">
                        <div className="title t1" data-aos="fade-up" style={{textAlign:'left', paddingBottom: '10px'}}>
                            <hr /> 
                            <h2>Login Account</h2>
                        </div>
                        <form>
                            <label>
                                <input type="email" placeholder="Email" />
                            </label>
                            <label>
                                <input type="password" placeholder="Password" />
                            </label>
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                    <div className="col-lg-4 col-12 formbg">
                        <img src={image.logo} alt="" />
                        <div className="d-flex">
                            <div className="title t1" style={{textAlign:'left', paddingBottom: '10px'}}>
                                <hr data-aos="fade-down" data-aos-delay="200" /> 
                                <h2 data-aos="fade-right" data-aos-delay="200">Welcome to our community</h2>
                                
                                <p data-aos="fade-left" data-aos-delay="200">To access your account, please identify yourself by providing the information requested in the fields below, then click "Login".</p>
                                <button  data-aos="fade-up" data-aos-delay="200">Sign up</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="investorsinfo">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div className="title t1" style={{textAlign:'left', paddingBottom: '10px'}}>
                            <hr data-aos="fade-right"/> 
                            <h2 data-aos="fade-right">Multifamily Investments Simplified</h2>
                            
                            <p data-aos="fade-left">While multifamily assets make for the ideal real estate investment opportunity, developing, acquiring, and managing multifamily assets, they can get really complicated.</p>
                            <p data-aos="fade-left">But investing doesn’t have to be. That’s why we aim to keep your investor experience as simple as possible.</p>
                            <p data-aos="fade-left">Join our Investor Community today to access our open opportunities. As always, we’ll only bring you the deals we’re vested in.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <img src={image.investor1} alt="" data-aos="fade-up"/>
                    </div>
                </div>
                <div style={{padding:'30px'}}></div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <img src={image.investor2} alt="" data-aos="fade-up"/>
                    </div>
                    <div className="col-lg-6 col-12 d-flex align-items-center">
                        <div className="title t1" style={{textAlign:'left', paddingBottom: '10px'}}>
                            <hr data-aos="fade-right" /> 
                            <h2 data-aos="fade-right">Investments Standard Simplified</h2>
                            <h6 data-aos="fade-left">Our standards are high but simple. Before any deal hits your inbox, it has to be this good:</h6>
                            <ul data-aos="fade-left"> 
                                <li>Stable, Value Add Opportunity with Attractive Flexible Debt</li>
                                <li>8% - 10% projected Avg Annual Cash on Cash Return</li>
                                <li>2x Equity Multiplier within 5 years</li>
                                <li>Post-renovation rent increases</li>
                                <li>Solid Sponsor Team with a Combined 5000+ Units and 35+ Years of Multifamily Experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Invest;