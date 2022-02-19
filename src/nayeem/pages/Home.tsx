import React from 'react';
import Header from "../components/Header";
import '../assets/css/styles.css';
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import PreviewSection from '../components/PreviewSection';
import OurTeamSection from '../components/OurTeamSection';
import FAQSection from "../components/FAQSection";
import RoadMapSection from "../components/RoadMapSection";
import CompaniesSection from '../components/CompaniesSection';
import BottomSection from "../components/BottomSection";

const Home = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <WelcomeSection/>
            <PreviewSection/>
            <RoadMapSection/>
            <OurTeamSection/>
            <FAQSection/>
            <CompaniesSection/>
            <BottomSection/>
        </div>
    );
};

export default Home;
