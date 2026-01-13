import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import LiveChatButton from '../components/LiveChatButton';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0f071a]">
            <Navbar />
            <main className="flex-grow pt-24">
                <Outlet />
            </main>
            <LiveChatButton />
        </div>
    );
};

export default MainLayout;
