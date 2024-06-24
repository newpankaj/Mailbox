import React from "react";
import './style.scss';
import { image } from "../../Assets";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () =>{
    const testimonialData =[
        {
            id:1,
            name:'Zack Haptonstall',
            testimony:'We have worked with Dusten as a loan guarantor, fellow investor, and a design specialist for multiple Multifamily deals in phoenix, AZ. His combination of investing in his own deals, passively investing, and leading his construction and design company make him an excellent Multifamily operator.'
        },
        {
            id:2,
            name:'Victoria Watts',
            testimony:'Very easy to work with and provided everything we needed very quickly.'
        },
        {
            id:3,
            name:'Omar Khan',
            testimony:'Dusten is hands down the best and most creative designer I have ever worked with. Our buildings have never popped more!',
        },
    ]

    const testimonialSlider = {
        nav:true,
        items:1,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText:[
            `<svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 13.5C41.8284 13.5 42.5 12.8284 42.5 12C42.5 11.1716 41.8284 10.5 41 10.5V13.5ZM0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM41 10.5L2 10.5V13.5L41 13.5V10.5Z" fill="black"/>
            </svg>            
            `,`
            <svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807612 30.9792 0.807612 30.3934 1.3934C29.8076 1.97918 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM2 13.5L41 13.5V10.5L2 10.5L2 13.5Z" fill="black"/>
            </svg>`
        ],
    }
    return(
        <>
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="title" data-aos="fade-up" data-aos-delay="200">
                            <h2>Our Clients</h2>                                
                        </div>
                        <div className="grid-img">
                            <div data-aos="fade-right" data-aos-delay="200"><img src={image.client1} alt="" /></div>
                            <div data-aos="fade-left" data-aos-delay="200"><img src={image.client2} alt="" /></div>
                            <div data-aos="fade-right" data-aos-delay="200"><img src={image.client3} alt="" /></div>
                            <div data-aos="fade-left" data-aos-delay="200"><img src={image.client4} alt="" /></div>
                            <div data-aos="fade-right" data-aos-delay="200"><img src={image.client5} alt="" /></div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 col-12">                        
                        <div className="title">
                            <h2 data-aos="fade-up" data-aos-delay="200">What They Say</h2>
                        </div>
                        <OwlCarousel className='owl-theme' {...testimonialSlider} margin={20} loop data-aos="fade-up" data-aos-delay="600">
                            {testimonialData.map((obj)=>{
                                return(
                                    <div class='item' key={obj.id}>
                                        
                                        <p>{obj.testimony}</p>
                                        <h3>{obj.name}</h3>
                                    </div>
                                )
                            })}                                           
                        </OwlCarousel>      
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Testimonials;