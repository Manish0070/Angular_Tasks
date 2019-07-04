import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
            <input [(ngModel)]="name" type="text" />
            {{name}}
          `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public name = '';
  constructor() { }
  ngOnInit() {
  }

}
