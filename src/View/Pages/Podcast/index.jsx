import React from "react";
import './style.scss'; 
import { image } from "../../../Assets";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Podcast = () =>{
    
    const servicesSlider = {
        nav:true,            
        navText:[
            `<svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM35 4.5L1 4.5V3.5L35 3.5V4.5Z" fill="white"/>
            </svg>`
            ,
            `<svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3536 3.64644C34.5488 3.84171 34.5488 4.15829 34.3536 4.35355L31.1716 7.53553C30.9763 7.73079 30.6597 7.73079 30.4645 7.53553C30.2692 7.34027 30.2692 7.02369 30.4645 6.82842L33.2929 4L30.4645 1.17157C30.2692 0.976308 30.2692 0.659726 30.4645 0.464463C30.6597 0.269201 30.9763 0.269201 31.1716 0.464463L34.3536 3.64644ZM-4.37114e-08 3.5L34 3.5L34 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="white"/>
            </svg> `
        ],
        responsive:{
            320:{
                items:1,
            },
            768:{
                items:2,
            }
            ,
            991:{
                items:3
            },
            1440:{
                items:3
            }
        }        
    }

    const  podcastSlider = {
        nav:true,
        items:1,  
        margin:20,      
        navText:[
            `<svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM35 4.5L1 4.5V3.5L35 3.5V4.5Z" fill="white"/>
            </svg>`
            ,
            `<svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.3536 3.64644C34.5488 3.84171 34.5488 4.15829 34.3536 4.35355L31.1716 7.53553C30.9763 7.73079 30.6597 7.73079 30.4645 7.53553C30.2692 7.34027 30.2692 7.02369 30.4645 6.82842L33.2929 4L30.4645 1.17157C30.2692 0.976308 30.2692 0.659726 30.4645 0.464463C30.6597 0.269201 30.9763 0.269201 31.1716 0.464463L34.3536 3.64644ZM-4.37114e-08 3.5L34 3.5L34 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="white"/>
            </svg>`
        ],
    }

    const episodes = [
        {
            id:1,
            Hostname:'Darin Batchelde',
            title:'Meeting the Demand for Trendy Units through Design-Focused Apartments',
            link:'https://www.youtube.com/watch?v=nRROftZIihc&t=185s',
            youtubechannellink:'https://www.youtube.com/@batchelderdarin',
            embed:[<iframe width="560" height="315" src="https://www.youtube.com/embed/nRROftZIihc?si=BVed2Z0HudP454B2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>],
            about: 'In this Ep. Dusten discusses various aspects of development. Dive in to know the Importance of wellness, design, the perspective of partnerships, and understanding the sub-markets.',
            thumbnail:image.thumbnail5,
            hostimg:image.host3,      
            date:'Jul. 25. 2023'      
        },
        {
            id:2,
            Hostname:'John Casmon',
            title:'Which is More Risky? Acquisitions or Development with Dusten Hendrickson.',
            link:'https://www.youtube.com/watch?v=_jPfgdG4fGQ',
            youtubechannellink:'https://www.youtube.com/@JohnCasmonMultifamily',
            embed:[<iframe width="560" height="315" src="https://www.youtube.com/embed/_jPfgdG4fGQ?si=wY4DQdtOzacVPpCz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>],
            about: 'In this Ep. Dusten discusses various aspects of development. Dive in to know the Importance of wellness, design, the perspective of partnerships, and understanding the sub-markets.',
            thumbnail:image.thumbnail2,
            hostimg:image.host1,         
            date:''   
        },
        {
            id:3,
            Hostname:'Ava and August',
            title:'Value-Added Multifamily Investments',
            link:'https://www.youtube.com/watch?v=OiIz8OlT-Iw',
            youtubechannellink:'https://www.youtube.com/@TheRealEstateSyndicationShow',
            embed:[<iframe width="560" height="315" src="https://www.youtube.com/embed/OiIz8OlT-Iw?si=BeRjh-zc5ppIeeI6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>],
            about: 'In this Ep. Dusten discusses various aspects of development. Dive in to know the Importance of wellness, design, the perspective of partnerships, and understanding the sub-markets.',
            thumbnail:image.thumbnail3,
            hostimg:image.host2,    
            date:'Dec. 03. 2021'        
        },
        {
            id:4,
            Hostname:'Jake & Gino',
            title:'Passive vs Active Investing in Real Estate',
            link:'https://www.youtube.com/watch?v=o1q_vlhXMRo',
            youtubechannellink:'https://www.youtube.com/@JakeandGino',
            embed:[<iframe width="560" height="315" src="https://www.youtube.com/embed/o1q_vlhXMRo?si=BHSad_z9TVlNTwHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>],
            about: 'In this Ep. Dusten discusses various aspects of development. Dive in to know the Importance of wellness, design, the perspective of partnerships, and understanding the sub-markets.',
            thumbnail:image.thumbnail4,
            hostimg:image.host4,   
            date:'Aug.12. 2021'        
        },
        {
            id:4,
            Hostname:'Abel Pacheco',
            title:'Create the Ultimate Lifestyle with Real Estate',
            link:'https://www.youtube.com/watch?v=eLCrMbuibms',
            youtubechannellink:'https://www.youtube.com/@abelpacheco5TC',
            embed:[<iframe width="560" height="315" src="https://www.youtube.com/embed/eLCrMbuibms?si=C0hIQgjpGmXireXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>],
            about: 'In this Ep. Dusten discusses various aspects of development. Dive in to know the Importance of wellness, design, the perspective of partnerships, and understanding the sub-markets.',
            thumbnail:image.thumbnail1,
            hostimg:image.host5,     
            date:'Jul. 13. 2022'      
        }
    ]
    return(
        <> 
        
            <section className="podcast-main">        
                <div className="container">
                    <div className="row align-items-center" >                    
                        <div className="col-lg-7 col-12">
                            <div className="content">
                                <h2>Unlock a steady stream of passive income.</h2>
                                {/* <p>Join Dusten on his podcast as he shares his expertise and experiences in real estate syndication. Learn how he creates high returns for investors and explore exciting investment opportunities that can help you earn passive income. Don't miss out on this valuable resource for financial success in real estate.</p>                            */}
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={image.podcastbannerimg} alt="" id="banner"/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container hosts">                
                <div className="row justify-content-end">
                    <div className="col-12">
                        <h3 >Meet the hosts</h3>
                        <div className="d-flex">
                            <div>
                                <a href="https://www.youtube.com/watch?v=_jPfgdG4fGQ" target="_blank" style={{textDecoration:'none',color:'#000'}}>
                                    <img src={image.host1} alt="" />
                                    <h4>John Casmon</h4>
                                    <p></p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/watch?v=OiIz8OlT-Iw" target="_blank" style={{textDecoration:'none',color:'#000'}}>
                                    <img src={image.host2} alt="" />
                                    <h4>Ava Benesocky and August Binaiz</h4>
                                    <p>Dec. 03. 2021</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/watch?v=nRROftZIihc&t=185s" target="_blank" style={{textDecoration:'none',color:'#000'}}>
                                    <img src={image.host3} alt="" />
                                    <h4>Darin Batchelde</h4>
                                    <p>Jul. 25. 2023</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/watch?v=o1q_vlhXMRo" target="_blank" style={{textDecoration:'none',color:'#000'}}>
                                    <img src={image.host4} alt="" />
                                    <h4>Jake and Gino</h4>
                                    <p>Aug.12. 2021</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/watch?v=eLCrMbuibms" target="_blank" style={{textDecoration:'none',color:'#000'}}>
                                    <img src={image.host5} alt="" />
                                    <h4>Abel Pacheco</h4>
                                    <p>Jul. 13. 2022</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="latest-episodes">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="title">Latest Episodes</h3>
                            <OwlCarousel className='owl-theme' {...servicesSlider} margin={30} nav={true} loop data-aos="fade-up" >
                                {
                                    episodes.map((data)=>{
                                        return(
                                            <div className="episodes-wrapper" key={data.id}>
                                                <div className="thumbnail">
                                                    <img src={data.thumbnail} alt="" />
                                                    <a href={data.link} target="_blank">
                                                        <img src={image.playbutton} alt="" id="playbtn"/>
                                                    </a>
                                                </div>
                                                <h4><a href={data.link} target="_blank">{data.title}</a></h4>
                                                <p>{data.about}</p>
                                                <div className="author">
                                                    <div>
                                                        <a href={data.youtubechannellink}  target="_blank" className="d-flex">
                                                            <img src={data.hostimg} alt="" width="100%" />
                                                            <span>{data.Hostname}</span>
                                                        </a>
                                                    </div>
                                                    <span>{data.date}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }                                

                            </OwlCarousel>      
                        </div>
                    </div>
                </div>
            </section>

            <section className="podcast-slide-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="podcasthead">
                                <div className="container text-center">
                                    <h3>Discover the path to high returns with Mailbox Money</h3>
                                    <p>Discover how Dusten Hendrickson and his team have built a successful portfolio of multifamily properties and passive real estate investments. Gain access to invaluable knowledge, experiences, and investment opportunities through these exclusive podcasts.</p>
                                </div>
                            </div>
                            <div className="podcast-slider-wrapper">
                                <div className="podcast-slider-inner">
                                    <OwlCarousel className='owl-theme' {...podcastSlider} loop data-aos="fade-up" >
                                        {episodes.map((slides)=>{
                                            return(
                                                <div className="row" key={slides.id}>
                                                    <div className="col-lg-7 col-12">
                                                        <div style={{borderRadius:'8px'}}>
                                                            {slides.embed}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5 col-12 podcast-slider-content d-flex align-items-center">
                                                        <div>
                                                            <h5>Podcast with {slides.Hostname}</h5>
                                                            <h3>{slides.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Podcast;