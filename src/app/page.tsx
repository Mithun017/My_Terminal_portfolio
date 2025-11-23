'use client';

import { Terminal } from '@/components/terminal/Terminal';
import { Scene } from '@/components/canvas/Scene';

export default function Home() {
  return (
    <main className="h-screen w-full relative bg-black overflow-hidden">
      {/* 3D Scene Layer - Z-Index 0 */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* UI Layer - Z-Index 10 */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Terminal />
      </div>
    </main>
  );
}
