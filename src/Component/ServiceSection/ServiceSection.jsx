import React from "react";
import './style.scss';
import { image } from "../../Assets";

const ServiceSection = () =>{
    return(
        <>
        <section className="services-n-strategy">
            <section className="bgblack">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-12">
                            <div className="title">
                                <h3  data-aos="fade-right">Strategy and Services</h3>
                                <h2 data-aos="fade-left">We Focus on Markets that Matter</h2>
                            </div>
                            <p data-aos="fade-up" data-aos-delay="100">Whether it’s an acquisition or a new development, Mailbox Money deals are differentiated by our market-first approach. Our team focuses on assets that produce cash flow, appreciation, and tax depreciation targeting a return of 20% for ourselves and our investment partners in growth oriented secondary and tertiary markets.</p>
                            <p  data-aos="fade-up" data-aos-delay="100">By accessing the <a href="https://boardwalkwealth.investnext.com/" target="_blank">Investor Portal</a> you can view all of our working deals and opportunities for investing.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <img src={image.marketfocus} alt="" data-aos="fade-right" data-aos-delay="200" id="snsimg"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container paddingtop">
                <div className="row">
                    <div className="col-sm-8 col-12"  data-aos="fade-up" data-aos-delay="100">
                        <h2>Have a deal of your own</h2>
                        <p>We also partner with other sponsors to add value to existing and developing assets in our clients’ portfolios. By applying our design, branding, and asset management philosophy to each opportunity, we can efficiently and effectively improve your cash flow</p>
                    </div>
                </div>
            </div>            
        </section>
        
        </>
    )
}

export default ServiceSection;