import React from 'react';
import Banner from '../Header/Banner';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;