// parent.component.ts
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage: string = "Mensaje desde el componente padre";
  childMessage: string = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
