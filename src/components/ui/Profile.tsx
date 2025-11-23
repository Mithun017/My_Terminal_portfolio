'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const Profile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-10 left-10 md:top-20 md:left-20 z-10 w-[450px] max-w-full pointer-events-auto"
        >
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl text-white">
                <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/20">
                        <Image
                            src="/profile.jpg"
                            alt="M Mithun"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            M Mithun
                        </h1>
                        <p className="text-gray-300 font-mono text-sm mt-1">
                            AI & Data Science Undergraduate
                        </p>
                        <div className="flex gap-2 mt-3">
                            <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300">
                                AI Agent Dev
                            </span>
                            <span className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                                Full Stack
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                    <p>
                        Driven by data, powered by AI. I bridge the gap between theoretical innovation
                        and practical application. With 30+ certifications and 35+ projects, I engineer
                        systems that solve real-world problems.
                    </p>

                    <div className="pt-4 border-t border-white/10">
                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Current Mission
                        </h3>
                        <p className="italic text-gray-400">
                            &quot;To leverage Generative AI and Agentic Workflows to build the next generation of intelligent software.&quot;
                        </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-purple-400 font-bold mb-1">Contact</h4>
                            <p className="hover:text-white transition-colors cursor-pointer">mithun@example.com</p>
                            <p className="hover:text-white transition-colors cursor-pointer">linkedin.com/in/mithun</p>
                        </div>
                        <div>
                            <h4 className="text-blue-400 font-bold mb-1">Interests</h4>
                            <p>Generative AI</p>
                            <p>System Architecture</p>
                            <p>Open Source</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
