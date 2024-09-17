# 🎨 Tipos Básicos en TypeScript

TypeScript ofrece un sistema de **tipos estáticos** que mejora la seguridad y claridad del código, ayudándote a detectar errores antes de que lleguen a tiempo de ejecución. ¡Vamos a explorar los tipos más básicos y fundamentales que TypeScript tiene para ofrecer! 🚀

### 1️⃣ Tipos Primitivos

Los **tipos primitivos** en TypeScript son los mismos que en JavaScript, pero con un toque de tipado estático. Los más comunes son:

- **`string`**: Para cadenas de texto.
- **`number`**: Para números, ya sean enteros o decimales.
- **`boolean`**: Para valores de verdadero (`true`) o falso (`false`).

**Ejemplos de Código:**

```typescript
let nombre: string = "Juan"; // 📝 Tipo de dato string
let edad: number = 30;       // 🔢 Tipo de dato number
let esDesarrollador: boolean = true; // ✅ Tipo de dato boolean

console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años. ¿Soy desarrollador? ${esDesarrollador}`);
```

En este ejemplo, hemos definido tres variables (`nombre`, `edad`, y `esDesarrollador`) con tipos específicos, lo que ayuda a evitar errores como asignar un número a una variable que espera una cadena. 🎯

### 2️⃣ Tipos Compuestos

Los **tipos compuestos** permiten combinar múltiples valores bajo un solo tipo. Estos incluyen `array`, `tuple` y `enum`.

#### 🔹 Arrays

Los arrays son listas ordenadas de valores del mismo tipo. Puedes definir un array de números, strings, booleanos, etc.

**Ejemplo de Array:**

```typescript
let listaNumeros: number[] = [1, 2, 3, 4, 5]; // 📚 Array de números
let listaNombres: string[] = ["Ana", "Pedro", "Luis"]; // 📚 Array de strings

console.log(listaNumeros); // [1, 2, 3, 4, 5]
console.log(listaNombres); // ["Ana", "Pedro", "Luis"]
```

#### 🔹 Tuplas (Tuples)

Las **tuplas** permiten definir un array con un número fijo de elementos con tipos específicos. Son útiles cuando necesitas representar un conjunto fijo de datos.

**Ejemplo de Tuple:**

```typescript
let persona: [string, number] = ["Maria", 25]; // 👥 Una tuple con nombre y edad

console.log(`Nombre: ${persona[0]}, Edad: ${persona[1]}`); // Nombre: Maria, Edad: 25
```

Aquí, `persona` es una tupla que siempre debe tener un `string` como primer valor y un `number` como segundo valor.

#### 🔹 Enumeraciones (Enums)

Los **enums** son una forma de dar nombres más legibles a conjuntos de valores numéricos o de strings. Son especialmente útiles cuando se trabaja con valores que representan estados, roles, etc.

**Ejemplo de Enum:**

```typescript
enum Color { Rojo, Verde, Azul } // 🌈 Definimos un enum para colores

let colorFavorito: Color = Color.Verde; // Usamos el enum

console.log(`Mi color favorito es: ${Color[colorFavorito]}`); // Mi color favorito es: Verde
```

### 3️⃣ Tipos Especiales

TypeScript también ofrece **tipos especiales** para casos más avanzados y específicos:

#### 🔸 `any`

El tipo `any` se utiliza cuando no estás seguro del tipo de una variable. Es flexible, pero **debe usarse con cuidado** porque anula los beneficios del tipado estático.

**Ejemplo de `any`:**

```typescript
let variable: any = "Hola"; // Puede ser cualquier cosa
variable = 42; // 🔄 Se puede cambiar a un número sin problemas
```

#### 🔸 `unknown`

El tipo `unknown` es similar a `any`, pero más seguro, ya que fuerza una comprobación de tipo antes de realizar ciertas operaciones.

**Ejemplo de `unknown`:**

```typescript
let valorDesconocido: unknown = 4;
if (typeof valorDesconocido === "number") {
  console.log(valorDesconocido + 2); // Solo permite la operación si es un número
}
```

#### 🔸 `never`

El tipo `never` representa un valor que **nunca ocurre**. Se usa generalmente en funciones que lanzan excepciones o que nunca terminan.

**Ejemplo de `never`:**

```typescript
function error(mensaje: string): never {
  throw new Error(mensaje); // 💥 Lanza un error y no devuelve nada
}
```

#### 🔸 `void`

El tipo `void` se utiliza para funciones que **no devuelven un valor**.

**Ejemplo de `void`:**

```typescript
function saludar(): void {
  console.log("¡Hola a todos!"); // No devuelve nada
}
```

### 🌟 ¡Resumen Rápido!

TypeScript ofrece una amplia gama de tipos que ayudan a crear un código más seguro, legible y fácil de mantener. Con tipos primitivos como `string`, `number`, y `boolean`, tipos compuestos como `array`, `tuple`, y `enum`, y tipos especiales como `any`, `unknown`, `never`, y `void`, tienes todo lo que necesitas para desarrollar aplicaciones robustas y de alta calidad. ¡Empieza a usar estos tipos hoy mismo y experimenta la diferencia! 💪
