'use client';

import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useStore } from '@/hooks/useStore';
import { easing } from 'maath';
import { fileSystem } from '@/data/fileSystem';

export const CameraRig = () => {
    const { currentView, selectedProject } = useStore();
    const projects = fileSystem.projects.items as any[];

    useFrame((state, delta) => {
        const targetPos = new Vector3(0, 0, 10);
        const targetLookAt = new Vector3(0, 0, 0);

        if (selectedProject) {
            const index = projects.findIndex((p) => p.id === selectedProject);
            if (index !== -1) {
                // Zoom into the specific project card
                // Scene logic: group position x=5, card position x=i*3.5
                const cardX = 5 + (index * 3.5);
                targetPos.set(cardX, 0, 4);
                targetLookAt.set(cardX, 0, 0);
            }
        } else {
            switch (currentView) {
                case 'about':
                    targetPos.set(-5, 0, 6);
                    targetLookAt.set(-5, 0, 0);
                    break;
                case 'projects':
                    targetPos.set(8, 0, 8); // Overview of project gallery
                    targetLookAt.set(8, 0, 0);
                    break;
                case 'skills':
                    targetPos.set(0, 5, 5);
                    targetLookAt.set(0, 2, 0);
                    break;
                case 'experience':
                    targetPos.set(0, -5, 5);
                    targetLookAt.set(0, -2, 0);
                    break;
                case 'contact':
                    targetPos.set(0, 0, 15);
                    break;
                default: // home
                    targetPos.set(0, 0, 10);
                    targetLookAt.set(0, 0, 0);
            }
        }

        easing.damp3(state.camera.position, targetPos, 0.5, delta);

        // Simple lookAt implementation
        // For smoother lookAt, we would need to damp the quaternion or lookAt target
        // But for this rig, setting lookAt every frame is acceptable if position is damped
        state.camera.lookAt(targetLookAt);
    });

    return null;
};
