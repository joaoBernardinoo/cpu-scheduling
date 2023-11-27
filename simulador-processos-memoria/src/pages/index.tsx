import Head from 'next/head';
import React from 'react';


import CpuComponent from '@/Components/cpuComponent';

export default function Home() {

  return (
      <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <CpuComponent />
      </main>
    </div>
  );
}
