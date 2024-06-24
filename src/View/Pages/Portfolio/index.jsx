import React from "react";
import './style.scss';
import Banner from "../../../Utils/Banner/Banner";
import { image } from "../../../Assets";
import axios from "axios";

class Portfolio extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            posts:[],
            error:''
        }
    }

    componentDidMount() {
        const wordPressSiteUrl = "https://dashboard.mailboxmoneyre.com";
        
        this.setState({ loading:true},()=>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/portfolio_page/?_embed&per_page=100`)
            .then(res=>{
               this.setState( {loading: false, posts : res.data})
            })
            .catch(
                error => this.setState({loading:false, error : error.response.data})
            )
        })
    }

    render(){
        const { posts }  =  this.state;    
        return(
            <>
                <Banner title="Portfolio" bg={image.portfoliobg} />
                {/* <section className="current-project-section pad100">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <h2 className="project_title">
                                    Current <span>Project</span> (Overlook on Broadwalk Wealth)
                                </h2>
                                <p className="project_description">
                                Aspen Ridge Reserve Phase 1 is our latest multifamily real estate investment opportunity created to generate growth, income and tax efficiency for accredited investors.
                                </p>
                                <p>
                                Located in Brandon (Sioux Falls MSA), South Dakota, this 70-unit development phase with a 44 month hold period will capitalize on the region’s stellar economy: higher-than-average personal incomes, low unemployment and rapid growth. Combined with Boardwalk’s quick-lease construction model, unique risk management framework, and discounted finance terms, early investor demand is high.
                                </p>
                                <p>Phase 1 investors benefit from better splits than future phases. Act now and reserve your spot today.</p>
                                <h2 style={{color:'#81C01C'}}>75% - 90%</h2>
                                <h4>Profit Sharing</h4>
                                <p>Phase 1 investors benefit from better profit splits than investors in future phases to reward those who commit early and ensure investor-sponsor interests are aligned.</p>
                                
                            </div>
                            <div className="col-lg-6 col-12 d-flex align-items-center">
                                <video id="portfolio_video" poster={image.videoCover2} controls>
                                    <source src={require('../../../Assets/newproject.mp4')} alt="" type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>  
                </section>

                <section className="current-project-section images-slate">
                    <div className="container-fluid" style={{padding:"30px 0"}}>
                        <div className="row">
                            <div className="col-lg-4 col-12 " style={{background:`url(${image.redwood1})`}}>
                            </div>
                            <div className="col-lg-4 col-12" style={{background:`url(${image.redwood2})`}}>
                            </div>
                            <div className="col-lg-4 col-12" style={{background:`url(${image.redwood3})`}}>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="current-project-section">
                    <div className="container" style={{padding:'50px 0'}}>
                        <div className="row">
                            <div className="col-lg-5 col-12">
                                <img alt="site map" width="100%" src={image.roadmap}/>
                            </div>
            
                            <div className="col-lg-7 col-12 align-items-center d-flex">
                                <div><h3>Submarket Spotlight: Brandon, SD</h3>
                                <p className="project_description">
                                Brandon (Minnehaha County, SD) shares all the advantages of the overall Sioux Falls metro, but boasts even higher demand and lower supply of multifamily product.
                                Multiple schools have an A rating, for an overall best rated school system in the region.
                                79% of the residents own their homes, leaving very little rental opportunities. The community generally balks at new apartment development but due to our local connections we are zoned for multifamily and ready to build!
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="projects">
                    <div className="container-fluid">
                        <div className="row">
                            { posts.length ?
                                <>
                                {posts.map((obj)=>{
                                    var doc = new DOMParser().parseFromString(obj.content.rendered, "text/xml");
                                    return(
                                        <div className="col-lg-4 col-12" style={{paddingBottom:'30px'}}>
                                            <div className="overlay">
                                                {obj._embedded['wp:featuredmedia'].map((img)=>{
                                                    return(
                                                        <img src={img.source_url} alt="" width="100%" height='100%' loading="lazy"/>                                                    
                                                    )
                                                }) }
                                                <h2>{obj.title.rendered}</h2>
                                                {obj._embedded['wp:term'].map((category)=>{return(<>{category.map((obj)=>{if(obj.slug.includes("sold")){return(<><img src={image.soldstamp} className="soldstamp" alt="" /></>)}})}</>)})}
                                            </div>                                
                                            <p style={{fontSize:'16px',fontWeight:'600',padding:'0px 20px'}}>{doc.firstChild.innerHTML}</p>
                                        </div>
                                    )
                                })}
                                </>
                                :
                                <div className="col-12 d-flex justify-content-center"><h5>Loading.....</h5></div>
                                
                            }
                        </div>
                    </div>
                </section>

                {/* <section className="home_sec_new1 for_portfolio">
                    <div className="container-fluid">
                        <div className="row">                    
                            <div className="col-lg-6 col-12 content" >                            
                                <div className="title_2 pb-4 ">
                                    <h2>Our Market Focus</h2>
                                </div>
                                <div className="d-grid" style={{display:'grid',gap:'35px', gridTemplateColumns:'50% 50%'}}>
                                        <div className="orb_graphic">                                    
                                            <h2 className="wp-block-heading">3168</h2>
                                            <p>Current Unit</p>
                                        </div>
                                        <div className="orb_graphic">                                    
                                            <h2 className="wp-block-heading">26</h2>
                                            <p>Current Properties</p>
                                        </div>
                                        <div class="orb_graphic">                                    
                                            <h2 class="wp-block-heading">11</h2>
                                            <p>Current Markets</p>
                                        </div>
                                        <div class="orb_graphic">                                        
                                            <h2 class="wp-block-heading">279000000</h2>
                                            <p>Current Value</p>
                                        </div>
                                </div> 
                            </div>
                            <div className="col-lg-6 col-12 p-0">
                                <img src={image.market_focus} width="100%"/>
                            </div>
                        </div>
                    </div>
                </section> */}
            </>
        )        
    }
}

export default Portfolio;