import RAM from "@/Scripts/memory/RAM"
import Disk from "@/Scripts/memory/Disk";

export default function MemoryComponent(){
    const ram = new RAM("LRU");
    const pages = ram.getPages();

    const disk = new Disk();
    const memoryDisk = disk.getMemory();

    return(
        <div>
            <h2>oiii eu sou a memoria rsrsrs</h2>
        </div>
    )
}