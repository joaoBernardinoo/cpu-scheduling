import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';

import Process from '@/scripts/process';
import CPU from '@/scripts/cpu';


import { Background, Container } from './styles';
import RAM from '@/Scripts/memory/RAM';
import Disk from '@/Scripts/memory/Disk';



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
      arrival: data.arrival,
      burst: data.burst,
      color: data.color,
      deadline: data.deadline,
      priority: data.priority,
      pages: data.pages,
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register('color')}>
              <option value="red">Vermelho</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
              <option value="yellow">Amarelo</option>
              <option value="purple">Roxo</option>
              <option value="pink">Rosa</option>
            </select>
            <input {...register('arrival')} placeholder="Tempo de chegada" inputMode='numeric' defaultValue={0} />
            <input {...register('burst')} placeholder="Tempo de execução" defaultValue={2} />
            <input {...register('deadline')} placeholder="Deadline" />
            <input {...register('priority')} placeholder="Prioridade" />
            <input {...register('pages')} placeholder="Número de Páginas" />
            <input type="submit" />
          </form>
          <button onClick={setOpenModal}>Fechar</button>
        </Container>
      </Background>
    );
  }
  return null;
}
