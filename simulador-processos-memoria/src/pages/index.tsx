import Head from 'next/head';
import React from 'react';

import CpuComponent from '@/Components/CpuComponent';
import MemoryComponent from '@/Components/MemoryComponent';
import { MemoryProvider } from '@/contexts/memoryContext';
import { useState, useEffect } from 'react';


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
