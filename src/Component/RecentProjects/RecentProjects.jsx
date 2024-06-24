import React from "react";
import './style.scss';
import { image } from "../../Assets";

const RecentProject = () =>{
    return(
        <>
        <section className="Recent-projects-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="title">
                            <h2 data-aos="fade-right" >Latest Project</h2>
                            <hr data-aos="fade-left" />
                            <h5 data-aos="fade-left" >Aspen Ridge Reserve Phase 1</h5>
                            <p data-aos="fade-up" ><b>A private investment opportunity for accredited investors seeking passive income, tax efficiency, and proven risk management.</b></p>
                            <p data-aos="fade-up" >Aspen Ridge Reserve Phase 1 is our latest multifamily real estate investment opportunity created to generate growth, income and tax efficiency for accredited investors.<br/>
                            Located in Brandon (Sioux Falls MSA), South Dakota, this 70-unit development phase with a 44 month hold period will capitalize on the region’s stellar economy: higher-than-average personal incomes, low unemployment and rapid growth. Combined with Boardwalk’s quick-lease construction model, unique risk management framework, and discounted finance terms, early investor demand is high.<br/>
                            Phase 1 investors benefit from better splits than future phases. Act now and reserve your spot today.</p>
                            
                            <button className="btn3" data-aos="fade-up">
                                <a href="/portfolio">See More Projects
                                    <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9V7L1 7L1 9Z" fill="white"/>
                                    </svg>
                                </a>
                            </button>  
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 order-first order-lg-1 img-project" >
                        <img src={image.recentproject} alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RecentProject;