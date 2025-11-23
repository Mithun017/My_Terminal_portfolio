'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, PointLight } from 'three';
import { useStore } from '@/hooks/useStore';

export const Lights = () => {
    const { theme } = useStore();
    const lightRef = useRef<PointLight>(null);

    useFrame(() => {
        if (lightRef.current) {
            // Animate light color based on theme
            const targetColor = new Color(theme === 'red' ? '#ff0000' : theme === 'purple' ? '#bd93f9' : '#64ffda');
            lightRef.current.color.lerp(targetColor, 0.05);
        }
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight ref={lightRef} position={[10, 10, 10]} intensity={1} distance={20} />
            <spotLight position={[-10, 10, 5]} angle={0.5} penumbra={1} intensity={0.5} color="#bd93f9" />
        </>
    );
};
