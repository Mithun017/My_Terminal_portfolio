'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Lights } from './Lights';
import { Stars } from './Stars';
import { CameraRig } from './CameraRig';
import { ProjectCard } from './ProjectCard';
import { Environment } from '@react-three/drei';
import { fileSystem } from '@/data/fileSystem';
import { Project } from '@/types';
import { useStore } from '@/hooks/useStore';

export const Scene = () => {
    const projects = fileSystem.projects.items as Project[];
    const { currentView } = useStore();

    const showProjects = currentView === 'home' || currentView === 'projects';

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Suspense fallback={null}>
                    <color attach="background" args={['#050505']} />
                    <fog attach="fog" args={['#050505', 5, 20]} />

                    <Lights />
                    <Stars />
                    <CameraRig />

                    {/* Project Gallery Zone (Right side) */}
                    {showProjects && (
                        <group position={[5, 0, 0]}>
                            {projects.map((project, i) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={i}
                                    position={[i * 3.5, 0, 0]} // Horizontal layout
                                />
                            ))}
                        </group>
                    )}

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};
