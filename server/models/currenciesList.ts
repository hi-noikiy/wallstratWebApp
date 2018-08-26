export class Currency {
  id: string;
  name: string;
  minSize: any;

  constructor( id: string, name: string, size : any) {
     this.id = id;
     this.name = name;
     this.minSize = size; 
  }
  changeName(name: string){
    this.name = name;
  }
};
