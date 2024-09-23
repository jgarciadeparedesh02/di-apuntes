Aquí tienes los ejercicios junto con sus soluciones en TypeScript, organizados según cada enunciado y su respectiva respuesta:

## Ejercicios

### Programación Orientada a Objetos

#### 1. **Clase `Persona` y Método para Saludar**

**Enunciado:**  
Crea una clase llamada `Persona` que tenga las propiedades `nombre` (string) y `edad` (number). Incluye un método `saludar()` que muestre en la consola un mensaje como "Hola, mi nombre es [nombre] y tengo [edad] años". Instancia un objeto de la clase y llama al método `saludar()`.

**Solución:**

```typescript
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una instancia de Persona y llamar al método saludar
const persona1 = new Persona('Juan', 30);
persona1.saludar();
```

#### 2. **Sistema de Gestión de Productos**

**Enunciado:**  
Crea una clase `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Luego, crea una clase `CarritoDeCompras` que tenga una lista de productos y métodos para agregar un producto, eliminar un producto y calcular el total del carrito. Muestra en la consola el contenido del carrito y el total después de agregar y eliminar productos.

**Solución:**

```typescript
class Producto {
  nombre: string;
  precio: number;
  cantidad: number;

  constructor(nombre: string, precio: number, cantidad: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class CarritoDeCompras {
  productos: Producto[];

  constructor() {
    this.productos = [];
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  eliminarProducto(nombre: string): void {
    this.productos = this.productos.filter(prod => prod.nombre !== nombre);
  }

  calcularTotal(): number {
    return this.productos.reduce((total, prod) => total + prod.precio * prod.cantidad, 0);
  }

  mostrarCarrito(): void {
    console.log("Contenido del carrito:");
    this.productos.forEach(prod => {
      console.log(`Producto: ${prod.nombre}, Precio: ${prod.precio}, Cantidad: ${prod.cantidad}`);
    });
    console.log(`Total: ${this.calcularTotal()}`);
  }
}

// Ejemplo de uso del CarritoDeCompras
const carrito = new CarritoDeCompras();
const producto1 = new Producto('Laptop', 1000, 1);
const producto2 = new Producto('Mouse', 20, 2);

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.mostrarCarrito();

carrito.eliminarProducto('Mouse');
carrito.mostrarCarrito();
```

#### 3. **Herencia y Polimorfismo con Vehículos**

**Enunciado:**  
Crea una clase base `Vehiculo` con propiedades como `marca`, `modelo` y `velocidadMaxima`, y un método `acelerar()` que muestra la aceleración del vehículo en la consola. Luego, crea dos clases derivadas `Coche` y `Moto`, cada una con un método adicional único (`abrirMaletero()` para `Coche` y `hacerCaballito()` para `Moto`). Instancia objetos de ambas clases y demuestra el uso de la herencia y polimorfismo llamando a sus métodos.

**Solución:**

```typescript
class Vehiculo {
  marca: string;
  modelo: string;
  velocidadMaxima: number;

  constructor(marca: string, modelo: string, velocidadMaxima: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
  }

  acelerar(): void {
    console.log(`${this.marca} ${this.modelo} está acelerando hasta ${this.velocidadMaxima} km/h.`);
  }
}

class Coche extends Vehiculo {
  abrirMaletero(): void {
    console.log(`El maletero del ${this.marca} ${this.modelo} está abierto.`);
  }
}

class Moto extends Vehiculo {
  hacerCaballito(): void {
    console.log(`${this.marca} ${this.modelo} está haciendo un caballito.`);
  }
}

// Ejemplo de uso de Coche y Moto
const coche = new Coche('Toyota', 'Corolla', 180);
coche.acelerar();
coche.abrirMaletero();

const moto = new Moto('Yamaha', 'R1', 299);
moto.acelerar();
moto.hacerCaballito();
```

#### 4. **Sistema de Gestión de Estudiantes**

**Enunciado:**  
Crea una clase `Estudiante` con las propiedades `nombre`, `edad`, y `notas` (array de números). Incluye métodos para agregar una nota y calcular el promedio de las notas del estudiante. Luego, crea una clase `Curso` que gestione un grupo de estudiantes con métodos para agregar estudiantes y calcular el promedio general del curso.

**Solución:**

```typescript
class Estudiante {
  nombre: string;
  edad: number;
  notas: number[];

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.notas = [];
  }

  agregarNota(nota: number): void {
    this.notas.push(nota);
  }

  calcularPromedio(): number {
    const total = this.notas.reduce((acc, nota) => acc + nota, 0);
    return this.notas.length ? total / this.notas.length : 0;
  }
}

class Curso {
  estudiantes: Estudiante[];

  constructor() {
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }

  calcularPromedioGeneral(): number {
    const totalPromedios = this.estudiantes.reduce((acc, estudiante) => acc + estudiante.calcularPromedio(), 0);
    return this.estudiantes.length ? totalPromedios / this.estudiantes.length : 0;
  }
}

// Ejemplo de uso de la clase Curso
const estudiante1 = new Estudiante('Ana', 20);
estudiante1.agregarNota(85);
estudiante1.agregarNota(90);

const estudiante2 = new Estudiante('Luis', 22);
estudiante2.agregarNota(70);
estudiante2.agregarNota(75);

const curso = new Curso();
curso.agregarEstudiante(estudiante1);
curso.agregarEstudiante(estudiante2);

console.log(`Promedio de ${estudiante1.nombre}: ${estudiante1.calcularPromedio()}`);
console.log(`Promedio de ${estudiante2.nombre}: ${estudiante2.calcularPromedio()}`);
console.log(`Promedio general del curso: ${curso.calcularPromedioGeneral()}`);
```