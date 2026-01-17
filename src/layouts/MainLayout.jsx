import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import ChatBot from '../components/ChatBot';
import LinkedInNotification from '../components/LinkedInNotification';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0f071a]">
            <Navbar />
            <main className="flex-grow pt-24">
                <Outlet />
            </main>
            <ChatBot />
            <LinkedInNotification />
        </div>
    );
};

export default MainLayout;
