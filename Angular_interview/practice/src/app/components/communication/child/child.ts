import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // commmunicationn between parent to child using @Input decorator
  @Input() message!:string;

  // communication between between child -> parent using @Output decorator

  @Output() messegeEvent = new EventEmitter<any>();

  sendMessage(){
    // alert('button clicked in child component');
    this.messegeEvent.emit('Hello Parent Component, this is Child Component');
  }
}
