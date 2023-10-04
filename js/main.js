const process = [
    new Process({ pid: "11111", arrival: 0, burst: 4, label: "A" }),
    // new Process({ pid: "22222", arrival: 2, burst: 2, label: "B" }),
    // new Process({ pid: "33333", arrival: 4, burst: 1, label: "C" }),
    // new Process({ pid: "44444", arrival: 6, burst: 3, label: "D" }),
];

const cpu = new CPU();
let pointer = 0;

function update(delay = 10) {
    // Verifica se o processo chegou e adiciona na fila de prontos
    if (process.length > pointer && process[pointer].arrival == cpu.sync) {
        const alocProcess = process[pointer];
        console.log(`Process ${alocProcess.pid} arrived!`);
        cpu.scheduler.addProcess(alocProcess);
        pointer++;
    }
    cpu.run();
    updateChart(process, cpu.sync);
    cpu.sync++;
    if (cpu.process == null && cpu.scheduler.ready.length == 0) {
        console.log("All processes finished!");
        return;
    }
    setTimeout(() => update(delay), delay);
}

update();
