// RAM é formada por uma array com os números do processos.
// -1 = posição vazia
class RAM {
  private pages: number[];
  private readonly memorySize: number;
  private readonly pageSize: number;
  private algorithm: string;
  private emptyPages: number;

  constructor(algorithm: string = "FIFO"){
    this.memorySize = 200;
    this.pageSize = 4;
    this.algorithm = algorithm;
    this.pages = Array(this.memorySize/this.pageSize).fill(-1);
    this.emptyPages = 50;
  }

  addProcess(numberPages: number, processId: number) {
    const index = this.getFreeIndex(numberPages);

    if(index != -1){
      for (var i = index; i < index + numberPages; i++){
        this.pages[i] = processId;
      }
      // atualiza nº de paginas vazias
      this.emptyPages -= numberPages; 
    }
    // algoritmo de substituição de paginas
    else{

    }
  }

  getFreeIndex(numberPages: number){
    var counter = 0;
    var index = -1;

    // descobrir se os espaços vazios cabem o processo
    for (var i = 0; i < this.memorySize/this.pageSize; i++){
      if (this.pages[i] == -1 ){
        counter += 1;
        if(counter == numberPages){
          index = i - (counter-1);
          return index;
        }
      }
      else{
        counter = 0;
      }
    }

    return index;
  }

  removeProcess(index: number){
    const processId = this.pages[index];

    while(true){
      if(this.pages[index] != processId){
        break;
      }
      this.pages[index] = -1;
      index++;
    }
  }

  getPages() {
    return this.pages;
  }
}


const ram = new RAM();
const pages = ram.getPages();
console.log(pages);