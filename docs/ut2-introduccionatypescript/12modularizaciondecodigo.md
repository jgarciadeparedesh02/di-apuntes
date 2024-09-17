# 📦 Modularización en TypeScript

La **modularización** es una técnica fundamental en la programación moderna que permite dividir el código en módulos más pequeños y manejables. Esto facilita la **organización**, **reutilización** y **mantenimiento** del código. En TypeScript, podemos utilizar **importaciones** y **exportaciones** para gestionar nuestros módulos de manera eficiente. ¡Vamos a ver cómo hacerlo! 🚀

### 1️⃣ Importaciones y Exportaciones en TypeScript

En TypeScript, puedes dividir tu código en múltiples archivos (módulos) y utilizar **exportaciones** para hacer que las funciones, clases, interfaces, u objetos estén disponibles para otros módulos. Por otro lado, puedes usar **importaciones** para traer esas entidades de otros módulos y usarlas en el tuyo.

#### 🔹 Exportaciones

Las **exportaciones** se utilizan para declarar qué partes de un módulo deben estar disponibles para otros módulos. Puedes exportar variables, funciones, clases, interfaces, etc.

**Ejemplo de Exportación de Función y Clase:**

```typescript
// archivo: calculadora.ts

export function sumar(a: number, b: number): number {
  return a + b;
}

export class Calculadora {
  restar(a: number, b: number): number {
    return a - b;
  }
}
```

En este archivo `calculadora.ts`, hemos exportado una función `sumar` y una clase `Calculadora` que contiene un método `restar`. Estos estarán disponibles para ser importados y utilizados en otros archivos. 🧩

#### 🔹 Importaciones

Para **importar** entidades exportadas de otro módulo, usamos la palabra clave `import`. Puedes importar funciones, clases o cualquier cosa que haya sido exportada.

**Ejemplo de Importación:**

```typescript
// archivo: app.ts

import { sumar, Calculadora } from "./calculadora"; // Importa la función y la clase

console.log(sumar(10, 5)); // 15 ➕

const miCalculadora = new Calculadora();
console.log(miCalculadora.restar(10, 5)); // 5 ➖
```

En este ejemplo, `app.ts` importa la función `sumar` y la clase `Calculadora` desde `calculadora.ts` y las utiliza. La importación se hace con la sintaxis `{ nombre }` desde el archivo correspondiente. 🌟

#### 🔹 Exportación por Defecto

Además de las exportaciones nombradas, TypeScript también permite **exportaciones por defecto**, que exportan una única entidad por defecto.

**Ejemplo de Exportación por Defecto:**

```typescript
// archivo: usuario.ts

export default class Usuario {
  constructor(public nombre: string) {}

  saludar(): void {
    console.log(`¡Hola, ${this.nombre}! 👋`);
  }
}
```

Aquí, `Usuario` es exportado como la **exportación por defecto**. Al importar, no necesitas usar llaves `{}`.

**Ejemplo de Importación por Defecto:**

```typescript
// archivo: main.ts

import Usuario from "./usuario"; // Importación sin llaves

const usuario1 = new Usuario("Ana");
usuario1.saludar(); // ¡Hola, Ana! 👋
```

¡Así de simple! Las importaciones por defecto son perfectas cuando solo necesitas importar una entidad principal de un módulo. 🎯

### 2️⃣ Uso de Módulos para Organizar el Código

Organizar el código en módulos es fundamental para el desarrollo de software a gran escala. Al dividir el código en módulos, puedes trabajar en diferentes partes de tu aplicación sin que los archivos se vuelvan enormes y difíciles de manejar. Cada módulo tiene un propósito específico, lo que hace que tu aplicación sea más **modular**, **reutilizable**, y **mantenible**.

#### 🔹 Organizando el Código en Módulos

Imagina que estás desarrollando una aplicación de e-commerce. Puedes dividir el código en módulos separados para manejar diferentes responsabilidades:

1. **Producto (product.ts):** Lógica relacionada con los productos.
2. **Carrito de Compras (cart.ts):** Lógica para agregar, quitar, y manejar productos en el carrito.
3. **Usuario (user.ts):** Lógica relacionada con la autenticación y gestión del usuario.

**Ejemplo de Organización Modular:**

```typescript
// archivo: product.ts
export class Producto {
  constructor(public nombre: string, public precio: number) {}
}

// archivo: cart.ts
import { Producto } from "./product";

export class Carrito {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    console.log(`Producto agregado: ${producto.nombre} 🛒`);
  }

  mostrarCarrito(): void {
    console.log("Carrito de compras:");
    this.productos.forEach((producto) =>
      console.log(`${producto.nombre} - $${producto.precio}`)
    );
  }
}

// archivo: main.ts
import { Producto } from "./product";
import { Carrito } from "./cart";

const carrito = new Carrito();
const prod1 = new Producto("Laptop", 1200);
const prod2 = new Producto("Smartphone", 800);

carrito.agregarProducto(prod1); // Producto agregado: Laptop 🛒
carrito.agregarProducto(prod2); // Producto agregado: Smartphone 🛒
carrito.mostrarCarrito();
```

En este ejemplo, el archivo `main.ts` actúa como el punto de entrada de la aplicación, importando clases desde los módulos `product.ts` y `cart.ts` para utilizarlas. Esto mantiene el código limpio, organizado y fácil de mantener. 🗂️

### 🌟 ¡Resumen Rápido!

- **Importaciones y Exportaciones:** Divide tu código en módulos y reutiliza funciones, clases, y otros elementos.
- **Módulos para Organización del Código:** Mantén tu aplicación organizada, clara y escalable.

Utilizar módulos en TypeScript es esencial para escribir código limpio, organizado y de alta calidad. ¡Empieza a modularizar tu código hoy y disfruta de un desarrollo más eficiente y manejable! 💪