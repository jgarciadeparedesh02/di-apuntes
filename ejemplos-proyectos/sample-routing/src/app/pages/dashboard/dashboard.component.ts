import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  productos: any[] = [
    { id: 1, nombre: 'Camisa', precio: 1000 },
    { id: 2, nombre: 'Pantalon', precio: 2000 },
    { id: 3, nombre: 'Zapatos', precio: 3000 }
  ];
}
