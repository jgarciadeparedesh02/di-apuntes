# 🔧 Funciones y Tipado de Parámetros en TypeScript

Las **funciones** son bloques de código que permiten reutilizar lógica en diferentes partes de un programa. En TypeScript, podemos **declarar funciones**, definir **tipos para sus parámetros y valores de retorno**, y manejar **parámetros opcionales y predeterminados**. ¡Vamos a explorar estos conceptos para hacer tu código más seguro y eficiente! 🚀

### 1️⃣ Declaración de Funciones en TypeScript

Al igual que en JavaScript, las funciones en TypeScript se pueden declarar de varias maneras, como **funciones nombradas**, **funciones anónimas**, y **funciones flecha**. Sin embargo, TypeScript te permite definir tipos específicos para los parámetros y el valor de retorno, lo que añade un nivel extra de seguridad.

**Función Nombrada:**

```typescript
function saludar(nombre: string): void {
  console.log(`¡Hola, ${nombre}! 👋`);
}

saludar("Ana"); // ¡Hola, Ana! 👋
```

En este ejemplo, `nombre` es un parámetro de tipo `string` y el valor de retorno es `void`, lo que significa que la función no devuelve ningún valor.

**Función Flecha:**

```typescript
const multiplicar = (a: number, b: number): number => {
  return a * b;
};

console.log(multiplicar(3, 4)); // 12
```

Las **funciones flecha** son una forma concisa y moderna de definir funciones. Aquí, `a` y `b` son parámetros de tipo `number`, y la función devuelve un `number`.

### 2️⃣ Tipado de Parámetros y Retorno

El tipado en TypeScript no solo se aplica a las variables, sino también a los **parámetros** y **valores de retorno** de las funciones. Esto permite evitar errores comunes y hacer que el código sea más legible.

**Ejemplo con Tipado de Parámetros y Retorno:**

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

let resultado: number = sumar(5, 10);
console.log(`La suma es: ${resultado} ➕`); // La suma es: 15 ➕
```

En este ejemplo, hemos definido los tipos de `a` y `b` como `number`, y también especificamos que la función `sumar` devuelve un `number`. Si intentamos devolver cualquier otro tipo de dato, TypeScript mostrará un error. 🛑

### 3️⃣ Funciones Opcionales y con Parámetros Predeterminados

TypeScript permite definir **parámetros opcionales** y **valores predeterminados** para funciones, proporcionando flexibilidad adicional al escribir código.

#### 🔹 Parámetros Opcionales

Un **parámetro opcional** es un parámetro que no es necesario pasar cuando se llama a la función. Se declara utilizando el signo de interrogación (`?`) después del nombre del parámetro.

**Ejemplo de Función con Parámetro Opcional:**

```typescript
function mostrarInfo(nombre: string, edad?: number): string {
  return edad ? `${nombre} tiene ${edad} años.` : `${nombre} no especificó su edad.`;
}

console.log(mostrarInfo("Carlos")); // Carlos no especificó su edad.
console.log(mostrarInfo("Carlos", 25)); // Carlos tiene 25 años.
```

En este ejemplo, `edad` es un parámetro opcional. Si se proporciona, se muestra la edad; de lo contrario, se muestra un mensaje predeterminado. ✨

#### 🔹 Parámetros con Valores Predeterminados

Los **parámetros con valores predeterminados** permiten definir un valor por defecto que se utilizará si no se proporciona ningún valor al llamar a la función.

**Ejemplo de Función con Parámetros Predeterminados:**

```typescript
function calcularDescuento(precio: number, descuento: number = 0.10): number {
  return precio - (precio * descuento);
}

console.log(`Precio con descuento: $${calcularDescuento(100)} 🛒`); // Precio con descuento: $90
console.log(`Precio con descuento: $${calcularDescuento(100, 0.20)} 🛍️`); // Precio con descuento: $80
```

En este ejemplo, el parámetro `descuento` tiene un valor predeterminado de `0.10` (10%). Si no se proporciona un descuento al llamar a la función, se aplicará el valor predeterminado.

### 🌟 ¡Resumen Rápido!

TypeScript ofrece una sintaxis poderosa para trabajar con funciones:

- **Declaración de Funciones:** Definir funciones con sintaxis moderna y añadir tipos específicos.
- **Tipado de Parámetros y Retorno:** Aumenta la seguridad y legibilidad del código.
- **Funciones Opcionales y con Parámetros Predeterminados:** Añade flexibilidad y robustez al manejo de funciones.

Con estas características, puedes escribir código más claro, seguro y eficiente en TypeScript. ¡Explora todas estas opciones y mejora tus habilidades de programación hoy mismo! 💪