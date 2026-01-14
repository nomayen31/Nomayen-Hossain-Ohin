import React from 'react';
import { MessageCircle } from 'lucide-react';

const LiveChatButton = () => {
    const handleClick = () => {
        window.open('https://m.me/nomayen', '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <button
                onClick={handleClick}
                className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <MessageCircle className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform" />

                {/* Tooltip / Label */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-[#1a0b2e]/80 backdrop-blur-md border border-white/10 rounded-xl text-white text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                    Chat with me
                </div>
            </button>

            {/* Outer Pulse Animation */}
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20 -z-10"></div>
        </div>
    );
};

export default LiveChatButton;
