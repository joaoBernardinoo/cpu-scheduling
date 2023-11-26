import React from 'react';

import Process from '@/scripts/process';

import { Container, Line, Column } from './styles';

export default function SchedulerComponent({listStatus, listProcess}: {listStatus: string[][], listProcess: Process[]}) {

    function defineColor(status: string) {
        switch (status) {
            case 'running':
                return 'blue';
            case 'ready':
                return 'yellow';
            case 'overhead':
                return 'red';
            case 'finished':
                return 'green';
            default:
                return 'white';
        }
    }

    return (
        <Container>
            <Line>
                {listProcess.map((process, i) => (
                    <Column key={i} color={process.color}>
                    </Column>
                ))}
            </Line> 
            <div className='listStates'>
                {listStatus.map((process, i) => (
                    <Line key={i}>
                        {process.map((status, j) => (
                            <Column key={j} color={defineColor(status)}>
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