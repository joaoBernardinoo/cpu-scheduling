import React from 'react';
import { useState } from 'react';

import CPU from '@/scripts/cpu';

import Modal from '@/Components/Modal';
import ProcessManager from '../ProcessManager';

export default function CpuComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [processes, setProcesses] = useState<string[][]>([]);

  const cpu = useState<CPU>(new CPU('EDF'));

  function handleExec() {
    cpu[0].run();
    const states = cpu[0].getStates();
    setProcesses((prevProcesses) => [...prevProcesses, states]);
  }

  return (
    <div>
      <h1>CPU</h1>
      <button onClick={() => handleExec()}>Run</button>
      <div>
        <button onClick={() => setModalIsOpen(true)}>Adicionar processo</button>
      </div>
      <ProcessManager scheduler={cpu[0].scheduler} />
      <div style={{ display: 'flex'}}>
        {processes.map((process) => (
          <div>
            {process.map((state) => (
              <div style={{ border: '1px solid black', width: '20px', height: '20px', backgroundColor: state}}></div>
            ))}
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} setOpenModal={() => setModalIsOpen(!modalIsOpen)} cpu={cpu[0]} />
    </div>
  );
}