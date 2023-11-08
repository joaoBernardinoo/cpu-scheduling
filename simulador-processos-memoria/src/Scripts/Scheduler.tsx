interface Process {
    pid: number;
    arrival: number;
    burst: number;
    priority: number;
    deadline: number;
    color?: string;
}

class Scheduler {
    private criteria: string;
    private quantum: number;
    private quantumCount: number;
    private ready: Process[];
    private suspended: Process[];
    private finished: Process[];

    constructor(criteria: string = "EDF") {
        this.criteria = criteria;
        this.quantum = 2;
        this.quantumCount = 0;
        this.ready = [];
        this.suspended = [];
        this.finished = [];
    }

    // Mostra o estado atual do escalonador
    public status(sync: number): void {
        console.log(`Ready Queue: ${this.ready.map((p) => p.pid)} quantum: ${this.quantumCount}  t${sync}`);
    }

    // Adiciona o processo na fila de prontos
    public addProcess(process: Process): void {
        // Azul é espera
        this.ready.push(process);
    }

    // Retira o processo da fila de prontos
    // de acordo com a política de escalonamento
    public fetchProcess(): Process | null {
        let process: Process | null = null;

        switch (this.criteria) {
            case "FCFS":
                process = this.ready.shift() || null;
                break;
            case "SJF":
                process = this.ready
                    .sort((a, b) => a.burst - b.burst)
                    .shift() || null;
                break;
            case "RR":
                process = this.ready.shift() || null;
                break;
            case "PRIORITY":
                process = this.ready
                    .sort((a, b) => b.priority - a.priority)
                    .shift() || null;
                break;
            case "EDF":
                process = this.ready
                    .sort((a, b) => b.deadline - a.deadline)
                    .shift() || null;
                break;
        }

        if (process) {
            process.color = "aqua";
        }

        return process;
    }
}

export default Scheduler;
