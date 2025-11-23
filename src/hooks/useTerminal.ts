'use client';

import { useState, useEffect, useCallback } from 'react';
import { useStore } from './useStore';
import { fileSystem } from '@/data/fileSystem';
import { Project } from '@/types';

type HistoryItem = {
    type: 'command' | 'output' | 'error';
    content: string;
};

export const useTerminal = () => {
    const [history, setHistory] = useState<HistoryItem[]>([
        { type: 'output', content: 'Welcome to M_MITHUN Terminal v1.0.0' },
        { type: 'output', content: "Type 'help' to see available commands." },
    ]);
    const [input, setInput] = useState('');
    const { setView, setSelectedProject, setTheme } = useStore();

    const addToHistory = (item: HistoryItem) => {
        setHistory((prev) => [...prev, item]);
    };

    const handleCommand = useCallback((cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        addToHistory({ type: 'command', content: trimmedCmd });

        const parts = trimmedCmd.split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        switch (command) {
            case 'help':
            case '?':
                addToHistory({ type: 'output', content: fileSystem.help.content || '' });
                break;

            case 'about':
            case 'whoami':
                setView('about');
                addToHistory({ type: 'output', content: fileSystem.about.content || '' });
                break;

            case 'skills':
            case 'stack':
                setView('skills');
                addToHistory({ type: 'output', content: fileSystem.skills.content || '' });
                break;

            case 'experience':
            case 'exp':
                setView('experience');
                addToHistory({ type: 'output', content: fileSystem.experience.content || '' });
                break;

            case 'contact':
                setView('contact');
                addToHistory({ type: 'output', content: fileSystem.contact.content || '' });
                break;

            case 'projects':
            case 'work':
                setView('projects');
                const projects = fileSystem.projects.items as Project[];
                const projectList = projects.map(
                    (p) => `[${p.id}] ${p.title} - ${p.description}`
                ).join('\n');
                addToHistory({ type: 'output', content: projectList });
                break;

            case 'run':
            case 'open':
                if (args.length === 0) {
                    addToHistory({ type: 'error', content: 'Usage: run <project_id>' });
                    return;
                }
                const projectId = args[0].toLowerCase();
                const allProjects = fileSystem.projects.items as Project[];
                const project = allProjects.find((p) => p.id === projectId);

                if (project) {
                    setSelectedProject(projectId);
                    setView('projects'); // Ensure we are in projects view
                    addToHistory({ type: 'output', content: `Launching ${project.title}...\n${project.details}` });
                } else {
                    addToHistory({ type: 'error', content: `Project '${projectId}' not found.` });
                }
                break;

            case 'clear':
            case 'cls':
                setHistory([]);
                break;

            case 'theme':
                if (args.length === 0) {
                    addToHistory({ type: 'output', content: 'Usage: theme <color> (cyan, purple, red)' });
                } else {
                    setTheme(args[0]);
                    addToHistory({ type: 'output', content: `Theme set to ${args[0]}` });
                }
                break;

            default:
                addToHistory({ type: 'error', content: `Command not found: ${command}. Type 'help' for list.` });
        }
    }, [setView, setSelectedProject, setTheme]);

    return {
        history,
        input,
        setInput,
        handleCommand,
    };
};
