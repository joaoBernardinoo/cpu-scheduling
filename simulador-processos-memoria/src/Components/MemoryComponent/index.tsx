import RAM from "@/scripts/memory/RAM"
import Disk from "@/scripts/memory/Disk";
import React, { useContext } from 'react';
import MemoryContext from "@/contexts/memoryContext";

export default function MemoryComponent(){
    //  memória
    const { RAM, Disk } = useContext(MemoryContext);
    
    const memoryRAM = RAM.getPages();

    const memoryDisk = Disk.getMemory();


    

    

    return(
        <div>
            <h2>oiii eu sou a memoria rsrsrs</h2>
            {
                memoryRAM.map((pagina: number, index: number) => {
                    return(
                        <div key={index}>
                            <p>índice: {index}</p>
                            <p>ID: {pagina}</p>
                        </div>
                    )
                })
                
            }
            {
                memoryDisk.map((pagina: number, index: number) => {
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