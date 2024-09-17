# 🏗️ Objetos en TypeScript

Los **objetos** son fundamentales en JavaScript y TypeScript para representar entidades del mundo real o estructuras complejas de datos. En TypeScript, podemos definir objetos, darles un **tipado específico** usando **interfaces** o **tipos**, y crear **métodos** y **propiedades** para manipularlos de manera segura y eficiente. ¡Vamos a ver cómo hacerlo! 🚀

### 1️⃣ Definición y Uso de Objetos

En TypeScript, los **objetos** se definen de la misma manera que en JavaScript, utilizando pares clave-valor. Sin embargo, TypeScript te permite ser más explícito y seguro con el tipado.

**Ejemplo de Definición de Objeto:**

```typescript
const persona = {
  nombre: "Juan",
  edad: 30,
  esDesarrollador: true
};

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, ¿Es desarrollador? ${persona.esDesarrollador ? 'Sí' : 'No'} 👨‍💻`);
```

En este ejemplo, `persona` es un objeto con tres propiedades: `nombre`, `edad`, y `esDesarrollador`. Podemos acceder a cada propiedad usando la notación de punto (`.`).

### 2️⃣ Tipado de Objetos con Interfaces y Tipos

Una de las grandes ventajas de TypeScript es la capacidad de definir tipos específicos para los objetos. Esto se puede hacer utilizando **interfaces** o **tipos** (`type`).

#### 🔹 Uso de Interfaces

Las **interfaces** son una forma poderosa de definir la forma de un objeto. Nos permiten definir qué propiedades y métodos debe tener un objeto.

**Ejemplo de Interface:**

```typescript
interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

const usuario: Persona = {
  nombre: "Ana",
  edad: 28,
  esDesarrollador: false
};

console.log(`Usuario: ${usuario.nombre}, Edad: ${usuario.edad}, ¿Es desarrollador? ${usuario.esDesarrollador ? 'Sí' : 'No'} 👩‍💻`);
```

En este ejemplo, la **interface** `Persona` define la estructura de un objeto que debe tener `nombre`, `edad`, y `esDesarrollador` con sus respectivos tipos. Al usar esta interface para tipar el objeto `usuario`, TypeScript te avisará si intentas añadir una propiedad que no esté definida en la interface.

#### 🔹 Uso de Tipos (`type`)

El **tipo (`type`)** es otra forma de definir la forma de un objeto en TypeScript, y puede ser usado de manera muy similar a las interfaces.

**Ejemplo de `type`:**

```typescript
type Producto = {
  nombre: string;
  precio: number;
  enStock: boolean;
};

const articulo: Producto = {
  nombre: "Laptop",
  precio: 1500,
  enStock: true
};

console.log(`Producto: ${articulo.nombre}, Precio: $${articulo.precio}, ¿En stock? ${articulo.enStock ? 'Sí' : 'No'} 💻`);
```

El uso de `type` es muy similar al de `interface`, pero es más flexible y puede combinarse con otros tipos (unión, intersección).

### 3️⃣ Métodos y Propiedades en Objetos

En TypeScript, un **método** es simplemente una función dentro de un objeto. Puedes definir métodos dentro de objetos para realizar operaciones o calcular valores basados en las propiedades del objeto.

**Ejemplo de Objeto con Métodos:**

```typescript
interface Circulo {
  radio: number;
  calcularArea: () => number; // Método que retorna un número
}

const miCirculo: Circulo = {
  radio: 5,
  calcularArea: function (): number {
    return Math.PI * this.radio ** 2;
  }
};

console.log(`El área del círculo es: ${miCirculo.calcularArea().toFixed(2)} 🟠`);
```

En este ejemplo, `miCirculo` es un objeto que implementa la interface `Circulo` y tiene un método `calcularArea` que devuelve el área del círculo basado en su radio. La **notación de método** `function()` o `() =>` puede ser utilizada dependiendo de tu preferencia y del uso de `this`.

### 📌 Propiedades Opcionales y Métodos con Parámetros

Puedes definir propiedades opcionales en tus interfaces utilizando el símbolo `?`. También puedes definir métodos que aceptan parámetros para ser más flexibles.

**Ejemplo de Propiedad Opcional y Método con Parámetro:**

```typescript
interface Vehiculo {
  marca: string;
  modelo: string;
  anio?: number; // Propiedad opcional
  obtenerDetalles: (esCompleto: boolean) => string; // Método con parámetro
}

const miAuto: Vehiculo = {
  marca: "Toyota",
  modelo: "Corolla",
  obtenerDetalles: (esCompleto) => esCompleto ? `Marca: ${miAuto.marca}, Modelo: ${miAuto.modelo} 🚗` : `${miAuto.marca} 🚙`
};

console.log(miAuto.obtenerDetalles(true));  // Marca: Toyota, Modelo: Corolla 🚗
```

En este ejemplo, `anio` es opcional, y el método `obtenerDetalles` puede aceptar un parámetro `esCompleto` para decidir qué información mostrar.

### 🌟 ¡Resumen Rápido!

TypeScript proporciona herramientas poderosas para trabajar con objetos:

- **Definición y Uso de Objetos**: Fácil creación y acceso a las propiedades del objeto.
- **Tipado de Objetos con Interfaces y Tipos**: Mejora la seguridad y claridad del código.
- **Métodos y Propiedades en Objetos**: Agrega funcionalidad y manipula datos con métodos.

¡Utiliza estas características de TypeScript para escribir código más robusto, claro y mantenible! 💪
