import React from "react";
import RAM from '@/scripts/memory/RAM';
import Disk from '@/scripts/memory/Disk';

interface ContextData {
    RAM: RAM;
    Disk: Disk;
}

const MemoryContext = React.createContext<ContextData>({
    RAM: new RAM,
    Disk: new Disk,
})

export const MemoryProvider = MemoryContext.Provider;

export default MemoryContext;