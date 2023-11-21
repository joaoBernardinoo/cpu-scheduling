import React from 'react'
import { useState } from 'react';

import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';

const tasks = [
  new Process({
    pid: 11111,
    arrival: 0,
    burst: 8,
    deadline: 35,
    label: 'A',
  }),
  new Process({
    pid: 22222,
    arrival: 4,
    burst: 4,
    deadline: 15,
    label: 'B',
  }),
  new Process({
    pid: 33333,
    arrival: 8,
    burst: 2,
    deadline: 20,
    label: 'C',
  }),
  new Process({
    pid: 44444,
    arrival: 12,
    burst: 7,
    deadline: 25,
    label: 'D',
  }),
];

export default function CpuComponent() {
  const cpu = useState<CPU>(new CPU('FCFS'));

  cpu[0].scheduler.ready = tasks;

  return (
    <div>
      <h1>CPU</h1>
    </div>
  )
}