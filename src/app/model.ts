export class Model{
    user: string;
    items: any;

    constructor(){
        this.user = "Emirhan";
        this.items = [
            new ToDoItem("Spor", false),
            new ToDoItem("Spor", false),
            new ToDoItem("Spor", false),
        ];
    }
  public getName():string{
    return this.user;
  }
  
}

export class ToDoItem{
    description: string;
    action: boolean;    

    constructor(description:string, action:boolean){
        this.description = description;
        this.action = action;
    }
}