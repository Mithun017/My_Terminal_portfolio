'use client';

import React from 'react';
import { useStore } from '@/hooks/useStore';
import { motion } from 'framer-motion';

export const LandingPage = () => {
    const { setShowLandingPage } = useStore();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleEnter = () => {
        setIsLoading(true);
        setTimeout(() => {
            setShowLandingPage(false);
        }, 1500);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen w-full bg-[#300a24] flex flex-col items-center justify-center font-mono text-[#8ae234]">
                <div className="text-2xl md:text-4xl mb-8 animate-pulse">
                    &gt; INITIALIZING SYSTEM...
                </div>
                <div className="w-64 h-2 bg-[#3e3e3e] rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-[#8ae234]"
                    />
                </div>
                <div className="mt-4 text-sm text-gray-400">
                    Loading modules...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-[#300a24] flex items-center justify-center p-8 md:p-16 overflow-hidden relative">
            {/* Background Dotted Pattern (Optional/Simulated) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            <div className="max-w-6xl w-full flex flex-col items-center justify-center relative z-10">

                {/* Content - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center space-y-4"
                >
                    {/* Welcome Text */}
                    <div className="text-[#8ae234] font-mono text-5xl md:text-7xl font-bold tracking-wide animate-pulse mb-8">
                        &gt; Welcome to My Portfolio_
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none">
                        M MITHUN
                    </h1>

                    <h2 className="text-3xl md:text-5xl font-bold text-[#8ae234] tracking-wide">
                        AI & DATA SCIENTIST
                    </h2>

                    <div className="w-2 h-2 rounded-full bg-white/50 my-4" />

                    <p className="text-gray-300 text-xl md:text-2xl max-w-2xl leading-relaxed">
                        I am Mithun, and I'm passionate about developing intelligent systems that solve real-world problems.
                        I love working to create meaningful impact.
                    </p>

                    <div className="pt-10 w-full flex justify-center">
                        <button
                            onClick={handleEnter}
                            className="group relative px-16 py-6 bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] rounded-full text-black font-bold text-3xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,95,109,0.8)] transform hover:scale-105 transition-all duration-300 outline-none focus:ring-4 focus:ring-offset-4 focus:ring-[#ff5f6d]"
                        >
                            <span className="relative z-10">Enter System_</span>
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
