import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import Image from 'next/image';


import Process from '@/scripts/process';
import CPU from '@/scripts/cpu';

import { Background, Container } from './styles';
import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';

export default function Modal({
  isOpen,
  setOpenModal,
  processList,
  cpu,
  RAM,
  Disk,
}: {
  isOpen: boolean;
  setOpenModal: () => void;
  processList: Process[];
  cpu: CPU;
  RAM: RAM;
  Disk: Disk;
}) {
  const { register, handleSubmit } = useForm();
  const [counter, setCounter] = useState<number>(501);

  const onSubmit = async (data: any) => {
    const newProcess = new Process({
      pid: counter,
      arrival: parseInt(data.arrival),
      burst: data.burst,
      color: data.color,
      deadline: data.deadline == undefined ? 99 : parseInt(data.deadline),
      priority: data.priority,
      pages: parseInt(data.pages),
    });
    // add na memória
    const index = RAM.addProcess(counter, parseInt(data.pages));
    Disk.addProcess(counter, index);

    setCounter(counter + 1);
    processList.push(newProcess);
    cpu.addProcess(newProcess);
    setOpenModal();
  };

  if (isOpen) {
    return (
      <Background>
        <Container>
          <div className='modalTitle'>
            <h1>Adicionar Processo</h1>
            <button onClick={setOpenModal}>
              <Image src="/assets/close.svg" alt="Fechar" width={20} height={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Selecione a cor</span>
            <select {...register('color')}>
              <option value="red">Vermelho</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
              <option value="yellow">Amarelo</option>
              <option value="purple">Roxo</option>
              <option value="pink">Rosa</option>
            </select>
            </label>
            <label>
              <span>Tempo de chegada</span>
            <input {...register('arrival')}               inputMode="numeric"
              defaultValue={0} />
            </label>
            <label>
            <span>Tempo de execução</span>
            <input {...register('burst')} />
            </label>
            <label>
            <span>Deadline</span>
            <input {...register('deadline')} />
            </label>
            <label>
            <span>Prioridade</span>
            <input {...register('priority')}  />
            </label>
            <label>
            <span>Número de Páginas</span>
            <input {...register('pages')}   defaultValue={1}
              inputMode="numeric"/>
            </label>
            <div className='sectionSubmit'>
              <input type="submit" className='submit'/>
            </div>
          </form>
          
        </Container>
      </Background>
    );
  }
  return null;
}
