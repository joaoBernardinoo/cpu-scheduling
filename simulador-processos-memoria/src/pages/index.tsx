import Head from 'next/head';
import React from 'react';

import CpuComponent from '@/Components/CpuComponent';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <h1>Home</h1>
        <CpuComponent />
      </main>
    </div>
  );
}
