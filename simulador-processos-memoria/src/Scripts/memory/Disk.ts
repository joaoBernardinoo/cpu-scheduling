// vai guardar a posição dos processos na RAM (posição da 1ª página)
// endereço do disco corresponde ao PID do processo
class Disk {
  private memory: number[];
  private memorySize: number;
  private pageSize: number;

  constructor(memorySize: number = 400){
    this.memorySize = memorySize;
    this.pageSize = 4;
    this.memory = Array(this.memorySize/this.pageSize).fill(-1);
  }

  addProcess(processId: number, index: number, ){
    // guarda a posição da primeira página de um processo numa posição igual ao PID do processo
    this.memory[processId] = index;
  }

  removeProcess(processId: number){
    this.memory[processId] = -1;
  }

  getMemory(){
    return this.memory;
  }
  
  getRAMindex(processId: number){
    return this.memory[processId];
  }
}

export default Disk;