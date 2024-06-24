import React,{useRef} from "react";
import './style.scss';
import { image } from "../../../Assets";
import Banner from "../../../Utils/Banner/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay,Navigation,Pagination } from 'swiper/modules';


const CurrentProject = () =>{

    const swiperRef = useRef(); 

    const clientsTestimony =[
        {
            id:1,
            name: 'Farzana P.',
            investor: 'Boardwalk Wealth Investor',
            testimony:'Thanks for your continued vigilance and prudent management of our investments. You underwrite conservatively and are selective on the deals you choose to go in on.',
        },
        {
            id:2,
            name: 'Bimal S.',
            investor: 'Boardwalk Wealth Investor',
            testimony:'Strong work, Omar. You are one of the most transparent GPs I’ve had the pleasure of investing with!',
        },
        {
            id:3,
            name: 'Brian M.',
            investor: 'Boardwalk Wealth Investor',
            testimony:'The reason I would consider this investment is because you are involved and you have a great track record on deals I have been involved in.',
        },
    ]    

    return(
        <>
            <Banner title="Current Project" bg={image.currentimgbg}/>
            <section className="projectIntro">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="title">
                                <h2>Aspen Ridge <br/> Reserve <span>Phase 1</span></h2>
                            </div>
                            <h3>A private investment opportunity for accredited investors seeking passive income, tax efficiency, and proven risk management.</h3>
                            <button className="btn4">
                                Soft Commit now
                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_967_32)">
                                <path d="M1 5H11H1Z" fill="white"/>
                                <path d="M1 5H11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 1L12 5L8 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </svg>
                            </button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <p>Aspen Ridge Reserve Phase 1 is our latest multifamily real estate investment opportunity created to generate growth, income and tax efficiency for accredited investors.<br/>
                            Located in Brandon (Sioux Falls MSA), South Dakota, this 70-unit development phase with a 44 month hold period will capitalize on the region’s stellar economy: higher-than-average personal incomes, low unemployment and rapid growth. Combined with Boardwalk’s quick-lease construction model, unique risk management framework, and discounted finance terms, early investor demand is high.<br/>
                            Phase 1 investors benefit from better splits than future phases. Act now and reserve your spot today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projectslider">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={'2'}
                                centeredSlides={true}
                                spaceBetween={10}
                                
                                autoplay={{delay:80000,disableOnInteraction:false,pauseOnMouseEnter: false,}}     
                                modules={[Navigation,Autoplay,Pagination]}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                  }}
                                  breakpoints={{
                                    768: {
                                      slidesPerView: 1,
                                      spaceBetween: 0,
                                    },
                                    1080:{
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    1440:{
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    }
                                }}
                                className="mySwiper"
                                
                                >
                                
                                    <SwiperSlide>
                                        <img src={require('../../../Assets/currentproject/videocover1.png')} alt="" width="100%" height="100%" />
                                        <img src={image.playbutton} alt="" id="playbtn"/>
                                        <div className="slidertext">                                                
                                            <h5>Aspen Ridge Reserve</h5>
                                            <h2>Opportunity Details</h2>
                                        </div>                                        
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={require('../../../Assets/currentproject/videocover1.png')} alt="" width="100%" height="100%" />
                                        <img src={image.playbutton} alt="" id="playbtn"/>
                                        <div className="slidertext">                                                
                                            <h5>Aspen Ridge Reserve</h5>
                                            <h2>Opportunity Details</h2>
                                        </div>                                       
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={require('../../../Assets/currentproject/videocover1.png')} alt="" width="100%" height="100%" />
                                        <img src={image.playbutton} alt="" id="playbtn"/>
                                        <div className="slidertext">                                                
                                            <h5>Aspen Ridge Reserve</h5>
                                            <h2>Opportunity Details</h2>
                                        </div>                                        
                                    </SwiperSlide>                                    
                                    <div className="custom-nav">
                                        <button className="Prevbtn" onClick={() => swiperRef.current?.slidePrev()}>
                                            <svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM35 4.5L1 4.5V3.5L35 3.5V4.5Z" fill="white"/>
                                            </svg>
                                        </button>
                                        <button className="Nextbtn" onClick={() => swiperRef.current?.slideNext()}>

                                            <svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M34.3536 3.64644C34.5488 3.84171 34.5488 4.15829 34.3536 4.35355L31.1716 7.53553C30.9763 7.73079 30.6597 7.73079 30.4645 7.53553C30.2692 7.34027 30.2692 7.02369 30.4645 6.82842L33.2929 4L30.4645 1.17157C30.2692 0.976308 30.2692 0.659726 30.4645 0.464463C30.6597 0.269201 30.9763 0.269201 31.1716 0.464463L34.3536 3.64644ZM-4.37114e-08 3.5L34 3.5L34 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="white"/>
                                            </svg>

                                        </button>
                                    </div>
                                                                           
                            </Swiper>   
                        </div>
                    </div>
                </div>
            </section>

            <section className="project-return-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">                            
                            <div className="title">
                                <h2>Project <span>Returns</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="returnbx">
                                <h5>Platinum</h5>
                                <ul>
                                    <li>Investment - $1m+</li>
                                    <li>Preferred return - 8%</li>
                                    <li>LP/GP Profit Sharing - 90/10</li>
                                    <li>IRR - 19.6</li>
                                    <li>Equity Multiple - 1.78X</li>
                                    <li>AAR - 21.2%</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="returnbx">
                                <h5>Gold</h5>
                                <ul>
                                    <li>Investment - $150k-$995k</li>
                                    <li>Preferred return - 7%</li>
                                    <li>LP/GP Profit Sharing - 85/15</li>
                                    <li>IRR - 18.8%</li>
                                    <li>Equity Multiple - 1.75X</li>
                                    <li>AAR - 20.3 %</li>
                                </ul>
                            </div></div>
                        <div className="col-lg-3 col-12">
                            <div className="returnbx">
                                <h5>Silver</h5>
                                <ul>
                                    <li>Investment - $80k-$145k</li>
                                    <li>Preferred return - 6%</li>
                                    <li>LP/GP Profit Sharing - 80/20</li>
                                    <li>IRR - 17.8%</li>
                                    <li>Equity Multiple - 1.71X</li>
                                    <li>AAR - 19.3%</li>
                                </ul>
                            </div></div>
                        <div className="col-lg-3 col-12">
                            <div className="returnbx">
                                <h5>Bronze</h5>
                                <ul>
                                    <li>Investment - $50K-$75k</li>
                                    <li>Preferred return - 5%</li>
                                    <li>LP/GP Profit Sharing - 75/25</li>
                                    <li>IRR - 16.8%</li>
                                    <li>Equity Multiple - 1.67X</li>
                                    <li>AAR - 18.3%</li>
                                </ul>
                            </div></div>
                    </div>
                </div>
            </section>

            <section className="padh100">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8 text-center">
                            <h3>75-90%</h3>
                            <h5>Profit Sharing</h5>
                            <p>Phase 1 investors benefit from better profit splits than investors in future phases to reward those who commit early and ensure investor-sponsor interests are aligned.  </p>
                            <center><button className="btn4">
                                Soft Commit now
                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_967_32)">
                                <path d="M1 5H11H1Z" fill="white"/>
                                <path d="M1 5H11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 1L12 5L8 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </svg>
                            </button>
                            </center>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padh100 blackbg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-12 d-flex align-items-center">
                            <div>
                                <h2>VIEW THE DETAILED INVESTMENT SUMMARY</h2>
                                <button className="btn4">
                                    Download deck
                                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_967_32)">
                                    <path d="M1 5H11H1Z" fill="white"/>
                                    <path d="M1 5H11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 1L12 5L8 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-12">
                            <img src={image.aspencover} alt="" width="100%"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="projectsinfo padh100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <h4>FULL ENTITLED, SHOVEL-READY, IN HIGHEST RATED SCHOOL SYSTEM ZIP CODE</h4>
                                <p>This is zoned and “ready to build” land in a Class A location in Brandon (57005 — #1 ranked public school system in South Dakota) with extremely restricted multifamily competition.</p>
                                <ul>
                                    <li>$98,902 median income</li>
                                    <li>upscale suburb of the booming and rapidly growing Sioux Falls metro</li>
                                    <li>#1 zip code to buy a house in South Dakota (niche.com)</li>
                                    <li>very limited rental stock with ample demand in an area with higher education levels than the national average</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={image.currentprojectimg1} alt="" width="100%"/>
                        </div>
                    </div>
                    <div className="row">                        
                        <div className="col-lg-6 col-12">
                            <img src={image.currentprojectimg2} alt="" width="100%"/>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <h4>DEVELOPMENT MODEL REDUCES RISK & INCREASES FAVORABLE FINANCING</h4>
                                <p>This “No Frills” project phase is a set of five 14-plex buildings (with the option to deliver additional units). By excluding traditional amenities like a gym and underground parking, we build faster, and then lease up as each building is completed.</p>
                                <ul>
                                    <li>Quicker lease-up means faster cash flows</li>
                                    <li>Faster cash flows mean better finance and refinance options</li>
                                    <li>“No Frills” approach nets rents slightly under market premiums but with greatly reduced construction time and cost (due to area demand and careful submarket selection)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 d-flex align-items-center">
                            <div>
                                <h4>TRUE KHANSERVATIVE UNDERWRITING TO BOLSTER YOUR UPSIDE</h4>
                                <p>The projected returns deliberately exclude certain expected results (we have seen from multiple past projects in the metro), to further reduce your risk and boost the upside on your investment.</p>
                                <ul>
                                    <li>Earlier refinance opportunities (due to faster cash flow) are NOT included in the underwriting</li>
                                    <li>Rents are underwritten LOWER than what we expect</li>
                                    <li>Financing interest rate is underwritten HIGHER than what we expect</li>
                                </ul>
                                <p>These are only a few examples, continuing the Boardwalk Wealth track record of under-promising and over-delivering.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={image.currentprojectimg3} alt="" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>

            <section className="spotlight">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="greenoverlaybox">
                            <h4>Submarket Spotlight: Brandon, SD</h4>
                            <p>Brandon (Minnehaha County, SD) shares all the advantages of the overall Sioux Falls metro, but boasts even higher demand and lower supply of multifamily product.<br/>
                            Multiple schools have an A rating, for an overall best rated school system in the region.<br/>
                            79% of the residents own their homes, leaving very little rental opportunities. The community generally balks at new apartment development but due to our local connections we are zoned for multifamily and ready to build!</p>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="members padh100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">                            
                            <div className="title">
                                <h2>Project <span>Returns</span></h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="members-item-wrapper"  style={{background:`url(${image.broadwalkteam1})`}}>
                                <div className="members-items">
                                    <h5>Dusten Hendrickson  </h5>
                                    <h6>Developer, Mailbox Money</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="members-item-wrapper" style={{background:`url(${image.broadwalkteam2})`}}>
                            <div className="members-items">
                                <h5>Omar Khan</h5>
                                <h6>Principal, Boardwalk Wealth</h6>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="members-item-wrapper" style={{background:`url(${image.broadwalkteam3})`}}>
                            <div className="members-items">
                                <h5>CALEB VELDHOUSE</h5>
                                <h6>Construction, Veldhouse Companies</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="greenbglight padh100">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-12">
                            <center>
                            <div className="title">
                                <h2>The land is already under <span>contract and shovel ready!</span></h2>
                            </div>
                            <h4>Like all our developments, this project is Ready To Go once funding comes in. No waiting, no guessing; just an efficient and pre-prepared 
                                build process that gets to cash flow as soon as possible.</h4>
                                </center>
                        </div>
                    </div>
                </div>
            </section>

            <section className="milestones padh100">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-12">
                            <center>
                            <div className="title">
                                <h2>Deal Milestones</h2>
                            </div>
                            </center>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <div className="greenbx">
                                <div>
                                    <h5>
                                    PPM Ready 
                                    </h5>
                                    <span>Mid january, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="greenbx">
                                <div>
                                    <h5>
                                    Targeted funding deadline
                                    </h5>
                                    <span>Late Feburary, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="greenbx">
                                <div>
                                    <h5>
                                    Land close 
                                    </h5>
                                    <span>March, 2024</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="greenbx">
                                <div>
                                    <h5>
                                    Loan close  
                                    </h5>
                                    <span>April, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-current-project">
                <div className="container">
                    <div className="row">
                        {clientsTestimony.map((testimony)=>{
                            return(
                                <div className="col-lg-4 col-12" key={testimony.id}>
                                    <div className="testimonybx">
                                        <h5>{testimony.name}</h5>
                                        <span>{testimony.investor}</span>
                                        <p>{testimony.testimony}</p>
                                        <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1H8C4 1.8 1.66667 8.33333 1 11.5V27H16V11.5H7C7 6.7 11 2.5 13 1Z" fill="#81C01C" stroke="#81C01C"/>
                                        <path d="M34 1H29C25 1.8 22.6667 8.33333 22 11.5V27H37V11.5H28C28 6.7 32 2.5 34 1Z" fill="#81C01C" stroke="#81C01C"/>
                                        </svg>


                                    </div>
                                </div>
                            )
                        })}                        
                    </div>
                </div>
            </section>

            <section className="inv-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8" style={{textAlign:'center'}}>
                            <div className="title">
                                <h2>Soft commit to secure an <span>investment opportunity</span></h2>
                            </div>
                            <p>Register your interest now to increase your chance of being able to participate! Last-minute registrations may go on our backup list and be ineligible to participate in this (highest return) phase of the project.</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <label>
                                            <input type="text" placeholder="Full Name"/>
                                        </label>
                                        <label>
                                            <input type="email" placeholder="Email Address"/>
                                        </label>
                                        <label>
                                            <h5>Investment Amout <span>*</span></h5>                                        
                                            <input type="number" placeholder="Minimum $50k"/>
                                        </label>
                                        <label>
                                            <h5>Investing As An <span>*</span></h5>                                        
                                            <select name="">
                                                <option value="">Individual</option>
                                                <option value="">Couple</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <label>
                                            <input type="telephone" placeholder="Phone Number"/>
                                        </label>                                    
                                        <label>
                                            <h5>Are you an accredited investor?</h5>                                        
                                            <label><input type="checkbox" value="Yes"/>Yes</label>
                                        </label>                                 
                                        <label>
                                            <h5>Select Your Share Class(es)<span>*</span></h5>                                        
                                            <label className="sq-radio"><input type="Radio" name="classes" value="Silver"/> Silver (min $80K, 6% pref, 80/20 profit sharing)<span class="checkmark"></span></label>
                                            <label className="sq-radio"><input type="radio" name="classes" value="Bronze"/> Bronze (min $50K, 5% pref, 75/25 profit sharing)<span class="checkmark"></span></label>                                    
                                            <label className="sq-radio"><input type="Radio" name="classes" value="gold"/> Gold (min $150K, 7% pref, 85/15 profit sharing)<span class="checkmark"></span></label>
                                            <label className="sq-radio"><input type="Radio" name="classes" value="platinum"/> Platinum (min $1M, 8% pref, 90/10 profit sharing)<span class="checkmark"></span></label>
                                        </label>
                                        <input type="submit" value="send over"/>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurrentProject;