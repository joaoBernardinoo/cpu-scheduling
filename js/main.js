const process = [
    new Process({
        pid: "11111",
        arrival: 0,
        burst: 8,
        deadline: 35,
        label: "A",
    }),
    new Process({
        pid: "22222",
        arrival: 4,
        burst: 4,
        deadline: 15,
        label: "B",
    }),
    new Process({
        pid: "33333",
        arrival: 8,
        burst: 2,
        deadline: 20,
        label: "C",
    }),
    new Process({
        pid: "44444",
        arrival: 12,
        burst: 7,
        deadline: 25,
        label: "D",
    }),
];

let pointer = 0;

function update(stackedBar, process, cpu, delay = 1000) {
    // Verifica se o processo chegou e adiciona na fila de prontos
    for (const p of process) {
        if (p.arrival == cpu.sync) {
            console.log(`Process ${p.pid} arrived!`);
            p.color = "yellow";
            p.scheduled = true;
            cpu.scheduler.addProcess(p);
        }
    }
    cpu.run(stackedBar, process);
    cpu.sync++;
    if (!cpu.process) cpu.idle++;
    if (cpu.scheduler.finished.length == process.length) {
        console.log("All processes finished!");
        return;
    }
    setTimeout(() => update(stackedBar, process, cpu, delay), delay);
}

const processList = [];
const cpus = [new CPU("FCFS"), new CPU("RR"), new CPU("SJF"), new CPU("EDF")];

for (let i = 0; i < 4; i++) {
    processList.push(JSON.parse(JSON.stringify(process)));
    update(stackedBars[i], processList[i], cpus[i])
}