class Scheduler {
    constructor(criteria = "RR") {
        this.criteria = criteria;
        // Sobrecarga e Quantum
        this.overload = 1; // o usuário deve alterar se quiser
        this.quantum = 2;
        // Contadores dos processos
        this.overloadCount = 0;
        this.quantumCounter = 0;
        // Filas dos processos
        this.ready = [];
        this.suspended = [];
        this.finished = [];
    }

    // Mostra o estado atual do escalonador
    status(sync) {
        console.log(`Scheduler: ${this.ready.map((p) => p.pid)}   t${sync}`);
    }

    // Adiciona o processo da fila de prontos
    addProcess(process) {
        // Azul é espera
        process.color = "yellow";
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
                    .sort((a, b) => a.duration - b.duration)
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
                    .sort((a, b) => a.deadline - b.deadline)
                    .shift();
                break;
        }

        if (process) process.color = "aqua";

        return process;
    }
    
    // Lida com a sobrecarga do escalonador
    isOverloading() {
        if (this.overloadCount == this.overload) {
            this.overloadCount = 0;
            console.log("CPU Overload ");
            return false;
        }
        this.overloadCount++;
        return true;
    }
}
