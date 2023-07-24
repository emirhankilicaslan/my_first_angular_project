import { Component } from '@angular/core';
import { Model } from './model';
import {ToDoItem} from './todoItem';

@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputText : string = "";
  displayAll: boolean = false;

  model = new Model();

  getItems(): any{
    if(this.displayAll){
      return this.model.items;
    }else{
      return this.model.items.filter(item => !item.action);
    }
  }

  getName() : string{
    return this.model.user;
  }

  addItem(){
    if(this.inputText != ""){
      let data = {description: this.inputText, action: false};
      this.model.items.push(data);
      this.inputText = "";
    }else{
      alert("Bilgi giriniz !");
    }
  }

  displayCount(){
    return this.model.items.filter(i => i.action).length;
  }

  getBtnClasses(){
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0
    }
  }
}
