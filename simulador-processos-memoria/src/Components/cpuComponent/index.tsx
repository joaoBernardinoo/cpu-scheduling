import React from 'react';
import { useState } from 'react';

import CPU from '@/scripts/cpu';

import Modal from '@/Components/Modal';
import ProcessManager from '../ProcessManager';

export default function CpuComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [processes, setProcesses] = useState<string[][]>([]);

  const cpu = useState<CPU>(new CPU('FCFS'));

  function handleExec() {
    cpu[0].run();
    const states = cpu[0].getStates();
    processes.push(states);
    console.log(processes)
  }    


  return (
    <div>
      <h1>CPU</h1>
      <button onClick={() => handleExec()}>Run</button>
      <div>
        <button onClick={() => setModalIsOpen(true)}>Adicionar processo</button>
      </div>
      <ProcessManager scheduler={cpu[0].scheduler}/>

      <Modal isOpen={modalIsOpen} setOpenModal={() => setModalIsOpen(!modalIsOpen)} cpu={cpu[0]}/>
    </div>
  )
}