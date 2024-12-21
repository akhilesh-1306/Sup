// import React from "react";
// import { FaRocket, FaLightbulb } from "react-icons/fa"; // Import icons
// import SearchForm from "../components/SearchForm";

// const HeroSection = async ({ searchParams }: {
//     searchParams: Promise<{ query: string }>
// }) => {
//     const query = (await searchParams).query;
//     const posts = [
//         {
//             _createdAt: "yesterday",
//             views: 60,
//             author: { _id: 1 },
//             description: "Description",
//             image: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             category: "Robots",
//             title: "We robots"
//         }
//     ]
//     return (
//         <div>
//             <section className="relative bg-black text-neon-blue h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8">
//                 {/* Hero Content */}
//                 <div className="text-center max-w-4xl px-4">
//                     <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 glow-text animate-fade-in">
//                         Empower Your Startup Ideas
//                     </h1>
//                     <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 animate-slide-up">
//                         Share your ideas, get feedback, and make your dream a reality. Engage with innovators and decision-makers in a futuristic, inspiring space.
//                     </p>
//                 </div>

//                 {/* Search Bar */}
//                 <SearchForm query={query} />

//                 {/* Animated Icons (Replaces Images) */}
//                 <div className="absolute top-1/4 left-5 hidden md:flex flex-col items-center animate-slide-in-left">
//                     <FaRocket size={120} className="text-purple-400 hover:text-neon-blue transition duration-300" />
//                     <p className="text-gray-300 text-sm mt-2">Launch Ideas</p>
//                 </div>
//                 <div className="absolute top-1/4 right-5 hidden md:flex flex-col items-center animate-slide-in-right">
//                     <FaLightbulb size={120} className="text-purple-400 hover:text-neon-blue transition duration-300" />
//                     <p className="text-gray-300 text-sm mt-2">Innovate</p>
//                 </div>

//                 {/* Scroll Animation Prompt */}
//                 <div className="absolute bottom-20 flex justify-center items-center">
//                     <div className="text-gray-400 text-xs sm:text-sm animate-bounce">
//                         <span>Scroll Down</span>
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 sm:h-6 sm:w-6 mx-auto text-neon-blue"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 9l-7 7-7-7"
//                             />
//                         </svg>
//                     </div>
//                 </div>
//             </section>


//             <section>
//                 <p className=" text-white">
//                     {query ? `Results based on search` : "All startups"}
//                 </p>

//                 <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">

//                 </ul>
//             </section>
//         </div>
//     );
// };

// export default HeroSection;

import React from "react";
import { FaRocket, FaLightbulb } from "react-icons/fa"; // Import icons
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard"; // Import StartupCard component

const HeroSection = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
    const query = (await searchParams).query;
    const posts = [
        {
            _createdAt: new Date(),
            views: 60,
            author: { _id: 1, name:"Testing" },
            _id : 1,
            description: "Description",
            image: "https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Robots",
            title: "We robots",
        },
    ];

    return (
        <div>
            {/* Hero Section */}
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
                <SearchForm query={query} />

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

            {/* Posts Section */}
            <section className="p-6">
                <p className="text-white text-lg mb-6">
                    {query ? `Results based on search : "${query}"` : "All Startups"}
                </p>

                <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                    {posts.map((post, index) => (
                        <li key={index}>
                            <StartupCard post={post} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default HeroSection;

