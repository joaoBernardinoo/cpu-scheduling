export default class Process {
  pid: number;
  arrival: number;
  burst: number;
  color: string;
  status: string;
  scheduled: boolean;
  deadline: number;
  priority: number;
  end?: number;

  // Processo com tempo de chegada, tempo de execução, prioridade e deadline
  constructor({
    pid = 0,
    arrival = 0,
    burst = 99,
    color = 'white',
    deadline = 99,
    priority = 0

    // falta deadline e prioridade
  }) {
    this.pid = pid;
    this.arrival = arrival;
    this.burst = burst;
    this.color = color;
    this.status = "arriving";
    this.scheduled = false;
    this.deadline = deadline;
    this.priority = priority
    this.end = undefined;
  }
}
