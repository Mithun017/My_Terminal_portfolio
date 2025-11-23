'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Points as ThreePoints } from 'three';

export const Stars = (props: Record<string, unknown>) => {
    const ref = useRef<ThreePoints>(null);
    // Using 6000 to ensure it's divisible by 3 (x, y, z) to avoid NaN errors
    const sphere = useMemo(() => random.inSphere(new Float32Array(6000), { radius: 30 }) as Float32Array, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#E6F1FF"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};
