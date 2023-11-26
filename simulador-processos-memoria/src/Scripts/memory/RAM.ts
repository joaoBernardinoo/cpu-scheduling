// RAM é formada por uma array com os números do processos.
// -1 = posição vazia
class RAM {
  private pages: number[];
  private FIFOqueue: number[]
  private LRUCounter: Record<number, number>;   // EX: processID: counter;
  private readonly memorySize: number;
  private readonly pageSize: number;
  private algorithm: string;   // deve ser "FIFO" ou "LRU"
  private emptyPages: number;

  constructor(algorithm: string = "FIFO"){
    this.memorySize = 200;
    this.pageSize = 4;
    this.algorithm = algorithm;
    this.pages = Array(this.memorySize/this.pageSize).fill(-1);
    this.emptyPages = 50;
    this.FIFOqueue = []; // contem os ids dos processos em ordem.
    this.LRUCounter = {};
  }


  getPages() {
    return this.pages;
  }


  getEmptyPages(){
    return this.emptyPages;
  }

  getFIFOQueue(){
    return this.FIFOqueue;
  }

  getLRUCounter(){
    return this.LRUCounter;
  }

  // função que simula a requisição/acesso de um processo na memoria
  // o valor do tempo de LRU desse processo deve ser zerado
  getProcessId(index: number){
    const processId = this.pages[index];
    if (processId != undefined){
      this.updateLRU();
      this.LRUCounter[processId] = 0;
      return processId;
    }
    console.log("processo não está na RAM!");
  }


  isProcessInRAM(processId: number){
    for (var i = 0; i < this.memorySize/this.pageSize; i++){
      if (this.pages[i] == processId){
        return true;
      }
    }
    return false;
  }


  addProcess(processId: number, numberPages: number) {
    const index = this.getFreeIndex(numberPages);

    // se não retornou -1, tem espaço
    if(index != -1){
      for (var i = index; i < index + numberPages; i++){
        this.pages[i] = processId;
      }
      // atualiza nº de paginas vazias
      this.emptyPages -= numberPages; 

       // atualiza fila do FIFO e os contadores do LRU
      this.FIFOqueue.push(processId);
      this.updateLRU();
      this.LRUCounter[processId] = 0;
    }
    // se não tem espaço, algoritmo de substituição de paginas
    else{
      this.handlePageFault(processId, numberPages);
    }
  }

  
  getFreeIndex(numberPages: number){
    var counter = 0;
    var index = -1;

    // descobrir se os espaços vazios cabem o processo
    for (var i = 0; i < this.memorySize/this.pageSize; i++){
      if (this.pages[i] == -1 ){
        counter += 1;
        // tem o espaço e retorna o index para começar a alocar as páginas
        if(counter == numberPages){
          index = i - (counter-1);
          return index;
        }
      }
      // se tem processo alocado não conta
      else{
        counter = 0;
      }
    }

    // se não achou espaço então retorna -1
    return index;
  }


  removeProcess(processId: number){
    let index = 0;
    for (var i = 0; i < this.memorySize/this.pageSize; i++){
      if (this.pages[i] == processId){
        index = i;
        break;
      }
    }

    // remove das filas de FIFO e LRU
    delete this.LRUCounter[processId];

    const indexFIFO = this.FIFOqueue.indexOf(processId);
    if(indexFIFO != -1){
      this.FIFOqueue.splice(indexFIFO, 1);
    }

    // remove da RAM
    while (true){
      // quando acessar outro processo ou acabar a memória, para de remover
      if(this.pages[index] != processId || index == this.memorySize/this.pageSize){
        break;
      }
      this.pages[index] = -1;
      this.emptyPages++;
      index++;
    }
    console.log("testao ", this.pages)
  }


  // algoritmos de substituição de paginas
  handlePageFault(newProcessID: number, newNumberPages: number){
    switch(this.algorithm){
      case "FIFO":
        while(true){
          this.removeProcess(this.FIFOqueue[0]); 
          
          console.log("teste2 ", this.getFreeIndex(newNumberPages));
          // se tiver espaço suficiente, adiciona. Se não, continua o loop
          if(this.getFreeIndex(newNumberPages) != -1){
            this.addProcess(newProcessID, newNumberPages);
            return;
          }
        }
        
      case "LRU":
        while(true){
          const oldestId = this.getOldestProcess();
          if(oldestId != undefined){
            this.removeProcess(oldestId); 

            if(this.getFreeIndex(newNumberPages) != -1){
              this.addProcess(newProcessID, newNumberPages);
              return;
            }
          }
        }
    }
  }


  // pega o processo mais 
  getOldestProcess(){
    let max = -1;
    let oldestId: number | undefined = undefined;
    
    for(const processID in this.LRUCounter){
      if (this.LRUCounter[processID] > max){
        max = this.LRUCounter[processID];
        oldestId = parseInt(processID);
      }
    }
    
    return oldestId;
  }

  // adiciona +1 de tempo a todos os processos na fila de LRU
  updateLRU(){
    for(const processID in this.LRUCounter){
      this.LRUCounter[processID]++;
    }
  }
}

export default RAM;