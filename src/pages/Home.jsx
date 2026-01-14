import React from 'react';
import Hero from '../hero/Hero';
import Projects from '../projects/Projects';
import About from '../about/About';
import Certifications from '../certifications/Certifications';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Projects />
            <Certifications />
        </div>
    );
};

export default Home;
