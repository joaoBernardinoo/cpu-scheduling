import Process from './process';
import Scheduler from './scheduler';

export default class CPU {
  process?: Process;
  arriving: Process[];
  scheduler: Scheduler;
  sync: number;
  clock: number;
  idle: 0;
  overheadTime: number;
  overheadCount: number;
  flag: boolean;


  // Unidade de Processamento Principal
  constructor(criteria = "FCFS", clock = 1) {
    this.process = undefined;
    this.arriving = [];
    this.scheduler = new Scheduler(criteria);
    this.sync = 0;
    this.clock = clock;
    this.idle = 0;
    this.overheadTime = 1;
    this.overheadCount = this.overheadTime;
    this.flag = false;
  }

  setClock(clock: number) {
    this.clock = clock;
  }

  setCriteria(criteria: string) {
    this.scheduler.criteria = criteria;
  }

  addProcess(process: Process) {
    this.arriving.push(process);
    this.arriving.sort((a, b) => a.arrival - b.arrival);
  }

  reset() {
    this.process = undefined;
    this.arriving = [];
    this.scheduler = new Scheduler("FCFS");
    this.sync = 0;
    this.idle = 0;
    this.overheadCount = this.overheadTime;
    this.flag = false;
  }

  // Mostra o estado atual do processador
  status() {
    console.log(`time ${this.sync} ---------------------------------------------`);
    const execProcessPID = this.process ? this.process.pid : 'idle';
    const execProcess = this.process ? this.process.burst : 'idle';
    console.log(`Processing... ${execProcessPID} Burst: ${execProcess}`);
    this.scheduler.status();
  }

  // Executa o processo
  private execute() {
    this.process!.burst--;
    this.scheduler.quantumCount++;
  }

  // Verifica se o processo acabou
  private isFinished() {
    return this.process!.burst == 0;
  }

  // Verifica se o processo chegou
  private arrived() {
    return this.process!.arrival == 0;
  }

  // Verifica se o processo está pronto para ser executado
  private isReady() {
    return this.process != null;
  }

  // Requisita o processo ao escalonador
  private requestProcess() {
    this.process = this.scheduler.fetchProcess();
    this.idle = 0;
  }

  // Verifica se há sobrecarga
  private isOverhead() {
    return this.overheadCount < this.overheadTime;
  }

  private handleArriving() {
    while (this.arriving.length > 0 && this.arriving[0].arrival == this.sync) {
      this.scheduler.addProcess(this.arriving.shift()!);

    }
  }

  // Lida com a sobrecarga
  private handleOverhead() {
    if (this.flag && !this.isOverhead()) {
      this.process!.status = 'ready';
      this.scheduler.ready.push(this.process!);
      this.requestProcess();
      this.flag = false;
    }
  }
  // Lida com o quantum excedido
  private handleQuantumExceeded() {
    if (
      (this.scheduler.criteria == 'RR' ||
        this.scheduler.criteria == 'PRIORITY' ||
        this.scheduler.criteria == 'EDF') &&
      this.scheduler.quantumCount == this.scheduler.quantum
    ) {
      this.scheduler.quantumCount = 0;
      this.overheadCount = 0;
      this.flag = true;
      this.process!.status = 'overhead';
      console.log('Quantum expired!', this.process!.pid);
      this.handleOverhead();
      return true;
    }
  }

  // Envia o processo para a lista de processos finalizados
  private completeProcess() {
    this.scheduler.quantumCount = 0;

    console.log('Process finished!');
    this.process!.status = 'finished';
    this.scheduler.finished.push(this.process!);
    this.requestProcess();
    // Aqui falta calcular o Turn Around do Processo
    // Basta subtrair o tempo de chegada do tempo de final de execução ( representado por cpu.sync )
  }

  getStates() {
    const tasks = [
      ...this.arriving,
      ...this.scheduler.ready,
      ...this.scheduler.suspended,
      ...this.scheduler.finished,
      ...(this.process ? [this.process] : []),
    ];

    return tasks.sort((a, b) => a?.pid - b?.pid).map((process) => process?.status);
  }

  run() {
    const exec = this.process ? this.process.pid : 'none';
    console.log(`Starting Process: ${exec} `);
    this.status();
    // Verifica se há processos chegando
    this.handleArriving();
    if (!this.isReady()) {
      this.requestProcess();
      if (!this.process) return console.log('No process to execute!');
      console.log('Requesting process...', this.process!.pid);
    }

    // Verifica se há sobrecarga
    if (this.isOverhead()) {
      this.overheadCount++;
    }

    // Verifica se a sobrecarga acabou
    this.handleOverhead();

    // Decrementa o tempo de execução do processo
    interrupt: if (!this.isFinished()) {
      console.log('Proceed:', this.process!.pid);
      if (this.handleQuantumExceeded()){ 
        break interrupt;
      }

      console.log('Executing process...');
      this.execute();
    }
    this.status();
    // Verifica se o processo acabou
    if (this.process && this.isFinished()) {
      this.completeProcess();
    }
    this.sync++;

    return;
  }
}
