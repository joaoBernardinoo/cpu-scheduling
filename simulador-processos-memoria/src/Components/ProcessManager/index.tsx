import React from 'react';
import {useState, useEffect} from 'react';

import Process from '@/scripts/process';
import ProcessComponent from '../ProcessComponent';


import {Container, ProcessList} from './styles';

export default function ProcessManager({processList}: { processList: Process[] }) {
    const [cells, setCells] = useState<JSX.Element[]>([]);

    useEffect(() => {
        if (processList.length <= 5 && cells.length < 6-processList.length) {
            for (let i=0; i<6-processList.length; i++){
                setCells([...cells,         
                <div className='container' key={i}>
                    <div className="process line">
                        <div className='color cell'>
                        </div>
                        <div className='pid cell'>
                        </div>
                        <div className='burst cell'>
                        </div>
                        <div className='deadline cell'>
                        </div>
                        <div className='priority cell'>
                        </div>
                        <div className='status cell'>
                        </div>
                    </div>
                </div >]);
                if (cells.length === 6-processList.length) {
                    break;
                }
            }
        }
        console.log(cells)
        if (cells.length > 6 - processList.length) {
            setCells(cells.slice(0, 6-processList.length));

        }
    }, [cells, processList]);
    

    return (
        <Container>
            <div className="process-manager">
                <ProcessList>
                    <div className='line line-primary'>
                        <div className='desc'>
                            <h4>Cor</h4>
                        </div>
                        <div className='desc'>
                            <h4>PID</h4>
                        </div>
                        <div className='desc'>
                            <h4>Tempo</h4>
                        </div>
                        <div className='desc'>
                            <h4>Deadline</h4>
                        </div>
                        <div className='desc'>
                            <h4>Prioridade</h4>
                        </div>
                        <div className='desc'>
                            <h4>Estado</h4>
                        </div>
                    </div>
                    {processList.map((process, index) => (
                        <ProcessComponent key={index} process={process}/>
                    ))}
                    {cells.map((cell)=> cell)}
                    
                </ProcessList>
            </div>
        </Container>
    )


}
