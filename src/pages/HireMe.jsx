import React from 'react';
import HireMeHero from '../hireme/HireMeHero';
import Speaker from '../speaker/Speaker';
import DevelopersList from '../developers/DevelopersList';

const HireMe = () => {
    return (
        <div className="w-full">
            <HireMeHero />
            <Speaker />
            <DevelopersList />
        </div>
    );
};

export default HireMe;
