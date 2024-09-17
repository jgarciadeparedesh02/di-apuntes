# 🧩 Condicionales en TypeScript

Las **condicionales** son estructuras fundamentales en cualquier lenguaje de programación. En TypeScript, podemos utilizar `if`, `else if`, `else`, operadores ternarios y estructuras `switch` para tomar decisiones en función de ciertas condiciones. ¡Vamos a explorarlas con ejemplos prácticos! 🚀

### 1️⃣ Uso de `if`, `else if`, `else`

Los condicionales `if`, `else if`, y `else` son básicos pero poderosos. Se utilizan para ejecutar un bloque de código solo si se cumple una condición específica.

**Sintaxis Básica:**

```typescript
if (condicion) {
  // Código que se ejecuta si la condición es verdadera
} else if (otraCondicion) {
  // Código que se ejecuta si la primera condición es falsa y esta es verdadera
} else {
  // Código que se ejecuta si ninguna de las condiciones anteriores es verdadera
}
```

**Ejemplo de Uso:**

```typescript
let edad: number = 20;

if (edad < 13) {
  console.log("Eres un niño 👶");
} else if (edad < 20) {
  console.log("Eres un adolescente 🧑");
} else if (edad < 65) {
  console.log("Eres un adulto 🧔");
} else {
  console.log("Eres un adulto mayor 👵");
}
```

En este ejemplo, se evalúa la edad de una persona y se imprime un mensaje en la consola basado en la categoría de edad. ¡Simple pero eficaz! ✨

### 2️⃣ Operador Ternario

El **operador ternario** es una forma más concisa de escribir condicionales `if-else`. Es especialmente útil cuando necesitas asignar un valor basado en una condición.

**Sintaxis:**

```typescript
condicion ? expresionSiVerdadera : expresionSiFalsa;
```

**Ejemplo de Uso:**

```typescript
let esProgramador: boolean = true;
let mensaje: string = esProgramador ? "¡Bienvenido, desarrollador! 👨‍💻" : "¡Hola! 👋";

console.log(mensaje); // ¡Bienvenido, desarrollador! 👨‍💻
```

En este caso, el operador ternario evalúa la condición `esProgramador` y asigna el valor correspondiente a la variable `mensaje`. ¡Todo en una sola línea! 🔥

### 3️⃣ Estructuras de Control `switch`

La estructura `switch` es útil cuando tienes múltiples condiciones que deseas verificar contra una misma variable. En lugar de escribir múltiples `if-else`, `switch` permite organizar el código de manera más limpia y legible.

**Sintaxis Básica:**

```typescript
switch (expresion) {
  case valor1:
    // Código que se ejecuta si la expresión es igual a valor1
    break;
  case valor2:
    // Código que se ejecuta si la expresión es igual a valor2
    break;
  default:
    // Código que se ejecuta si ninguno de los casos anteriores coincide
    break;
}
```

**Ejemplo de Uso:**

```typescript
let diaSemana: number = 3; // 1 para Lunes, 2 para Martes, etc.

switch (diaSemana) {
  case 1:
    console.log("Hoy es Lunes 🌞");
    break;
  case 2:
    console.log("Hoy es Martes 🌮");
    break;
  case 3:
    console.log("Hoy es Miércoles 🐫");
    break;
  case 4:
    console.log("Hoy es Jueves 🍕");
    break;
  case 5:
    console.log("Hoy es Viernes 🎉");
    break;
  case 6:
    console.log("Hoy es Sábado 🏖️");
    break;
  case 7:
    console.log("Hoy es Domingo 🍳");
    break;
  default:
    console.log("Día no válido ❌");
}
```

En este ejemplo, el `switch` evalúa el valor de `diaSemana` y ejecuta el bloque de código correspondiente. Si el valor no coincide con ninguno de los casos, se ejecuta el bloque `default`. ¡Muy práctico para trabajar con múltiples opciones! 💼

### 🌟 ¡Resumen Rápido!

TypeScript ofrece una variedad de estructuras condicionales que te permiten manejar la lógica de control en tu código de manera eficiente:

- **`if`, `else if`, `else`**: Perfecto para condicionales básicas y múltiples ramas.
- **Operador Ternario**: Ideal para condicionales concisas y asignaciones rápidas.
- **`switch`**: Excelente para manejar múltiples condiciones que dependen de una misma variable.

Con estas herramientas, puedes tomar decisiones complejas de manera limpia y eficaz en tus proyectos TypeScript. ¡Ahora es tu turno de implementarlas y mejorar tu código! 💪