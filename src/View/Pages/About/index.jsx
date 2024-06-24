import React from "react";
import './style.scss';
import Banner from "../../../Utils/Banner/Banner";
import { image } from "../../../Assets";

const About = () =>{

    const History = [
        {
            id:1,
            timelineimg:image.timeline1,
            year:'2004',
            project:'929/927 Western Ave, Brookings, SD. Duplex - 2 Units, New construction',
        },
        {
            id:2,
            timelineimg:image.timeline2,
            year:'2005-2010',
            project:'Dakota Trail Duplexes, Brookings, SD. 10 Units, New Construction',
        },
        {
            id:3,
            timelineimg:image.timeline1,
            year:'2011',
            project:'Started “Brookings Built Green” Focused on green construction and design',
        },
        {
            id:4,
            timelineimg:image.timeline2,
            year:'2012',
            project:'Invested in Value Add multifamily in Minot, ND during the Oil Boom. Properties went full cycle in 2013/2014',
        },
        {
            id:5,
            timelineimg:image.timeline1,
            year:'2013',
            project:'Watson Clinic, Brookings, SD – 20 Units Mixed use Office and Residential, Historic Remodel',
        },
        {
            id:6,
            timelineimg:image.timeline2,
            year:'2015',
            project:'Lofts at Main, Brookings, SD – 32 Units Mixed use Retail and Residential, New Construction',
        },
        {
            id:7,
            timelineimg:image.timeline1,
            year:'2017',
            project:'Flavor Spoke-n-Sport, Brookings, SD – Commercial Property, Historic Remodel',
        },
        {
            id:8,
            timelineimg:image.timeline2,
            year:'2018',
            project:'Ben Franklin Building, Brookings , SD – 22 Units Mixed use Office and Residential, Historic Remodel',
        },
        {
            id:9,
            timelineimg:image.timeline1,
            year:'2018',
            project:'Volga Townhomes, Volga, SD – 10 Units Residential, New construction',
        },
        {
            id:10,
            timelineimg:image.timeline2,
            year:'2018',
            project:'Lakewood Oaks, Jacksonville, FL – 132 Units, Value Add Project',
        },
        {
            id:11,
            timelineimg:image.timeline1,
            year:'2019',
            project:'300 unit ALT - Invest-GP / Raise money/ Design & construction consult- legacy/Rainer',
        },
        {
            id:12,
            timelineimg:image.timeline2,
            year:'2019',
            project:'Pheonix,AZ-130 Unit,Invest-LP',
        },
        {
            id:13,
            timelineimg:image.timeline1,
            year:'2019',
            project:'Lapaka Flats-130 Unit, San Antanio(Eleminated SA from my markets) Invest LP',
        },
        {
            id:14,
            timelineimg:image.timeline2,
            year:'2020',
            project:'Weatherly walk- 192 Unit- Atlanta GARaise money/Design & construction consultant, Rebrand, videography,social',
        },
        {
            id:15,
            timelineimg:image.timeline1,
            year:'2020',
            project:'Park Ave Capital- 76 Unit (maples) Sioux Falls, Invest LP/GP/ design & rebrand - unit/flips construction consult',
        },
        {
            id:16,
            timelineimg:image.timeline2,
            year:'2020',
            project:'Tomar Park- 72 Unit-Sionux Falls, Invest LP/GP/ design & rebrand - unit/flips construction consult',
        }
    ]
    return(
        <>
            <Banner title="Meet Mailbox Money" bg={image.aboutbanner}/>
            <section className="mission">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title" data-aos="fade-left">
                                <h2>Our Mission</h2>                                
                            </div>
                            <p data-aos="fade-right">Our mission is to make great returns for ourselves, our clients, and our investors by purchasing and improving assets that people want to live in. We add value through low-cost, high-impact design improvements based on the asset at hand.</p>
                        </div>
                        <div className="col-12">
                            <br />
                            <br /> 
                            <div className="title"data-aos="fade-left">
                                <h2>How We Execute</h2>                                
                            </div>
                            <p data-aos="fade-right">Not only do we know how to make spaces people want to live in, we are passionate about investing in them.</p>
                            <p data-aos="fade-right">As a firm that vertically integrates development, construction, property management, and asset management we are able to add value efficiently and effectively. Acutely aware of the monetary impact each decision makes, we unlock potential with simple and surprising solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title" data-aos="fade-down">
                                <hr />
                                <h2>Our Team</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 team-img">
                            <img src={image.team1} alt=""  data-aos="fade-up"/>
                        </div>
                        <div className="col-lg-7 col-12 team-info">
                            <div className="team-info-wrapper">
                                
                                <h3 data-aos="fade-down">Dusten Hendrickson</h3>
                                <h6 data-aos="fade-up">Founder, Real Estate Syndicator</h6>
                                <p data-aos="fade-left">Whether you’re new to real estate or a seasoned investor, I’ll be your primary guide to earning passive income.</p>
                                <p data-aos="fade-left">My entire career is grounded in real estate. From owning a roofing crew to building homes, duplexes, and apartments, I amassed the experience it requires to successfully integrate development, construction, property management, and asset management into each project.</p>
                        
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-7 col-12 order-last-mobile team-info align-items-center">
                                <div className="team-info-wrapper text-end">                                    
                                    <h3 data-aos="fade-down">Daniel Matajira</h3>
                                    <h6 data-aos="fade-up">Director of Investor Relations</h6>
                                    <p data-aos="fade-right">Daniel has an extensive track record working with a good number of clients in the construction, residential and commercial real estate industries.</p>
                                    <p data-aos="fade-right">From doing door-to-door sales to brokering multimillion apartment buildings, Daniel has achieved outstanding results by always putting his clients’ interests first.</p>
                                    <p data-aos="fade-right">Daniel graduated as an Engineer from Universidad Industrial de Santander, a top 5 University on his native country, Colombia.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-12  team-img">
                                <img src={image.team3} alt="" data-aos="fade-up"/>
                            </div>

                        </div> */}
                        <div className="col-lg-5 col-12 team-img">
                            <img src={image.team2} alt="" data-aos="fade-up"/>
                        </div>
                        <div className="col-lg-7 col-12 team-info">
                            <div className="team-info-wrapper">                                
                                <h3 data-aos="fade-up">Anna Rempe</h3>
                                <h6 data-aos="fade-down">Administrator</h6>
                                <p data-aos="fade-left">Anna is a highly skilled and experienced executive assistant with a passion for the real estate industry. Known for her exceptional organizational abilities and attention to detail, Anna is a master at managing complex schedules, coordinating meetings, and handling confidential information with the utmost professionalism. She understands the fast-paced nature of the real estate industry and thrives in a dynamic and demanding environment.    </p>
                                <p data-aos="fade-left">Beyond her administrative prowess, Anna possesses strong problem-solving abilities and is adept at multitasking. She anticipates potential challenges, proactively seeks solutions, and efficiently manages competing priorities, ensuring that operations run seamlessly. Her friendly and approachable demeanor puts clients at ease and contributes to exceptional customer service experiences.</p>
                                <p data-aos="fade-left">She holds a Bachelor's degree in Accounting from the University of South Dakota. When she is not in the office, she is busy with her husband, Gregg raising their four children.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <div className="col-12">                        
                        <div className="title" data-aos="fade-down">
                            <hr />
                            <h2>Our Partners</h2>
                        </div>
                        <div className="partners-img">
                            <a href="https://www.boardwalkwealth.com/" target="_blank"><img src={image.partnet1} alt="" data-aos="fade-right" data-aos-delay="200"/></a>
                            {/* <img src={image.partnet2} alt="" data-aos="fade-up" data-aos-delay="200"/> */}
                            <a href="https://www.veldco.com/" target="_blank"><img src={image.partnet3} alt="" data-aos="fade-left" data-aos-delay="200"/></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline ps-timeline-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">                        
                            <div className="title t1" data-aos="fade-down">
                                <hr />
                                <h2>How We Started</h2>
                            </div>
                            <div className="mousedrag"></div>
                        </div>
                        <div className="col-12">
                            <div className="timeline-wrapper">
                                <div className="timeline_h overflow-auto">                        
                                    <ol className="ps-timeline ui-draggable ui-draggable-handle" style={{position:"relative"}}>
                                    {History.map((obj)=>{
                                        return(  
                                            <li key={obj.id}>
                                                <div className={obj.id%2 ? "img-handler-top" : "img-handler-bot"}>
                                                    <img src={obj.timelineimg} 
                                                    className="img-fluid lazyload"/>
                                                    <h4>{obj.year}</h4>
                                                </div>

                                                <div className={obj.id%2 ? "ps-bot" : "ps-top"}>                                            
                                                    <p>{obj.project}</p>                        
                                                </div>
                                                <span className="ps-sp-top"></span>
                                            </li> 
                                        )                                            
                                    })}                                                                  
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
