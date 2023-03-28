import React from 'react';
import Services from '../Services/Services';
import About from './About/About';
import Banner from './Banner/Banner';
import ContactSlide from './ContactSlide/ContactSlide';
import CoreFeatures from './CoreFeatures/CoreFeatures';
import Products from './Products/Products';
import TeamMember from './TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactSlide></ContactSlide>
            <Products></Products>
            <TeamMember></TeamMember>
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;