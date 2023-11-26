import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';
import Modal from '@/Components/Modal';
import ProcessManager from '../ProcessManager';
import SchedulerComponent from '../SchedulerComponent';
import StatesComponent from '../StatesComponent';

import { Container, PMContainer, SchedulerContainer } from './styles';
import { calculateOverrideValues } from 'next/dist/server/font-utils';

const tasks = [
  new Process({
    pid: 11111,
    arrival: 0,
    burst: 2,
    deadline: 35,
    color: 'red',
    priority: 1,
    pages: 5,
  }),
  new Process({
    pid: 22222,
    arrival: 0,
    burst: 2,
    deadline: 15,
    color: 'blue',
    priority: 2,
    pages: 5,
  }),
  new Process({
    pid: 33333,
    arrival: 4,
    burst: 2,
    deadline: 20,
    color: 'green',
    priority: 3,
    pages: 5,
  }),
  new Process({
    pid: 44444,
    arrival: 6,
    burst: 2,
    deadline: 25,
    color: 'yellow',
    priority: 4,
    pages: 5,
  }),
];

export default function CpuComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [processesStates, setProcessesStates] = useState<string[][]>([]);
  const [allProcesses, setAllProcesses] = useState<Process[]>([]);
  const [saveProcesses, setSaveProcesses] = useState<Process[]>(tasks);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [reseted, setReseted] = useState<boolean>(false);
  const [criteria, setCriteria] = useState<string>('FCFS');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const cpu = useState<CPU>(new CPU());

  /*Adiciona um processo*/
  const addProcess = () => {
    if (!isRunning) {
      setModalIsOpen(true);
    } else {
      alert('Não é possível adicionar processos enquanto a CPU está executando');
    }
  };

  /*Salva a configuração de processos atuais*/
  // pra que serve
  // tantos códigos?
  // se a vida
  // não é programada
  // e as melhores coisas
  // não tem lógica
  // by dino

  function saveProcess() {
    const list: Process[] = [];
    allProcesses.map((process) => {
      var processCopy = Object.assign({}, process);
      list.push(processCopy);
    });
    setSaveProcesses(list);
    // console.log('save', saveProcesses);
  }

  /*Reseta tudo menos os processos salvos*/
  useEffect(() => {
    if (reseted) {
      cpu[0].reset();
      cpu[0].scheduler.criteria = criteria;
      var list: Process[] = [];
      saveProcesses.map((process) => {
        var processCopy = Object.assign({}, process);
        list.push(processCopy);
        cpu[0].addProcess(processCopy);
      });
      setAllProcesses(list);
      setProcessesStates([]);
      setIsAuto(false);
      setReseted(false);
      setIsRunning(false);
    }
  }, [reseted, saveProcesses, cpu, criteria]);

  /*Faz uma lista com os status de cada processo*/
  function updateStates() {
    const states: string[] = [];
    allProcesses.map((process) => {
      states.push(process.status);
    });
    setProcessesStates([...processesStates, states]);
  }

  /*Inicia execução automatica*/
  useEffect(() => {
    handleExecAll();
  }, [cpu, allProcesses, processesStates, isAuto]);

  /* Executa a cpu até o fim*/
  function handleExecAll() {
    if (isAuto) {
      setTimeout(() => {
        cpu[0].run(updateStates, allProcesses);
      }, 1000);
    }
  }

  /*Executa uma vez a cpu*/
  function handleExec() {
    setIsRunning(true);
    cpu[0].run(updateStates, allProcesses);
  }

  /*Altera o metodo de escalonamento*/
  const changeCriteria = (event: any) => {
    setCriteria(event.target.value);
    setReseted(true);
  };

  return (
    <Container>
      <div className="processesContainer">
        <h1 className="title">Process Manager</h1>
        <PMContainer>
          <div className="buttonContainer">
            <button className="buttonPM" onClick={addProcess}>
              Adicionar processo
            </button>
            <button className="buttonPM" onClick={saveProcess}>
              Salvar Processos
            </button>
            <button onClick={() => setReseted(true)} className="buttonPM">
              Resetar
            </button>
          </div>
          <div className="informations">
            <ProcessManager processList={allProcesses} />
            <StatesComponent cpu={cpu[0]} />
          </div>
        </PMContainer>
      </div>

      <SchedulerContainer>
        <div className="selectContainer">
          <div className="radioContainer">
            <label>
              <input type="radio" name="criteria" value="FCFS" onChange={changeCriteria} />
              <span>FIFO</span>
            </label>
          </div>
          <div className="radioContainer">
            <label>
              <input type="radio" name="criteria" value="SJF" onChange={changeCriteria} />
              <span>SJF</span>
            </label>
          </div>
          <div className="radioContainer">
            <label>
              <input type="radio" name="criteria" value="RR" onChange={changeCriteria} />
              <span>RR</span>
            </label>
          </div>
          <div className="radioContainer">
            <label>
              <input type="radio" name="criteria" value="PRIORITY" onChange={changeCriteria} />
              <span>PR</span>
            </label>
          </div>
          <div className="radioContainer">
            <label>
              <input type="radio" name="criteria" value="EDF" onChange={changeCriteria} />
              <span>EDF</span>
            </label>
          </div>
          <div className="buttonContainer">
            <button className="runButton" onClick={() => handleExec()}>
              <Image src="/assets/advance.svg" alt="Executar" width={30} height={30} />
            </button>
            <button className="runButton" onClick={() => setIsAuto(true)}>
              <Image src="/assets/play.svg" alt="Iniciar" width={22} height={22} />
            </button>
            <button className="runButton" onClick={() => setIsAuto(false)}>
              <Image src="/assets/pause.svg" alt="Pausar" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="resetButtonContainer"></div>

        <SchedulerComponent listStatus={processesStates} listProcess={allProcesses} />
      </SchedulerContainer>

      <Modal
        isOpen={modalIsOpen}
        setOpenModal={() => setModalIsOpen(!modalIsOpen)}
        processList={allProcesses}
        cpu={cpu[0]}
      />
    </Container>
  );
}
