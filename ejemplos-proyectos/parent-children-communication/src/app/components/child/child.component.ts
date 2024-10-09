import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // Input para recibir la lista de tareas desde el componente padre
  @Input() taskList: { id: number, title: string, completed: boolean }[] = [];

  // Output para emitir el ID de la tarea completada al padre
  @Output() taskCompleted: EventEmitter<number> = new EventEmitter<number>();

  // Método para marcar una tarea como completada y emitir el evento
  completeTask(taskId: number) {
    this.taskCompleted.emit(taskId);
  }
}
