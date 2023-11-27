import Head from 'next/head';
import React from 'react';


import CpuComponent from '@/Components/cpuComponent';
import { MemoryProvider } from '@/contexts/memoryContext';
import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';

export default function Home() {
  // criando memórias
  const ram = new RAM();
  const disk = new Disk();

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
        <CpuComponent />
        
      </main>
    </div>
    </MemoryProvider>
    
  );
}
