import Head from 'next/head';
import React from 'react';

import CpuComponent from '@/Components/cpuComponent';
import { MemoryProvider } from '@/contexts/memoryContext';
import { useState } from 'react';


export default function Home() {
  // arrays com as memórias
  const [RAM, setRAM] = useState<number[]>([]);
  const [Disk, setDisk] = useState<number[]>([]);

  const updateMemory = (ramPages: number[], diskPages: number[]) => {
    setRAM(ramPages);
    setDisk(diskPages);
  }

  return (
    <MemoryProvider
      value={{
        RAM: RAM,
        Disk: Disk,
        updateMemory: updateMemory,
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
