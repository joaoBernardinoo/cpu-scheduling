import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';
import React, { useContext, useEffect, useState } from 'react';
import { MemoryContainer } from './styles';

export default function MemoryComponent({RAM, Disk}: {RAM: RAM, Disk: Disk}) {
  // arrays da memória
  // const { RAM, Disk } = useContext(MemoryContext);

  

  return (
    <MemoryContainer>
      {RAM.getPages().map((pagina: number, index: number) => {
        return (
          <div key={index} className='ramCell'>
            <p>{index}</p>  
            {/* add processo */}
            <p>PID: {pagina}</p>
          </div>
        );
      })}
      {Disk.getMemory().map((pagina: number, index: number) => {
        return (
          <div key={index} className='diskCell'>
            <p>{index}</p>
            <p>PID: {pagina}</p>
          </div>
        );
      })}
    </MemoryContainer>
  );
}
