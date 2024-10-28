# Proyecto: Parque de Dinosaurios - API para Gestión de Parque Temático de Dinosaurios

## Descripción General

Este proyecto está inspirado en juegos como **Jurassic World Evolution** y permite a los usuarios gestionar su propio parque temático de dinosaurios. Los usuarios deben cuidar de diferentes especies, construir recintos adecuados, y atraer visitantes al parque. La API facilita operaciones como el registro e inicio de sesión, la gestión de recursos del parque, la compra de dinosaurios y recintos, y la respuesta a situaciones de emergencia.

## Objetivo del Proyecto

Desarrollar una **API en Node.js con Express** que permita a los usuarios realizar las siguientes acciones:
1. Administrar su propio parque de dinosaurios.
2. Comprar y desbloquear diferentes especies de dinosaurios y construir recintos específicos para cada tipo.
3. Gestionar situaciones de emergencia dentro del parque.
4. Visualizar la evolución y progreso del parque mediante un sistema de clicks que desbloquea mejoras con cada acción.

## Funcionalidades Principales

### Autenticación de Usuario
- **Registro e inicio de sesión**: Los usuarios deben poder registrarse y luego autenticarse para gestionar su parque de manera segura.
- **Personalización del parque**: Cada usuario tiene un parque único con su propio progreso, especies compradas y recintos construidos.

### Gestión del Parque
- **Información general del parque**: Consultar el estado actual del parque, que incluye:
  - Número y tipo de dinosaurios descubiertos.
  - Número de visitantes actuales en el parque.
  - Recintos construidos y recursos disponibles.
  
### Sistema de Compra y Evolución
- **Dinero y monedas**: Los usuarios ganan monedas según su actividad y pueden usarlas para comprar dinosaurios y construir recintos.
- **Desbloqueo por clicks**: Cada cierto número de clicks se desbloquean nuevas especies de dinosaurios o recintos.
- **Monedas y recursos**: El costo de cada dinosaurio y recinto aumenta de forma escalonada a medida que el usuario progresa.

## Estructura de Datos

Para almacenar los datos necesarios, se utilizan varios archivos JSON:
1. `users.json`: Almacena la información de los usuarios (ID, correo, contraseña).
2. `parks.json`: Información sobre el estado de los parques, incluyendo dinosaurios comprados, recintos construidos, y monedas acumuladas.
3. `dinosaurs.json`: Detalles de las especies de dinosaurios disponibles para compra.
4. `recintos.json`: Información sobre los tipos de recintos disponibles para construcción.
5. `emergencies.json`: Lista de posibles situaciones de emergencia que pueden afectar al parque.

## Endpoints de la API

### Autenticación (`/auth`)
- **POST `/auth/register`**: Registrar un nuevo usuario.
- **POST `/auth/login`**: Iniciar sesión y obtener un token de autenticación.

### Gestión del Parque (`/park`)
- **GET `/park/status`**: Consultar el estado actual del parque.
- **POST `/park/update`**: Actualizar los datos del parque (compra de dinosaurios, construcción de recintos, monedas disponibles).

### Dinosaurios y Recintos (`/dinosaurs` y `/recintos`)
- **GET `/dinosaurs`**: Obtener información sobre los dinosaurios disponibles para compra.
- **GET `/recintos`**: Obtener información sobre los recintos.

## Uso de JWT (JSON Web Tokens)

Para mantener segura la sesión de los usuarios, esta API utiliza **JWT (JSON Web Tokens)** para la autenticación. JWT es un estándar de seguridad que permite crear tokens de acceso que contienen información verificable sin necesidad de acceder al servidor. 

### ¿Qué es un JWT?

Un JWT es un token que se genera tras la autenticación de un usuario. Este token contiene información codificada que puede verificarse y descifrarse usando una clave secreta. En el contexto de esta API, el token se envía al cliente cuando el usuario inicia sesión y, a partir de ese momento, el cliente debe incluir el token en las cabeceras de cada solicitud para demostrar que está autenticado.

### Ejemplo de Uso del Token JWT

Al iniciar sesión, el token JWT devuelto debe almacenarse en el navegador (por ejemplo, en `localStorage`) para que pueda reutilizarse en futuras solicitudes.

#### Ejemplo en una aplicación Angular:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkService {

  constructor(private http: HttpClient) {}

  getParkStatus(): Observable<any> {
    // Obtener el token desde localStorage
    const token = localStorage.getItem('token');
    
    // Configurar la cabecera de autorización con el token
    const headers = {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`
      })
    };

    // Realizar la solicitud GET al endpoint del estado del parque
    return this.http.get('http://localhost:3000/park/status', headers);
  }
}
```

#### Explicación de los Pasos:

1. **Obtener el Token**: Se accede a `localStorage` para recuperar el token de autenticación guardado después del login.
2. **Configurar Cabecera de Autorización**: Se crea una cabecera HTTP que incluye el token en el formato `Bearer <token>`.
3. **Realizar la Solicitud HTTP**: Utilizando el servicio `HttpClient` de Angular, se envía una solicitud GET al endpoint de la API, incluyendo las cabeceras de autorización.

### Uso en Componentes de Angular

Desde un componente Angular, el token JWT puede utilizarse inyectando el servicio que gestiona las solicitudes autenticadas. A continuación, se muestra un ejemplo de cómo suscribirse a la respuesta de la API:

```typescript
import { Component, OnInit } from '@angular/core';
import { ParkService } from './park.service';

@Component({
  selector: 'app-park-status',
  templateUrl: './park-status.component.html'
})
export class ParkStatusComponent implements OnInit {

  parkStatus: any;

  constructor(private parkService: ParkService) {}

  ngOnInit(): void {
    this.parkService.getParkStatus().subscribe(
      data => {
        this.parkStatus = data;
        console.log('Estado del parque:', this.parkStatus);
      },
      error => {
        console.error('Error al obtener el estado del parque:', error);
      }
    );
  }
}
```

---

Con este esquema, los usuarios podrán acceder de forma segura a su parque y gestionar los recursos sin necesidad de autenticarse en cada solicitud, gracias al token JWT almacenado.