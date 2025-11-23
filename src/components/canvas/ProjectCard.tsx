'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import { useStore } from '@/hooks/useStore';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    position: [number, number, number];
    index: number;
}

export const ProjectCard = ({ project, position, index }: ProjectCardProps) => {
    const mesh = useRef<any>(null);
    const [hovered, setHover] = useState(false);
    const { setSelectedProject, setView } = useStore();

    useFrame((state, delta) => {
        if (mesh.current) {
            // Floating animation
            mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1;

            // Tilt on hover
            if (hovered) {
                mesh.current.rotation.x = 0.1;
                mesh.current.rotation.y = 0.1;
            } else {
                mesh.current.rotation.x = 0;
                mesh.current.rotation.y = 0;
            }
        }
    });

    const handleClick = () => {
        setSelectedProject(project.id);
        setView('projects');
    };

    return (
        <group position={position}>
            <mesh
                ref={mesh}
                onClick={handleClick}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <boxGeometry args={[3, 2, 0.1]} />
                <meshPhysicalMaterial
                    color={hovered ? '#64FFDA' : '#0A192F'}
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={false}
                />

                {/* Text Content */}
                <Text
                    position={[0, 0.5, 0.06]}
                    fontSize={0.2}
                    color="#E6F1FF"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={2.5}
                >
                    {project.title}
                </Text>

                <Text
                    position={[0, 0, 0.06]}
                    fontSize={0.1}
                    color="#8892b0"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={2.5}
                >
                    {project.description}
                </Text>

                {/* ID Label */}
                <Text
                    position={[1.2, -0.8, 0.06]}
                    fontSize={0.08}
                    color="#64FFDA"
                    anchorX="right"
                    anchorY="bottom"
                >
                    ID: {project.id}
                </Text>
            </mesh>
        </group>
    );
};
