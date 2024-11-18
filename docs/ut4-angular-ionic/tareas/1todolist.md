# Práctica Guiada: Crear una Lista de Tareas con Ionic y Angular

Esta práctica te guiará paso a paso para crear una aplicación con Ionic y Angular que permita gestionar una lista de tareas. Sigue los pasos y al final tendrás una aplicación funcional que puedes ampliar y personalizar.

---

#### **1. Preparación del entorno**

1. **Instalar Ionic CLI**:  
   Asegúrate de tener instalado **Node.js**. Luego, instala Ionic CLI globalmente:  
   ```bash
   npm install -g @ionic/cli
   ```

2. **Crear un proyecto con la plantilla "blank"**:  
   Genera un nuevo proyecto Ionic. Usaremos la plantilla en blanco:  
   ```bash
   ionic start TodoApp blank --type=angular
   ```

3. **Accede al directorio del proyecto**:  
   Cambia al directorio del proyecto creado:  
   ```bash
   cd TodoApp
   ```

---

#### **2. Crear la página `tasks`**

1. Genera una página para la lista de tareas:  
   ```bash
   ionic generate page tasks
   ```

   Esto creará automáticamente los archivos necesarios en la carpeta `src/app/tasks`.

---

#### **3. Configurar la navegación inicial**

1. Abre el archivo `src/app/app-routing.module.ts` y establece la página `tasks` como la página inicial. Actualiza el contenido del archivo así:  

   ```typescript
   import { NgModule } from '@angular/core';
   import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

   const routes: Routes = [
     { path: '', redirectTo: 'tasks', pathMatch: 'full' },
     { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksPageModule) },
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
     exports: [RouterModule]
   })
   export class AppRoutingModule {}
   ```

---

#### **4. Diseñar la interfaz de usuario**

1. Abre el archivo `src/app/tasks/tasks.page.html`.  
   Sustituye el contenido existente por el siguiente código:  

   ```html
   <ion-header>
     <ion-toolbar>
       <ion-title>Lista de Tareas</ion-title>
     </ion-toolbar>
   </ion-header>

   <ion-content>
     <ion-list>
       <ion-item *ngFor="let task of tasks">{{ task }}</ion-item>
     </ion-list>

     <ion-item>
       <ion-input [(ngModel)]="newTask" placeholder="Nueva tarea"></ion-input>
     </ion-item>

     <ion-button expand="full" (click)="addTask()">Agregar Tarea</ion-button>
   </ion-content>
   ```

---

#### **5. Implementar la lógica**

1. Abre el archivo `src/app/tasks/tasks.page.ts`.  
   Sustituye el contenido existente por el siguiente código:  

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-tasks',
     templateUrl: './tasks.page.html',
     styleUrls: ['./tasks.page.scss'],
   })
   export class TasksPage {
     tasks: string[] = []; // Lista de tareas
     newTask: string = ''; // Nueva tarea a agregar

     constructor() {}

     addTask() {
       if (this.newTask.trim().length > 0) {
         this.tasks.push(this.newTask.trim());
         this.newTask = ''; // Limpia el campo de entrada
       }
     }
   }
   ```

---

#### **6. Habilitar el uso de `ngModel`**

1. Abre `src/app/tasks/tasks.module.ts`.  
   Asegúrate de importar el módulo `FormsModule` y agregarlo en los módulos de importación:  

   ```typescript
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { FormsModule } from '@angular/forms';
   import { IonicModule } from '@ionic/angular';

   import { TasksPageRoutingModule } from './tasks-routing.module';
   import { TasksPage } from './tasks.page';

   @NgModule({
     imports: [
       CommonModule,
       FormsModule,
       IonicModule,
       TasksPageRoutingModule
     ],
     declarations: [TasksPage]
   })
   export class TasksPageModule {}
   ```

---

#### **7. Probar la aplicación**

1. **Ejecuta la aplicación**:  
   Ejecuta el servidor de desarrollo:  
   ```bash
   ionic serve
   ```

2. Abre la aplicación en tu navegador (normalmente en [http://localhost:8100](http://localhost:8100)).

---

#### **Funcionalidad esperada**

- Una interfaz que muestra una lista vacía de tareas al inicio.
- Un campo de entrada para escribir una nueva tarea.
- Un botón para agregar la tarea. Al hacer clic, la tarea aparecerá en la lista.

---

#### **Reto adicional (opcional)**

- Añade la posibilidad de eliminar tareas.
- Guarda la lista de tareas en el almacenamiento local del navegador utilizando `localStorage`.

Con esta guía, tendrás una base sólida para trabajar con Ionic y Angular. 🚀