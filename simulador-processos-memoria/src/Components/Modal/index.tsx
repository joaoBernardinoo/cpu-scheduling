import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

import Process from '@/scripts/process';
import CPU from '@/scripts/cpu';

import { Background, Container } from './styles';



export default function Modal({
  isOpen,
  setOpenModal,
  processList, 
  cpu
}: {
  isOpen: boolean;
  setOpenModal: () => void;
  processList: Process[];
  cpu: CPU;
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
    });
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
            <select {...register('color')}>
              <option value="red">Vermelho</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
              <option value="yellow">Amarelo</option>
              <option value="purple">Roxo</option>
              <option value="pink">Rosa</option>
            </select>
            <input {...register('arrival')} placeholder="Tempo de chegada" defaultValue={0} />
            <input {...register('burst')} placeholder="Tempo de execução" defaultValue={2} />
            <input {...register('deadline')} placeholder="Deadline" />
            <input {...register('priority')} placeholder="Prioridade" />
            <input type="submit" />
          </form>
          
        </Container>
      </Background>
    );
  }
  return null;
}
