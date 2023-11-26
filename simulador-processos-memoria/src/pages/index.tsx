import Head from 'next/head';
import React from 'react';

import CpuComponent from '@/Components/CpuComponent';
import MemoryComponent from '@/Components/MemoryComponent';
import { MemoryProvider } from '@/contexts/memoryContext';
import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';

export default function Home() {
  // criando memórias
  const ram = new RAM()
  const disk = new Disk()

  return (
    <MemoryProvider
      value={{
        RAM: ram,
        Disk: disk,
      }}
    >
      <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Home</h1>
        <CpuComponent />
        <MemoryComponent />
      </main>
    </div>
    </MemoryProvider>
    
  );
}
