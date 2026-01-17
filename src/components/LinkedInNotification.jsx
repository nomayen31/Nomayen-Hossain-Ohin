
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, X, Bell } from 'lucide-react';

// Short pleasant notification pop sound (Base64)
const NOTIFICATION_SOUND = "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"; // Truncated/Simplified placeholder. Real one below.
// Actually, using a real short beep data URI to ensure it plays.
const REAL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGlzaFRYWFgAAAAQAAADbWlub3JfdmVyc2lvbgAwVFhYRAAAABIAAAWNXXXXJvbXGF0aWJsZV9icmFuZHMAaXNvNm1wNDFkb2NUVFNTRQAAABAAAAyXAAAADAAAABwAAAAA//uQZAAAAAAAABAAAAAAAAAAAAAAJaaaAAAGkAAAAAAAAAAAAA//uQZAAABAAAAAAAAAAAAAAJaaaAAAGkAAAAAAAAAAAAA//uQZAAAAAAAABAAAAAAAAAAAAAAJaaaAAAGkAAAAAAAAAAAAA";
// Note: Generating a full MP3 base64 is long. I'll use a very short, functional one or just the Audio constructor with a public URL if available, but to be safe and self-contained I will rely on a standard UI 'ping' visual first, and try to play a sound if context allows. 
// Actually, let's use a standard public sound URL or a very simple efficient beep.
const POP_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

const LinkedInNotification = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Play sound on mount
        const audio = new Audio(POP_SOUND_URL);
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play failed (user interaction needed usually):", e));

        // Auto-show logic is handled by initial state, but we could add a delay
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
            >
                <div className="relative bg-[#1a0b2e]/90 backdrop-blur-xl border border-blue-500/30 p-5 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.2)] max-w-xs group">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsVisible(false);
                        }}
                        className="absolute -top-2 -right-2 bg-white/10 hover:bg-red-500/80 text-white p-1 rounded-full backdrop-blur-md transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>

                    <a
                        href="https://www.linkedin.com/in/nomayen-hossain/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col gap-3 group-hover:scale-105 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <div className="p-3 bg-blue-600 rounded-xl">
                                    <Linkedin className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Let's Connect!</h4>
                                <p className="text-blue-300 text-xs">View my LinkedIn Profile</p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs leading-relaxed border-t border-white/10 pt-3 mt-1">
                            Check out my professional updates and network.
                        </p>
                    </a>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LinkedInNotification;
