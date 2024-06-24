import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home/Home";
import About from '../View/Pages/About/index';
import Media from '../View/Pages/Media/index';
import Invest from '../View/Pages/Investor/index';
import Podcast from '../View/Pages/Podcast/index';
import Portfolio from '../View/Pages/Portfolio/index';
import Contact from '../View/Pages/Contact';
import Errorpage from "../View/Pages/Errorpage";
import CurrentProject from "../View/Pages/CurrentProject";
import PrivacyPolicy from "../View/Pages/PrivacyPolicy"; 

const Routes =()=>{
    const element = useRoutes([
        {
            path:'/',
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/media',
                    element:<Media/>
                },
                {
                    path:'/investor',
                    element:<Invest/>
                },
                {
                    path:'/podcast',
                    element:<Podcast/>
                },
                {
                    path:'/portfolio',
                    element:<Portfolio/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/current-project',
                    element:<CurrentProject/>
                },
                
                {
                    path:'/privacy-policy',
                    element:<PrivacyPolicy/>
                }  
            ]
        },
        // {
        //   path:'/404',
        //   element:<Errorpage/>
        // },
        // {
        //   path: "*",
        //   element: <Navigate to="/404"/>,
        // }
    ])
    return element;
}

export default Routes;