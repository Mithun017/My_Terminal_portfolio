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
            className="fixed inset-0 w-full h-full bg-[#300a24]/95 backdrop-blur-md flex flex-col font-mono text-sm md:text-base z-[100] pointer-events-auto"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Header */}
            <div className="bg-[#3e3e3e] px-4 py-2 flex items-center justify-between border-b border-[#2d2d2d]">
                <div className="text-gray-300 text-xs font-bold text-center w-full">mithun@portfolio: ~</div>
                <div className="flex items-center gap-2 absolute right-4">
                    <div className="w-3 h-3 rounded-full bg-[#df4b16]" /> {/* Close */}
                    <div className="w-3 h-3 rounded-full bg-gray-400" /> {/* Maximize */}
                    <div className="w-3 h-3 rounded-full bg-gray-400" /> {/* Minimize */}
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent" onClick={() => inputRef.current?.focus()}>
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
                <div ref={bottomRef} />
            </div>
        </div>
    );
};
