class Scheduler {
    constructor(criteria = "FCFS") {
        this.ready = [];
        this.criteria = criteria;
        this.suspended = [];
        this.blocked = [];
        this.finished = [];
        this.quantum = [];
    }

    // retira o processo da fila de prontos
    addProcess(process) {
        this.ready.push(process);
    }

    fetchProcess() {
        const process = null;

        switch(this.criteria) {
            case "FCFS":
                process = this.processes.shift();
                break;
            case "SJF":
                process = this.processes.sort((a, b) => a.duration - b.duration).shift();
                break;
            case "RR":
                process = this.processes.shift();
                break;
            case "PRIORITY":
                process = this.processes.sort((a, b) => b.priority - a.priority).shift();
                break;
            case "EDF":
                process = this.processes.sort((a, b) => a.deadline - b.deadline).shift();
                break;
        };

        return process;
    }
}