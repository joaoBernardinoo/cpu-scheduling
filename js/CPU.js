class CPU {
    // Unidade de Processamento Principal
    constructor() {
        this.process = null;
        this.scheduler = new Scheduler();
        this.sync = 0;
    }

    // Mostra o estado atual do processador
    status() {
        const execProcessPID = this.process ? this.process.pid : "idle";
        const execProcess = this.process ? this.process.burst : "idle";
        console.log(
            `Processing... ${execProcessPID} Burst: ${execProcess} t${this.sync}`
        );
        this.scheduler.status(this.sync);
        console.log("--------------------------------------------------");
    }

    // Executa o processo
    execute() {
        this.process.burst--;
    }

    // Verifica se o processo acabou
    isFinished() {
        return this.process.burst == 0;
    }

    // Verifica se o processo chegou
    arrived() {
        return this.process.arrival == 0;
    }

    // Verifica se o processo está pronto para ser executado
    isReady() {
        return this.process != null;
    }

    // Requisita o processo ao escalonador
    requestProcess() {
        this.process = this.scheduler.fetchProcess();
    }

    // Lida com a sobrecarga do processador
    overload() {
        if (this.scheduler.criteria in ["RR", "EDF"] && this.isOverloading()) {
            this.process.color = "red";
            return true;
        }
    }

    // Envia o processo para a lista de processos finalizados
    completeProcess() {
        // Marca vermelho onde está havendo sobrecarga
        if (this.overload()) return;
        console.log("Process finished!");
        // Caso contrário marca o processo como finalizado
        this.process.color = "white";
        this.scheduler.finished.push(this.process);
        this.process = null;
    }

    // Verifica se está havendo sobrecarga
    isOverloading() {
        return this.scheduler.isOverloading();
    }

    // Verifica se atingiu o quantum
    hasReachedQuantum() {
        return this.scheduler.quantumCounter >= this.scheduler.quantum == 0;
    }

    handleQuantumOverflow() {
        if (this.hasReachedQuantum()) {
            if (this.overload()) return;
            this.scheduler.quantumCounter = 0;
            this.scheduler.ready.push(this.process);
            this.process = null;
            this.requestProcess();
        }
        this.scheduler.quantumCounter++;
    }

    // Processador entra em execução
    run(delay = 1000) {
        if (!this.isReady()) {
            this.requestProcess();
            return;
        }

        // Decrementa o tempo de execução do processo
        if (!this.isFinished()) {
            this.execute();
        }
        
        // Verifica se o processo acabou
        if (this.isFinished()) {
            this.completeProcess();
            this.requestProcess();
        }

        // Atualiza o estado do processador
        this.status();
    }
}

class Process {
    // Processo com tempo de chegada, tempo de execução, prioridade e deadline
    constructor({
        pid = "00000",
        arrival = 0,
        burst = 99,
        color = "white",
        label = "",
        // falta deadline e prioridade
    }) {
        this.pid = pid;
        this.arrival = arrival;
        this.burst = burst;
        this.color = color;
        this.label = label;
    }
}
