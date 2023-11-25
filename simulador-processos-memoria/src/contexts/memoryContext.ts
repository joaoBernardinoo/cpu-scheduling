import React from "react";

interface ContextData {
    RAM: number[];
    Disk: number[];
}

const MemoryContext = React.createContext<ContextData>({
    RAM:[],
    Disk:[]
})

export const MemoryProvider = MemoryContext.Provider;

export default MemoryContext;