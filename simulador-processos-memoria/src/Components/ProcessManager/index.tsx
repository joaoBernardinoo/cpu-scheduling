import React from 'react';

import Process from '@/scripts/process';
import ProcessComponent from '../ProcessComponent';

import {Container, ProcessList} from './styles';

export default function ProcessManager({processList}: { processList: Process[] }) {

    return (
        <Container>
            <h1>Process Manager</h1>
            <div className="process-manager">
                <ProcessList>
                    <div className='line'>
                        <div className='cell'>
                            <h4>Cor</h4>
                        </div>
                        <div className='cell'>
                            <h4>PID</h4>
                        </div>
                        <div className='cell'>
                            <h4>Tempo</h4>
                        </div>
                        <div className='cell'>
                            <h4>Deadline</h4>
                        </div>
                        <div className='cell'>
                            <h4>Prioridade</h4>
                        </div>
                        <div className='cell'>
                            <h4>Estado</h4>
                        </div>
                    </div>
                    {processList.map((process, index) => (
                        <ProcessComponent key={index} process={process}/>
                    ))}
                </ProcessList>
            </div>
        </Container>
    )


}
