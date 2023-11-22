import RAM from "@/Scripts/memory/RAM"
import Disk from "@/Scripts/memory/Disk";

export default function MemoryComponent(){
    const ram = new RAM();
    const pages = ram.getPages();
    ram.addProcess(5, 3);
    ram.addProcess(2, 8);

    console.log("RAM: ", pages);

    const disk = new Disk();
    const memoryDisk = disk.getMemory();
    disk.addProcess(5, 0);
    disk.addProcess(2, 3);

    console.log("disco: ", memoryDisk);
    return(
        <div>
            <h2>oiii eu sou a memoria rsrsrs</h2>
        </div>
    )
}