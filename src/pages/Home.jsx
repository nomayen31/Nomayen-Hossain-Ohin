import React from 'react';
import Hero from '../hero/Hero';
import Projects from '../projects/Projects';
import About from '../about/About';
import Certifications from '../certifications/Certifications';
import SkillGraph from '../components/SkillGraph';
import GithubRepos from '../components/GithubRepos';

const Home = () => {
    return (
        <div className="w-full">
            <Hero />
            <About />
            <SkillGraph />
            <Projects />
            <GithubRepos />
            <Certifications />
        </div>
    );
};

export default Home;
