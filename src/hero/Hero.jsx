import React from 'react'
import { ChevronDown } from 'lucide-react'
import heroImg from '../assets/profile.png'

const Hero = () => {
    return (
        <section className="relative h-screen lg:h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-[#0f071a] px-6">

            {/* Background Layered Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[16vw] md:text-[20vw] font-black text-white/5 leading-none uppercase tracking-tighter transition-all duration-700">
                    DEVELOPER
                </h1>

            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto relative z-10 flex flex-col items-center h-full justify-between py-12">

                {/* Top Text */}
                <div className="w-full flex justify-between items-center px-4 md:px-12 mt-4">

                    <div className="hidden lg:block w-1/4">
                        <div className="h-[2px] w-12 bg-blue-500 mb-4"></div>
                        <p className="text-gray-400 text-xs uppercase tracking-[0.2em] leading-relaxed">
                            Building scalable full-stack <br />
                            applications with clean, <br />
                            modern front-end experiences.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <h2 className="text-5xl md:text-[6.5rem] font-serif italic text-white mb-[-12px] md:mb-[-25px] drop-shadow-2xl">
                            I'm
                        </h2>
                        <h2 className="text-5xl md:text-[6.5rem] font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 ml-8 md:ml-32 drop-shadow-2xl">
                            full stack
                        </h2>
                    </div>


                    <div className="hidden lg:block w-1/4 text-right">
                        <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] ml-auto">
                            Build high-converting websites<br />
                            that clearly communicate your<br />
                            value to the right audience.
                        </p>


                    </div>
                </div>

                {/* Character Image - Moved Lower */}
                <div className="relative w-full max-w-5xl flex items-center justify-center mt-auto">
                    <div className="relative z-20 group translate-y-[20%] md:translate-y-[15%]">
                        <img
                            src={heroImg}
                            alt="Full Stack Developer"
                            className="w-full h-auto object-contain brightness-110 drop-shadow-[0_20px_80px_rgba(37,99,235,0.4)] transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full -z-10 animate-pulse"></div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator - Right Side Middle */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 z-40">
                    <div className="flex flex-col items-center gap-4 animate-bounce">
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-gray-500 rotate-90 origin-center translate-y-8">
                            Scroll
                        </span>
                        <div className="w-[1px] h-20 bg-gradient-to-b from-blue-500/50 to-transparent mt-12"></div>
                    </div>
                </div>
            </div>

            {/* Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.02]"></div>

        </section>
    )
}

export default Hero
