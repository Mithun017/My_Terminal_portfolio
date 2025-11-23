'use client';

import React, { useRef, useEffect } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { useStore } from '@/hooks/useStore';

export const Terminal = () => {
    const { history, input, setInput, handleCommand } = useTerminal();
    const { isTerminalOpen } = useStore();
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput('');
    };

    if (!isTerminalOpen) return null;

    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[500px] bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm md:text-base z-[100] pointer-events-auto"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Header */}
            <div className="bg-gray-900/90 px-4 py-2 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-gray-400 text-xs">M_MITHUN@PORTFOLIO:~</div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-transparent" onClick={() => inputRef.current?.focus()}>
                {history.map((item, i) => (
                    <div key={i} className={`mb-2 ${item.type === 'command' ? 'text-cyan-400' : item.type === 'error' ? 'text-red-400' : 'text-gray-300'}`}>
                        {item.type === 'command' && <span className="mr-2 text-green-500">➜</span>}
                        <span className="whitespace-pre-wrap">{item.content}</span>
                    </div>
                ))}

                {/* Input Line */}
                <form onSubmit={handleSubmit} className="flex items-center mt-2">
                    <span className="text-green-500 mr-2">➜</span>
                    <span className="text-cyan-400 mr-2">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
                        autoFocus
                        spellCheck={false}
                    />
                </form>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};
