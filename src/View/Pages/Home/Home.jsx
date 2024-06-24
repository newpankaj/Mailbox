import React from "react";
import './style.scss';
import HeroSection from "../../../Component/HeroSection/HeroSection";
import AboutSection from "../../../Component/AboutSection/AboutSection";
import ServiceSection from "../../../Component/ServiceSection/ServiceSection";
import Testimonails from "../../../Component/Testimonials/Testimonials";
import Videomessage from "../../../Component/Videomessage/Videomessage";
import RecentProject from "../../../Component/RecentProjects/RecentProjects";

const Home = () =>{
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <ServiceSection/>
        <Videomessage/>
        <RecentProject/>
        {/* <Testimonails/> */}
        <button className="currentprojectbtn">
            <a href="/portfolio"> Current Projects </a>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5376 5.81934H11.5376H1.5376Z" fill="black"></path>
                <path d="M1.5376 5.81934H11.5376" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.5376 1.81934L12.5376 5.81934L8.5376 9.81934" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
        </>
    )
}

export default Home;