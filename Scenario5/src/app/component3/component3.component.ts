import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }
  event(value){
    this.child.emit(value);
  }
  @Output() public child = new EventEmitter();

  ngOnInit() {
  }

}
