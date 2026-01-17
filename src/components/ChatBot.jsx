import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send, Bot, Sparkles, User, Loader2 } from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'model',
            text: "Hi there! I'm Nomayen's AI assistant. Ask me anything about his skills, projects, or experience!"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error("API Key missing");
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const systemPrompt = `
                You are a helpful and friendly AI assistant for Nomayen Hossain Ohin's portfolio website.
                Your goal is to represent Nomayen and answer questions about him based on his portfolio data.
                
                Here is some context about Nomayen:
                - Name: Nomayen Hossain Ohin
                - Role: Full Stack Developer (MERN Stack, Next.js, TypeScript)
                - Location: Bangladesh
                - Contact: nomayen.ohin@gmail.com, +880 1760843880
                - Skills: React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS.
                - Experience:
                    - Softvence: Backend Developer (Nov 2025 - Jan 2026)
                    - PPC Rockers: Jr Web Developer (Apr 2025 - Nov 2025)
                - Projects: AutoBid (Car Auction), ParcelX (Delivery), FirmFusion (Job Portal), Khan IT (Agency).
                
                Keep your answers concise, professional, yet warm. 
                If you don't know something, ask the user to contact Nomayen directly via the "Contact" page or email.
                Do not make up facts.
            `;

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: systemPrompt }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am ready to answer questions about Nomayen." }],
                    },
                    ...messages.map(m => ({
                        role: m.role === 'user' ? 'user' : 'model',
                        parts: [{ text: m.text }]
                    }))
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const response = result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text: text }]);

        } catch (error) {
            console.error("Chat Error:", error);
            let errorMessage = "Sorry, I encountered an error. Please try again later.";

            if (error.message === "API Key missing") {
                errorMessage = "API Configuration Error: VITE_GEMINI_API_KEY is missing. Please add it to your .env file.";
            }

            setMessages(prev => [...prev, { role: 'model', text: errorMessage, isError: true }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-[#1a0b2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 transform origin-bottom-right">

                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Nomayen AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-gray-400 text-xs">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.role === 'model' && (
                                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center border border-indigo-500/30 mt-1">
                                        <Sparkles className="w-4 h-4 text-indigo-400" />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-sm'
                                        : msg.isError
                                            ? 'bg-red-500/10 border border-red-500/20 text-red-200 rounded-tl-sm'
                                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                {msg.role === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gray-700/50 flex-shrink-0 flex items-center justify-center border border-white/10 mt-1">
                                        <User className="w-4 h-4 text-gray-400" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex gap-3 justify-start">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center border border-indigo-500/30">
                                    <Sparkles className="w-4 h-4 text-indigo-400" />
                                </div>
                                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-[#0f071a]/50 border-t border-white/10 backdrop-blur-sm">
                        <div className="relative flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Details about my projects..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-lg"
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <span className="text-[10px] text-gray-500">Powered by Google Gemini AI</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-50"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className="relative z-10 transition-transform duration-300">
                    {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8 group-hover:rotate-12" />}
                </div>

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute right-full mr-4 px-4 py-2 bg-[#1a0b2e]/80 backdrop-blur-md border border-white/10 rounded-xl text-white text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                        Chat with AI
                    </div>
                )}

                {!isOpen && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-black rounded-full z-20"></div>
                )}
            </button>

            {/* Outer Pulse Animation */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500 rounded-full animate-ping opacity-20 -z-10 pointer-events-none"></div>
        </div>
    );
};

export default ChatBot;
