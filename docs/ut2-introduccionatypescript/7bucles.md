# 🔄 Bucles en TypeScript

Los **bucles** son fundamentales en la programación, ya que te permiten ejecutar un bloque de código repetidamente hasta que se cumpla una condición. En TypeScript, contamos con varios tipos de bucles para cubrir diferentes necesidades: `for`, `while`, `do-while`, y las estructuras de iteración `for...of` y `for...in`. ¡Vamos a explorarlos! 🚀

### 1️⃣ Bucle `for`

El bucle `for` es el más común y se utiliza cuando sabes cuántas veces necesitas iterar sobre un bloque de código. Es ideal para iterar sobre arrays, ejecutar lógica repetitiva o contar en un rango específico.

**Sintaxis:**

```typescript
for (inicializacion; condicion; actualizacion) {
  // Código que se ejecuta en cada iteración
}
```

**Ejemplo de Uso:**

```typescript
for (let i = 0; i < 5; i++) {
  console.log(`Iteración número: ${i} 🚀`);
}
```

Este bucle `for` imprimirá "Iteración número: 0", "Iteración número: 1", y así sucesivamente hasta 4. ¡Perfecto para contar y ejecutar algo repetidamente! 🔢

### 2️⃣ Bucle `while`

El bucle `while` ejecuta un bloque de código siempre que la condición sea `true`. Es útil cuando no estás seguro del número exacto de iteraciones que necesitas, pero sabes la condición que debe cumplirse.

**Sintaxis:**

```typescript
while (condicion) {
  // Código que se ejecuta mientras la condición sea verdadera
}
```

**Ejemplo de Uso:**

```typescript
let contador: number = 0;

while (contador < 3) {
  console.log(`El contador es: ${contador} ⏳`);
  contador++;
}
```

Este bucle continuará ejecutándose mientras el valor de `contador` sea menor que 3. En cada iteración, `contador` se incrementa en 1.

### 3️⃣ Bucle `do-while`

El bucle `do-while` es similar al `while`, pero con una diferencia importante: **siempre ejecuta el bloque de código al menos una vez** antes de comprobar la condición. Es útil cuando quieres ejecutar algo primero y luego verificar la condición.

**Sintaxis:**

```typescript
do {
  // Código que se ejecuta al menos una vez
} while (condicion);
```

**Ejemplo de Uso:**

```typescript
let numero: number = 5;

do {
  console.log(`Número actual: ${numero} 🔁`);
  numero--;
} while (numero > 0);
```

En este ejemplo, el código dentro del `do` se ejecutará primero y luego verificará la condición `numero > 0`. ¡Ideal para cuando necesitas ejecutar algo al menos una vez! 🚴‍♂️

### 4️⃣ Iteración sobre Arrays y Objetos

TypeScript ofrece estructuras como `for...of` y `for...in` para iterar de manera más eficiente sobre arrays y objetos. Veamos cómo funcionan:

#### 🔹 `for...of`

`for...of` se utiliza para iterar sobre los **valores** de un iterable (como arrays, strings, etc.). Es especialmente útil para trabajar con los elementos de un array directamente.

**Ejemplo de Uso:**

```typescript
let frutas: string[] = ["🍎 Manzana", "🍌 Banana", "🍓 Fresa"];

for (let fruta of frutas) {
  console.log(`Me gusta la ${fruta}`);
}
```

Este bucle imprimirá "Me gusta la 🍎 Manzana", "Me gusta la 🍌 Banana", etc. Es muy intuitivo y fácil de leer. 🍏

#### 🔹 `for...in`

`for...in` se utiliza para iterar sobre las **propiedades** de un objeto. Es ideal cuando necesitas trabajar con las **claves** de un objeto, en lugar de los valores.

**Ejemplo de Uso:**

```typescript
let persona = { nombre: "Ana", edad: 28, ocupacion: "Ingeniera" };

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
}
```

Este bucle imprimirá:

```
nombre: Ana
edad: 28
ocupacion: Ingeniera
```

Como ves, `for...in` es perfecto para recorrer todas las propiedades de un objeto. 🧩

### 🌟 ¡Resumen Rápido!

TypeScript proporciona una variedad de bucles para satisfacer diferentes necesidades de programación:

- **`for`**: Ideal para iteraciones con un número conocido de veces.
- **`while`**: Útil cuando la condición es dinámica y desconocida.
- **`do-while`**: Perfecto para cuando necesitas ejecutar un bloque al menos una vez.
- **`for...of`**: Excelente para iterar sobre los valores de arrays u otros iterables.
- **`for...in`**: Ideal para recorrer propiedades de objetos.

¡Con estas herramientas, puedes manejar bucles e iteraciones de manera eficiente y elegante en TypeScript! 🌐