# Consumo de APIs y Manejo de HTTP en Angular 18 🌐

El consumo de **APIs** es una parte esencial de cualquier aplicación web moderna, ya que permite interactuar con servicios externos para obtener y enviar datos. Angular 18 facilita este proceso con el poderoso **HttpClient**, que permite hacer peticiones HTTP de manera eficiente y segura. En este artículo, aprenderás cómo realizar peticiones HTTP, manejar errores y usar interceptores para optimizar tus aplicaciones. ¡Comencemos! 🚀

---

## Realizar Peticiones GET, POST, PUT y DELETE 🛠️

Angular proporciona métodos claros y sencillos para realizar peticiones HTTP utilizando el servicio **HttpClient**.

### 1. Realizar una petición GET:

```typescript
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mi-componente",
  template: `<ul>
    <li *ngFor="let item of items">{{ item.name }}</li>
  </ul>`,
})
export class MiComponente implements OnInit {
  items: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>("https://api.example.com/items").subscribe((data) => {
      this.items = data;
    });
  }
}
```

🔍 **Explicación**: Usamos el método `get()` para obtener una lista de elementos desde una API. Angular gestiona automáticamente la conversión de la respuesta a un array de objetos.

### 2. Realizar una petición POST:

```typescript
this.http
  .post("https://api.example.com/items", { name: "Nuevo Item" })
  .subscribe((response) => {
    console.log("Item creado:", response);
  });
```

🔍 **Explicación**: Con el método `post()`, enviamos un nuevo item a la API. Es ideal para enviar datos o crear nuevos recursos en el servidor.

### 3. Realizar una petición PUT (actualización):

```typescript
this.http
  .put("https://api.example.com/items/1", { name: "Item Actualizado" })
  .subscribe((response) => {
    console.log("Item actualizado:", response);
  });
```

🔍 **Explicación**: El método `put()` se utiliza para actualizar un recurso existente. Aquí estamos actualizando el item con el ID 1.

### 4. Realizar una petición DELETE:

```typescript
this.http.delete("https://api.example.com/items/1").subscribe((response) => {
  console.log("Item eliminado:", response);
});
```

🔍 **Explicación**: `delete()` elimina un recurso de la API. En este caso, estamos eliminando el item con el ID 1.

---

## Manejo de Errores en Peticiones HTTP ⚠️

El manejo adecuado de errores es crucial para garantizar que tu aplicación se comporte correctamente, incluso cuando las peticiones fallan. Angular ofrece el operador `catchError()` de **RxJS** para gestionar los errores en las peticiones HTTP.

### Ejemplo de manejo de errores:

```typescript
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

this.http
  .get("https://api.example.com/items")
  .pipe(
    catchError((error) => {
      console.error("Error en la petición:", error);
      return throwError(
        () => new Error("Algo salió mal; por favor intenta más tarde.")
      );
    })
  )
  .subscribe(
    (data) => console.log(data),
    (error) => console.error("Error de suscripción:", error)
  );
```

🔍 **Explicación**: Usamos `catchError()` para interceptar cualquier error que ocurra en la petición y manejarlo adecuadamente. En este caso, simplemente estamos imprimiendo el error en la consola y lanzando un mensaje de error personalizado.

💡 **Tip**: Siempre es una buena práctica proporcionar mensajes de error claros al usuario final cuando algo sale mal.

---

## Interceptores HTTP: Manipula las Peticiones y Respuestas 🚦

Los **interceptores HTTP** en Angular te permiten interceptar cada petición y respuesta para modificarlas, agregar encabezados, manejar autenticación, y más. Esto es muy útil, por ejemplo, para agregar tokens de autenticación a todas las peticiones automáticamente.

### Crear un interceptor:

```typescript
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = "mi-token-de-autenticacion";

    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(authReq);
  }
}
```

🔍 **Explicación**: Este interceptor toma cada petición HTTP, clona la solicitud original, y le añade un encabezado de autorización con un token.

### Registrar el interceptor:

Para usar el interceptor, debes registrarlo en tu `AppModule`:

```typescript
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
```

💡 **Tip**: Puedes tener múltiples interceptores en tu aplicación, y Angular los ejecutará en el orden en que están registrados.

---

### Modificación de Angular con provideHttpClient()

En Angular 18, puedes modificar tu aplicación usando `provideHttpClient()` en lugar de `HttpClientModule`. Debes hacer lo siguiente:

1. **Modificar `app.config.ts`**:
```typescript
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
```
2. **Eliminar `HttpClientModule` de `AppModule`**:
```typescript
@NgModule({
  // Elimina HttpClientModule de aquí.
  imports: [],
})
export class AppModule {}
```

Para más detalles sobre esta nueva forma de consumir APIs en Angular, visita la página oficial: [Angular HTTP Setup Guide](https://angular.dev/guide/http/setup).

Para mantener la estructura modular y reutilizable en Angular, es una buena práctica crear servicios para manejar las peticiones HTTP y separar la lógica de negocio de los componentes. Aquí te muestro cómo crear un servicio que maneje las peticiones HTTP de manera centralizada.

---

## Crear un Servicio para Manejar Peticiones HTTP 🚀

### Paso 1: Crear el Servicio

Para crear un servicio en Angular, utiliza el CLI de Angular con el siguiente comando:

```bash
ng generate service servicios/data
```

Esto generará un archivo `data.service.ts` que será el encargado de realizar las peticiones HTTP.

### Paso 2: Implementar el Servicio

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root", // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class DataService {
  private apiUrl = "https://api.example.com/items";

  constructor(private http: HttpClient) {}

  // Método para obtener datos (GET)
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Método para crear un nuevo item (POST)
  createItem(item: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, item)
      .pipe(catchError(this.handleError));
  }

  // Método para actualizar un item (PUT)
  updateItem(id: number, item: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, item).pipe(catchError(this.handleError));
  }

  // Método para eliminar un item (DELETE)
  deleteItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(catchError(this.handleError));
  }

  // Manejo de errores
  private handleError(error: any) {
    console.error("Ocurrió un error", error);
    return throwError(
      () => new Error("Ocurrió un problema; intenta de nuevo más tarde.")
    );
  }
}
```

#### Explicación:

1. **`getItems()`**: Realiza una petición HTTP GET para obtener una lista de items.
2. **`createItem()`**: Realiza una petición HTTP POST para enviar un nuevo item.
3. **`updateItem()`**: Realiza una petición HTTP PUT para actualizar un item existente.
4. **`deleteItem()`**: Realiza una petición HTTP DELETE para eliminar un item por su ID.
5. **`handleError()`**: Un método privado que se encarga de gestionar los errores utilizando `catchError` y `throwError` de RxJS.

---

### Paso 3: Usar el Servicio en un Componente

Ahora, en el componente donde quieras usar los datos, inyecta este servicio en el constructor y usa los métodos creados. A continuación te muestro cómo hacerlo:

```typescript
import { Component, OnInit } from "@angular/core";
import { DataService } from "./servicios/data.service";

@Component({
  selector: "app-mi-componente",
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item.name }}</li>
    </ul>
    <button (click)="agregarItem()">Agregar Item</button>
  `,
})
export class MiComponente implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Obtener los datos al inicializar el componente
    this.dataService.getItems().subscribe(
      (data) => (this.items = data),
      (error) => console.error("Error al obtener items:", error)
    );
  }

  agregarItem() {
    const nuevoItem = { name: "Nuevo Item" };
    this.dataService.createItem(nuevoItem).subscribe(
      (response) => {
        console.log("Item creado:", response);
        this.items.push(response);
      },
      (error) => console.error("Error al crear item:", error)
    );
  }
}
```

#### Explicación:

1. **`ngOnInit()`**: Cuando se inicializa el componente, se llama al método `getItems()` del servicio para obtener la lista de items desde la API.
2. **`agregarItem()`**: Este método llama al servicio para crear un nuevo item y lo agrega a la lista actual de items al recibir la respuesta exitosa.

