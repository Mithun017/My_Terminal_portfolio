'use client';

import { Terminal } from '@/components/terminal/Terminal';
import { Scene } from '@/components/canvas/Scene';

export default function Home() {
  return (
    <main className="h-screen w-full relative bg-black">
      <Scene />
      <Terminal />
    </main>
  );
}
