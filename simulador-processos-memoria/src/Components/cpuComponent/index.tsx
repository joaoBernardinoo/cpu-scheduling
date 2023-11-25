import React from 'react';
import { useState, useEffect } from 'react';

import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';

import Modal from '@/Components/Modal';
import ProcessManager from '../ProcessManager';
import SchedulerComponent from '../SchedulerComponent';


const tasks = [
  new Process({
      pid: 11111,
      arrival: 0,
      burst: 8,
      deadline: 35,
      color: "red",
      priority: 1,
  }),
  new Process({
      pid: 22222,
      arrival: 0,
      burst: 4,
      deadline: 15,
      color: "blue",
      priority: 2,
  }),
  new Process({
      pid: 33333,
      arrival: 8,
      burst: 2,
      deadline: 20,
      color: "green",
      priority: 3,
  }),
  new Process({
      pid: 44444,
      arrival: 12,
      burst: 7,
      deadline: 25,
      color: "yellow",
      priority: 4,
  }),
];

export default function CpuComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [processesStates, setProcessesStates] = useState<string[][]>([]);
  const [allProcesses, setAllProcesses] = useState<Process[]>([]);
  const [saveProcesses, setSaveProcesses] = useState<Process[]>(tasks);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [reseted, setReseted] = useState<boolean>(false);
  const [criteria, setCriteria] = useState<string>("FCFS");
  const cpu = useState<CPU>(new CPU());
  
  function saveProcess() {
    const list: Process[] = [];
    allProcesses.map((process) => {
      var processCopy = Object.assign({}, process)
      list.push(processCopy);
      });
    setSaveProcesses(list);
    console.log("save", saveProcesses);
  }

  useEffect(() => {
    if (reseted) {
      cpu[0].reset();
      cpu[0].scheduler.criteria = criteria;
      console.log("reset", saveProcesses);
      var list: Process[] = [];
      saveProcesses.map((process) => {
        var processCopy = Object.assign({}, process)
        list.push(processCopy);
        cpu[0].addProcess(processCopy);
        });
      setAllProcesses(list);
      setProcessesStates([]);
      setReseted(false);
    }
  }, [reseted, saveProcesses, cpu, criteria])

  function getStates() {
    const states: string[] = [];
    allProcesses.map((process) => {
      states.push(process.status);
    })
    setProcessesStates([...processesStates, states])
  }

  
  useEffect(() => {
    if (isAuto) {
     setTimeout(() => {
      cpu[0].run();
      const states: string[] = [];
      allProcesses.map((process) => {
        states.push(process.status);
      })
      setProcessesStates([...processesStates, states])
     }, 1000)
    }
  }, [cpu, allProcesses, processesStates, isAuto]);

  function handleExec() {
    cpu[0].run();
    getStates();
  }

  const changeCriteria = (event: any) => {
    setCriteria(event.target.value);
    setReseted(true);
  }

  return (
    <div>
      <h1>CPU</h1>
      <div>
        <button onClick={() => setModalIsOpen(true)}>Adicionar processo</button>
      </div>
      <ProcessManager processList={allProcesses}/>
      <button onClick={saveProcess}>Salvar</button>
      <div>
        <h4>Running</h4>
        <span>{cpu[0].process?.color}</span>
        <h4>Chegando</h4>
        {cpu[0].arriving.map((process, i) => (
          <div key={i}>
            <span>{process.color}</span>
          </div>
        ))}
        <h4>Ready</h4>
        {cpu[0].scheduler.ready.map((process, i) => (
          <div key={i}>
            <span>{process.color}</span>
          </div>
        ))}
        <h4>Finished</h4>
        {cpu[0].scheduler.finished.map((process, i) => (
          <div key={i}>
            <span>{process.color}</span>
          </div>
        ))}
        <h4>Suspended</h4>
        {cpu[0].scheduler.suspended.map((process, i) => (
          <div key={i}>
            <span>{process.color}</span>
          </div>
        ))}
      </div>
      <div>
        <select onChange={changeCriteria}>
          <option value="FCFS">FCFS</option>
          <option value="SJF">SJF</option>
          <option value="RR">RR</option>
          <option value="PRIORITY">PRIORITY</option>
          <option value="EDF">EDF</option>
        </select>
      </div>
      <div>
        <button onClick={() => handleExec()}>Run</button>
        <button onClick={() => setIsAuto(true)}>Play</button>
        <button onClick={() => setIsAuto(false)}>Pause</button>
      </div>
      <div>
        <button onClick={() => setReseted(true)}>Resetar</button>
      </div>
      <SchedulerComponent listProcesses={processesStates} />
      <Modal isOpen={modalIsOpen} setOpenModal={() => setModalIsOpen(!modalIsOpen)} processList={allProcesses} cpu={cpu[0]}/>
    </div>
  );
}