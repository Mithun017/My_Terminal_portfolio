'use client';

import { Terminal } from '@/components/terminal/Terminal';
import { Scene } from '@/components/canvas/Scene';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-black">
      {/* 3D Scene Layer - Z-Index 0 */}
      <div className="fixed inset-0 z-0">
        <Scene />
      </div>

      {/* UI Layer - Z-Index 10 */}
      <div className="relative z-10 pointer-events-none">
        <Terminal />
      </div>
    </main>
  );
}
