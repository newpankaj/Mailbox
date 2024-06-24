import React from "react";
import './style.scss';
import Banner from "../../../Utils/Banner/Banner";
import { image } from "../../../Assets";
import axios from "axios";
import ReactPaginate from 'react-paginate';


class Media extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loading:false,
            posts:[],
            erros:'',
            currentPage:0,
            itemsPerPage:9,
        }
    }

    componentDidMount() {
        const wordPressSiteUrl = "https://dashboard.mailboxmoneyre.com";
        this.setState({ loading:true},()=>{
            axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/videos_page/?_embed&per_page=100&acf_format=standard`)
            .then(res=>{
               this.setState( {loading: false, posts : res.data})
            })
            .catch(
                error => this.setState({loading:false, error : error.response.data})
            )
        })
    }
    
     handlePageClick = selectedPage => {
        this.setState({ currentPage: selectedPage.selected });
    };

    render(){
        const { posts, currentPage, itemsPerPage }  =  this.state;        
        const indexOfLastItem = (currentPage + 1) * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems =posts.slice(indexOfFirstItem, indexOfLastItem);

        return(
         <>            
            <Banner title="See what we're up to" bg={image.mediabg}/>
            <section className="mission" style={{background:'#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title" data-aos="fade-left">
                                <h2>Walk and Talk Series</h2>                                
                            </div>
                            <p data-aos="fade-right">Our founder, Dusten Hendrickson, and the Mailbox team are always on the move. Dusten loves to bring you behind the scenes and provide value about what investing in multifamily real estate is really like. Watch any of our media and Walk and Talk videos to see us visiting properties, people, and deals we’re working with.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section classsName="videos-section" style={{padding:'0px 0 50px',background:'#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-end">
                        <ReactPaginate
                                pageCount={Math.ceil(posts.length / itemsPerPage)}
                                pageRangeDisplayed={5} // Adjust as needed
                                marginPagesDisplayed={2} // Adjust as needed
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                        />
                        </div>
                        
                        {
                        currentItems.length ?
                        
                        currentItems.map((videos,index)=>{                            
                            return(                                
                                <div className="col-lg-4 col-12 video-wrapper" key={index}>
                                    <div style={{height:"380px", boxShadow:'0 0 15px #00000025', marginBottom:"30px"}}>
                                    <video src={videos.acf.video_link.url} poster={videos.acf.video_poster.url} width="100%" height="325px" style={{objectFit:"cover"}} controls></video>
                                    <span style={{fontSize:'20px',padding:'15px'}}>{videos.title.rendered}</span>
                                    </div>
                                </div>                                
                            )
                        })
                        :
                        <div className="col-12 d-flex justify-content-center"><h5>Loading.....</h5></div>
                        }
                        
                    </div>
                </div>
            </section>
         </>
        )
    }
}
export default Media;