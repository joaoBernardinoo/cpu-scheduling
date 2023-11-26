import RAM from "@/scripts/memory/RAM"
import Disk from "@/scripts/memory/Disk";
import React, { useContext } from 'react';
import MemoryContext from "@/contexts/memoryContext";

export default function MemoryComponent(){
    // arrays da memória
    // const { RAM, Disk } = useContext(MemoryContext);
    
    const ram = new RAM();
    ram.addProcess(2, 6);
    ram.addProcess(3, 6);
    ram.addProcess(5, 6);
    const pages = ram.getPages();

    const disk = new Disk();
    disk.addProcess(2, 0);
    disk.addProcess(3, 7);
    disk.addProcess(2, 12);
    const memoryDisk = disk.getMemory();


    

    

    return(
        <div>
            <h2>oiii eu sou a memoria rsrsrs</h2>
            {
                pages.map((pagina: number, index: number) => {
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