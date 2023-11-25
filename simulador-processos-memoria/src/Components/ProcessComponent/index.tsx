import React from 'react';

import Process from '@/scripts/process';

import { Container } from './styles';

export default function ProcessComponent({process}: {process: Process}) {

    return (
        <Container>
            <div className="process line">
                <div className='color cell'>
                    <span>{process.color}</span>
                </div>
                <div className='pid cell'>
                    <span>{process.pid}</span>
                </div>
                <div className='burst cell'>
                    <span>{process.burst}</span>
                </div>
                <div className='deadline cell'>
                    <span>{process.deadline}</span>
                </div>
                <div className='priority cell'>
                    <span>{process.priority}</span>
                </div>
                <div className='status cell'>
                    <span>{process.status}</span>
                </div>
            </div>
        </Container>
    )
}