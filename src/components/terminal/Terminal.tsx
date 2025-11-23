'use client';

import React, { useRef, useEffect } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { useStore } from '@/hooks/useStore';
import Image from 'next/image';

export const Terminal = () => {
    const { history, input, setInput, handleCommand } = useTerminal();
    const { isTerminalOpen } = useStore();
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom of WINDOW when history changes or user types
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, [history, input]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    if (!isTerminalOpen) return null;

    return (
        <div
            className="min-h-screen w-full bg-[#300a24] flex flex-col font-mono text-sm md:text-base pointer-events-auto border-l-[6px] border-r-[6px] border-b-[6px] border-t-[16px] border-[#3e3e3e]"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Sticky Header Container */}
            <div className="sticky top-0 z-50 bg-[#300a24]">
                {/* Window Header */}
                <div className="bg-[#3e3e3e] px-6 py-2 flex items-center justify-between border-b border-[#2d2d2d]">
                    <div className="text-gray-300 text-xs font-bold text-center w-full">mithun@portfolio: ~</div>
                    <div className="flex items-center gap-2 absolute right-4">
                        <div className="w-3 h-3 rounded-full bg-[#df4b16]" /> {/* Close */}
                        <div className="w-3 h-3 rounded-full bg-gray-400" /> {/* Maximize */}
                        <div className="w-3 h-3 rounded-full bg-gray-400" /> {/* Minimize */}
                    </div>
                </div>

                {/* Pinned Neofetch Header */}
                <div className="bg-[#300a24] p-6 md:p-8 border-b border-gray-700">
                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between">

                        {/* Info & ASCII Name (Left Side) */}
                        <div className="flex flex-col justify-start space-y-4 w-full overflow-hidden">
                            {/* ASCII Name */}
                            <pre className="text-[#8ae234] font-bold text-[10px] md:text-sm leading-none tracking-wider overflow-x-auto whitespace-pre scrollbar-none">
                                {`
███╗   ███╗██╗████████╗██╗  ██╗██╗   ██╗███╗   ██╗
████╗ ████║██║╚══██╔══╝██║  ██║██║   ██║████╗  ██║
██╔████╔██║██║   ██║   ███████║██║   ██║██╔██╗ ██║
██║╚██╔╝██║██║   ██║   ██╔══██║██║   ██║██║╚██╗██║
██║ ╚═╝ ██║██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║
╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
                            </pre>

                            <div className="space-y-1 text-gray-300 font-mono text-xs md:text-base">
                                <div className="text-gray-500 mb-2">---------------------------------------------------</div>
                                <div className="flex gap-2">
                                    <span className="text-[#8ae234] font-bold min-w-[80px]">Role:</span>
                                    <span>AI & Data Science Undergraduate</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#8ae234] font-bold min-w-[80px]">Stack:</span>
                                    <span>Full Stack & AI Agent Dev</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#8ae234] font-bold min-w-[80px]">OS:</span>
                                    <span>PortfolioOS v1.0 (Ubuntu Style)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#8ae234] font-bold min-w-[80px]">Shell:</span>
                                    <span>ZSH (Simulated)</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[#8ae234] font-bold min-w-[80px]">Uptime:</span>
                                    <span>Always On</span>
                                </div>

                                {/* Color Bars */}
                                <div className="flex gap-2 mt-4 pt-2">
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-black"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-red-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-green-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-yellow-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-blue-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-purple-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-cyan-500"></div>
                                    <div className="w-6 h-3 md:w-8 md:h-4 bg-white"></div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image (Right Side) */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 border-4 border-white/10 rounded-lg overflow-hidden shadow-2xl self-start md:self-auto">
                            <Image
                                src="/profile.jpg"
                                alt="Mithun"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* Content Body - Grows naturally */}
            <div className="p-6 pb-32">
                {history.map((item, i) => (
                    <div key={i} className="mb-1">
                        {item.type === 'command' ? (
                            <div className="text-white">
                                <span className="text-[#8ae234] font-bold">mithun@portfolio</span>
                                <span className="text-white">:</span>
                                <span className="text-[#729fcf] font-bold">~</span>
                                <span className="text-white mr-2">$</span>
                                <span>{item.content}</span>
                            </div>
                        ) : (
                            <div className={`${item.type === 'error' ? 'text-red-400' : 'text-white'} whitespace-pre-wrap`}>
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center mt-1">
                    <span className="text-[#8ae234] font-bold">mithun@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-[#729fcf] font-bold">~</span>
                    <span className="text-white mr-2">$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none placeholder-gray-600"
                        style={{ color: '#FFFFFF', caretColor: '#FFFFFF', backgroundColor: 'transparent' }}
                        autoFocus
                        spellCheck={false}
                    />
                </form>
            </div>
        </div>
    );
};
