import { Component } from '@angular/core';
import { Child } from '../child/child';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [Child,FormsModule],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
parentMessage="this is the parent message";


  messageFromChild = '';

  receiveMessage(event: any) {
    this.messageFromChild = event;
    alert('Message received from child: ' + event);
  }

}
