import { create } from 'zustand';

type State = {
    currentView: 'home' | 'about' | 'projects' | 'skills' | 'experience' | 'contact';
    selectedProject: string | null;
    theme: string;
    isTerminalOpen: boolean;
};

type Actions = {
    setView: (view: State['currentView']) => void;
    setSelectedProject: (id: string | null) => void;
    setTheme: (theme: string) => void;
    toggleTerminal: () => void;
};

export const useStore = create<State & Actions>((set) => ({
    currentView: 'home',
    selectedProject: null,
    theme: 'cyan',
    isTerminalOpen: true,
    setView: (view) => set({ currentView: view }),
    setSelectedProject: (id) => set({ selectedProject: id }),
    setTheme: (theme) => set({ theme }),
    toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
}));
