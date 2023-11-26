import React from 'react';

import CPU from '@/scripts/cpu';

import { Container, Section, List, ColorComponent } from './styles';

export default function StatesComponent ({cpu}: {cpu: CPU}){
    return (      
    <Container>
        <Section>
            <h4>Executando</h4>
            <List>
                <ColorComponent color={cpu.process?.color}></ColorComponent>
            </List>
        </Section>
        <Section>
            <h4>Pronto</h4>
            <List>
                {cpu.scheduler.ready.map((process, i) => (
                    <ColorComponent color={process.color} key={i}></ColorComponent>
                    ))}
            </List>
        </Section>
        <Section>        
            <h4>Em espera</h4>
            <List>
                {cpu.scheduler.suspended.map((process, i) => (
                    <ColorComponent color={process.color} key={i}></ColorComponent>
                    ))}
            </List>
        </Section>
    </Container>
    )
}