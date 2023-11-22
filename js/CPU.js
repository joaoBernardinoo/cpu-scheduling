const RESET_COLOR = "\x1b[0m"; // Código de escape para redefinir a cor ao padrão
const RED_TEXT = "\x1b[31m"; // Código de escape para texto vermelho

class CPU {
    // Unidade de Processamento Principal
    constructor(criteria) {
        this.process = null;
        this.scheduler = new Scheduler(criteria);
        this.sync = 0;
        this.idle = 0;
        this.overheadTime = 1;
        this.overheadCount = this.overheadTime;
        this.flag = false;
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
        this.scheduler.quantumCount++;
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
        this.idle = 0;
    }

    // Verifica se há sobrecarga
    isOverhead() {
        return this.overheadCount < this.overheadTime;
    }

    // Lida com a sobrecarga
    handleOverhead() {
        if (this.flag && !this.isOverhead()) {
            this.process.color = "yellow";
            this.requestProcess();
            this.flag = false;
        }
    }
    // Lida com o quantum excedido
    handleQuantumExceeded() {
        if (
            (this.scheduler.criteria == "RR" ||
                this.scheduler.criteria == "PRIORITY" ||
                this.scheduler.criteria == "EDF") &&
            this.scheduler.quantumCount == this.scheduler.quantum
        ) {
            this.scheduler.quantumCount = 0;
            this.overheadCount = 0;
            this.flag = true;
            this.process.color = "red";
            this.scheduler.ready.push(this.process);
            console.log("Quantum expired!", this.process.pid);
            this.handleOverhead();
            return true;
        }
    }

    // Envia o processo para a lista de processos finalizados
    completeProcess() {
        this.scheduler.quantumCount = 0;

        console.log("Process finished!");
        this.process.color = "white";
        this.scheduler.finished.push(this.process);
        this.process = null;

        // Aqui falta calcular o Turn Around do Processo
        // Basta subtrair o tempo de chegada do tempo de final de execução ( representado por cpu.sync )
    }

    // Processador entra em execução
    run(stackedBar, process, delay = 1000) {
        const exec = this.process ? this.process.pid : "none";
        console.log(`Starting Process: ${exec} `);
        this.status();
        if (!this.isReady()) {
            this.requestProcess();
            console.log("Requesting process...", this.process.pid);
        }

        // Verifica se há sobrecarga
        if (this.isOverhead()) {
            console.log(RED_TEXT + "Overhead!" + RESET_COLOR);
            this.overheadCount++;
        }

        // Verifica se a sobrecarga acabou
        this.handleOverhead();

        // Decrementa o tempo de execução do processo
        interrupt: if (!this.isFinished()) {
            console.log("Proceed:", this.process.pid);
            if (this.handleQuantumExceeded()) break interrupt;

            console.log("Executing process...");
            this.execute();
        }
        this.status();
        updateChart(stackedBar, process, this.sync);
        // Verifica se o processo acabou
        if (this.process && this.isFinished()) {
            this.completeProcess();
        }
        // Atualiza o estado do processador
    }
}

class Process {
    // Processo com tempo de chegada, tempo de execução, prioridade e deadline
    constructor({
      pid = 0,
      arrival = 0,
      burst = 99,
      color = 'white',
      label = '',
      deadline = 99,
      priority = 0
  
      // falta deadline e prioridade
    }) {
      this.pid = pid;
      this.arrival = arrival;
      this.burst = burst;
      this.color = color;
      this.label = label;
      this.scheduled = false;
      this.deadline = deadline;
      this.priority = priority
    }
  }
  