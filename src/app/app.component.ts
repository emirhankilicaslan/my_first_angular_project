import { Component } from '@angular/core';
import { Model } from './model';
@Component({
  selector: 'app', // <app></app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  model = new Model();
  getItems(): string{
    return this.model.items[0].action;
  }
  title: string = "Emirhan";

  //items: any = {description: "spor", action: "false"};
}
