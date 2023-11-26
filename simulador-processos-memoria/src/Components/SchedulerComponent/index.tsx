import React from 'react';

import Process from '@/scripts/process';

import { Container, Line, Column, ProcessColor } from './styles';

export default function SchedulerComponent({listStatus, listProcess}: {listStatus: string[][], listProcess: Process[]}) {

    function defineColor(status: string) {
        switch (status) {
            case 'running':
                return '#1AD83A';
            case 'ready':
                return '#7A9CC6';
            case 'overhead':
                return '#DA2C38';
            case 'finished':
                return 'transparent';
            default:
                return 'white';
        }
    }

    return (
        <Container>
            <Line>
                {listProcess.map((process, i) => (
                    <ProcessColor key={i} color={process.color}>
                        <div className='statusColor'></div>
                    </ProcessColor>
                ))}
            </Line> 
            <div className='listStates'>
                {listStatus.map((process, i) => (
                    <Line key={i}>
                        {process.map((status, j) => (
                            <Column key={j} color={defineColor(status)}>
                                <div className='statusColor'></div>
                            </Column>
                        )
                        )}
                        <span>{i}</span>
                    </Line>
                    ))}
            </div> 
        </Container>
    )
}