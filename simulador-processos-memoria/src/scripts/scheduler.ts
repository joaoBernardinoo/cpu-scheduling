import Process from './process';

export default class Scheduler {
  criteria: string;
  quantum: number;
  quantumCount: number;
  ready: Process[];
  finished: Process[];
  suspended: Process[];

  constructor(criteria: string) {
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
  status() {
    console.log(`Ready Queue: ${this.ready.map((p) => p.pid)} quantum: ${this.quantumCount}`);
  }

  // Adiciona o processo da fila de prontos
  addProcess(process: Process) {
    process.status = 'ready';
    this.ready.push(process);
    switch (this.criteria) {
      case 'SJF':
        this.ready.sort((a, b) => a.burst - b.burst);
        break;
      case 'PRIORITY':
        this.ready.sort((a, b) => b.priority - a.priority);
        break;
      case 'EDF':
        this.ready.sort((a, b) => a.deadline - b.deadline);
        break;
    }
  }
/*
  static calculateAverageTurnaroundTime(processes: Process[]) {
    let sum = 0;
    processes.forEach((process) => {
      if (!process.end) return console.warn("") sum += process.end - process.arrival;
    });
    return sum / processes.length;
  }
*/
  // Retira o processo da fila de prontos
  // de acordo com a política de escalonamento
  fetchProcess() {
    let process = undefined;

    switch (this.criteria) {
      case 'FCFS':
        process = this.ready.shift();
        break;
      case 'SJF':
        process = this.ready.sort((a, b) => a.burst - b.burst).shift();
        break;
      case 'RR':
        process = this.ready.shift();
        break;
      case 'PRIORITY':
        process = this.ready.sort((a, b) => b.priority - a.priority).shift();
        break;
      case 'EDF':
        process = this.ready.sort((a, b) => a.deadline - b.deadline).shift();
        break;
    }

    if (process) {
      process.status = 'running';
    }
    return process;
  }
}
