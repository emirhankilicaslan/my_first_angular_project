import {ToDoItem} from './todoItem';

export class Model{
    user: string;
    items: ToDoItem[];

    constructor(){
        this.user = "Emirhan"; //Added for the to-do list that changes depending on the user.
        this.items = [
            {description: "Spor", action: false},
            {description: "Staj", action: true},
            {description: "Halisaha", action: true},
            {description: "Projeyi tamamla", action: false}
        ];
    }
}