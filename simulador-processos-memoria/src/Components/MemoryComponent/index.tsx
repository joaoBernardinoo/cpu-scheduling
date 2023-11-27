import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';
import React, { useContext, useEffect, useState } from 'react';
import MemoryContext from '@/contexts/memoryContext';

export default function MemoryComponent(){
    //  memória
    const { RAM, Disk } = useContext(MemoryContext);
    const [memoryRAM, setMemoryRAM] = useState<number[]>([]);
    const [memoryDisk, setMemoryDisk] = useState<number[]>([]);

    // useEffect(() => {
    //     setMemoryRAM(RAM.getPages());
    //     setMemoryDisk(Disk.getMemory());
    //     console.log(RAM.getPages());
    // }, [])

    
    return(
        <div>
            <h2>oiii eu sou a memoria rsrsrs</h2>
            {RAM.getPages().map((pagina: number, index: number) => {
                    return(
                        <div key={index}>
                            <p>índice: {index}</p>
                            <p>ID: {pagina}</p>
                        </div>
                    )
                })   
            }
            {Disk.getMemory().map((pagina: number, index: number) => {
                return(
                    <div key={index}>
                        <p>índice: {index}</p>
                        <p>ID: {pagina}</p>
                    </div>
                )
            })
            }
        </div>
    )
}
