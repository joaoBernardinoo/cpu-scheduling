import React from 'react';


import { Container, Line, Column } from './styles';

export default function SchedulerComponent({listProcesses}: {listProcesses: string[][]}) {

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
            {listProcesses.map((process, i) => (
                <Line key={i}>
                    {process.map((status, j) => (
                        console.log("cor", status),
                        <Column key={j} color={defineColor(status)}>
                        </Column>
                    )
                    )}
                </Line>
                ))}
        </Container>
    )
}