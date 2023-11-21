import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';

import CPU from '@/scripts/cpu';
import Process from '@/scripts/process';

import {Background, Container} from './styles';

export default function Modal({isOpen, setOpenModal, cpu}: {isOpen: boolean, setOpenModal: () => void, cpu: CPU} ) {
    

    const {register, handleSubmit} = useForm();
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
        console.log(cpu.scheduler);
        setOpenModal();
    }

    if (isOpen){
    return(
        <Background>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("label")} placeholder='Nome'/>
                    <input {...register("arrival")} placeholder='Tempo de chegada'/>
                    <input {...register("burst")} placeholder='Tempo de execução'/>
                    <input {...register("deadline")} placeholder='Deadline'/>
                    <input {...register("priority")} placeholder='Prioridade'/>
                    <select {...register("color", { required: true})}>
                        <option value="">Selecione uma cor...</option>
                        <option value="red">Vermelho</option>
                        <option value="blue">Azul</option>
                        <option value="green">Verde</option>
                        <option value="yellow">Amarelo</option>
                        <option value="purple">Roxo</option>
                        <option value="orange">Laranja</option>
                    </select>
                    <input type='submit'/>
                </form>
            </Container>
        </Background>
    )
    }
    return null;
}