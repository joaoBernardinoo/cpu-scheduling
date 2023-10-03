class CPU {
    // Unidade de Processamento Principal
    constructor() {
        this.process = null;
        this.scheduler = new Scheduler();
    }

    status() {
        console.log(`Processing...${this.process}`);
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

    // Processador entra em execução
    run(delay = 1000) {
        if (this.isReady()) {
            this.execute();
            if (this.isFinished()) {
                this.process = null;
            }
        } else {
            if (this.arrived()) {
                this.requestProcess();
            }
        }
        setTimeout(() => this.run(), delay);
    }

}

class Process {
    // Processo com tempo de chegada, tempo de execução, prioridade e deadline
    constructor({ pid = "000001", arrival = 0, burst = 99, color = "white", label = ""}) {
        this.pid = pid;
        this.arrival = arrival;
        this.burst = burst;
        this.color = color;
        this.label = label;
    }
}
