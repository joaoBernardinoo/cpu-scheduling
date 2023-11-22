import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';

import { Background, Container } from './styles';

const tasks = [
    new Process({
        pid: 11111,
        arrival: 0,
        burst: 8,
        deadline: 35,
        label: "A",
    }),
    new Process({
        pid: 22222,
        arrival: 0,
        burst: 4,
        deadline: 15,
        label: "B",
    }),
    new Process({
        pid: 33333,
        arrival: 8,
        burst: 2,
        deadline: 20,
        label: "C",
    }),
    new Process({
        pid: 44444,
        arrival: 12,
        burst: 7,
        deadline: 25,
        label: "D",
    }),
];

export default function Modal({
  isOpen,
  setOpenModal,
  cpu,
}: {
  isOpen: boolean;
  setOpenModal: () => void;
  cpu: CPU;
}) {
  const { register, handleSubmit } = useForm();
  const [counter, setCounter] = useState<number>(501);

  const onSubmit = async (data: any) => {
    const newProcess = new Process({
      pid: counter,
      arrival: data.arrival,
      burst: data.burst,
      deadline: data.deadline,
      label: data.label,
      color: data.color,
      priority: data.priority,
    });
    setCounter(counter + 1);
    cpu.scheduler.addProcess(newProcess);
    setOpenModal();
  };

  cpu.scheduler.ready = tasks;

  if (isOpen) {
    return (
      <Background>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('label')} placeholder="Nome" />
            <input {...register('arrival')} placeholder="Tempo de chegada" defaultValue={0} />
            <input {...register('burst')} placeholder="Tempo de execução" defaultValue={2} />
            <input {...register('deadline')} placeholder="Deadline" />
            <input {...register('priority')} placeholder="Prioridade" />
            <select {...register('color', { required: true })}>
              <option value="">Selecione uma cor...</option>
              <option value="red">Vermelho</option>
              <option value="blue">Azul</option>
              <option value="green">Verde</option>
              <option value="yellow">Amarelo</option>
              <option value="purple">Roxo</option>
              <option value="orange">Laranja</option>
              <option value="white">Branco</option>
            </select>
            <input type="submit" />
          </form>
          <button onClick={setOpenModal}>Fechar</button>
        </Container>
      </Background>
    );
  }
  return null;
}
