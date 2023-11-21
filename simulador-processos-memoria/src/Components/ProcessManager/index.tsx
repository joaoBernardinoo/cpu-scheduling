import React from 'react';

import Scheduler from '@/scripts/scheduler';
import ProcessComponent from '../ProcessComponent';

import {Container, ProcessList} from './styles';

export default function ProcessManager({scheduler}: {scheduler: Scheduler}) {

    return (
        <Container>
            <h1>Process Manager</h1>
            <div className="process-manager">
                <ProcessList>
                    <div className='line'>
                        <div className='cell'>
                            <h4>Color</h4>
                        </div>
                        <div className='cell'>
                            <h4>PID</h4>
                        </div>
                        <div className='cell'>
                            <h4>Burst</h4>
                        </div>
                        <div className='cell'>
                            <h4>Deadline</h4>
                        </div>
                        <div className='cell'>
                            <h4>Priority</h4>
                        </div>
                    </div>
                    {scheduler.ready.map((process, index) => (
                        <ProcessComponent key={index} process={process}/>
                    ))}
                </ProcessList>
            </div>
        </Container>
    )


}
