class Scheduler {
    constructor(criteria = "EDF") {
        this.criteria = criteria;
        // Sobrecarga e Quantum
        this.quantum = 2;
        // Contadores dos processos
        this.quantumCount = 0;
        // Filas dos processos
        this.ready = [];
        this.suspended = [];
        this.finished = [];
    }

    // Mostra o estado atual do escalonador
    status(sync) {
        console.log(`Ready Queue: ${this.ready.map((p) => p.pid)} quantum: ${this.quantumCount}  t${sync}`);
    }

    // Adiciona o processo da fila de prontos
    addProcess(process) {
        // Azul é espera
        this.ready.push(process);
    }

    // Retira o processo da fila de prontos
    // de acordo com a política de escalonamento
    fetchProcess() {
        let process = null;

        switch (this.criteria) {
            case "FCFS":
                process = this.ready.shift();
                break;
            case "SJF":
                process = this.ready
                    .sort((a, b) => a.burst - b.burst)
                    .shift();
                break;
            case "RR":
                process = this.ready.shift();
                break;
            case "PRIORITY":
                process = this.ready
                    .sort((a, b) => b.priority - a.priority)
                    .shift();
                break;
            case "EDF":
                process = this.ready
                    .sort((a, b) => b.deadline - a.deadline)
                    .shift();
                break;
        }
        
        if (process) {process.color = "aqua"; process.count++;};

        return process;
    }
    
}
