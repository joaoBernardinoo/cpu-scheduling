import React from 'react';
import { useState } from 'react';

import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';

import Modal from '@/Components/Modal';


export default function CpuComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const cpu = useState<CPU>(new CPU('FCFS'));



  return (
    <div>
      <h1>CPU</h1>
      <button onClick={() => cpu[0].run()}>Run</button>
      <div>
        <button onClick={() => setModalIsOpen(true)}>Adicionar processo</button>
      </div>
      <Modal isOpen={modalIsOpen} setOpenModal={() => setModalIsOpen(!modalIsOpen)} cpu={cpu[0]}/>
    </div>
  )
}