import React from "react";
import { FaRocket, FaLightbulb } from "react-icons/fa"; // Import icons

const HeroSection = () => {
    return (
        <section className="relative bg-black text-neon-blue h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
            {/* Hero Content */}
            <div className="text-center max-w-4xl px-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 glow-text animate-fade-in">
                    Empower Your Startup Ideas
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 animate-slide-up">
                    Share your ideas, get feedback, and make your dream a reality. Engage with innovators and decision-makers in a futuristic, inspiring space.
                </p>
            </div>

            {/* Search Bar */}
            <div className="w-full  max-w-md sm:max-w-lg lg:max-w-xl animate-fade-in transition-all duration-500">
                <input
                    type="text"
                    placeholder="Search for ideas or startups..."
                    className="w-full bg-gray-800 text-neon-blue border border-neon-blue rounded-md py-3 px-5 placeholder-gray-500 focus:ring focus:ring-purple-400 outline-none"
                />
            </div>

            {/* Animated Icons (Replaces Images) */}
            <div className="absolute top-1/4 left-5 hidden md:flex flex-col items-center animate-slide-in-left">
                <FaRocket size={120} className="text-purple-400 hover:text-neon-blue transition duration-300" />
                <p className="text-gray-300 text-sm mt-2">Launch Ideas</p>
            </div>
            <div className="absolute top-1/4 right-5 hidden md:flex flex-col items-center animate-slide-in-right">
                <FaLightbulb size={120} className="text-purple-400 hover:text-neon-blue transition duration-300" />
                <p className="text-gray-300 text-sm mt-2">Innovate</p>
            </div>

            {/* Scroll Animation Prompt */}
            <div className="absolute bottom-20 flex justify-center items-center">
                <div className="text-gray-400 text-xs sm:text-sm animate-bounce">
                    <span>Scroll Down</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-6 sm:w-6 mx-auto text-neon-blue"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
