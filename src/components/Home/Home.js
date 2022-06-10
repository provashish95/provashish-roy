import React from 'react';
import Banner from '../Header/Banner';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <div className='project-img'>
                <Banner></Banner>
                <About></About>
                <Projects></Projects>
            </div>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;