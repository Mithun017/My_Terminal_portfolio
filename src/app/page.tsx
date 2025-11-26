'use client';

import { Terminal } from '@/components/terminal/Terminal';
import { LandingPage } from '@/components/ui/LandingPage';
import { useStore } from '@/hooks/useStore';

export default function Home() {
  const { showLandingPage } = useStore();

  return (
    <main className="min-h-screen w-full bg-[#300a24]">
      {showLandingPage ? <LandingPage /> : <Terminal />}
    </main>
  );
}
