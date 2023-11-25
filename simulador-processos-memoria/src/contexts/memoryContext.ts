import React from "react";

interface ContextData {
    RAM: number[];
    Disk: number[];
    updateMemory: (ramPages: number[], diskPages: number[]) => void;
}

const MemoryContext = React.createContext<ContextData>({
    RAM:[],
    Disk:[],
    updateMemory: (ramPages: number[], diskPages: number[]) => null
})

export const MemoryProvider = MemoryContext.Provider;

export default MemoryContext;