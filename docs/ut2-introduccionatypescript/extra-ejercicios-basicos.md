## Ejercicios

### Condicionales

#### 1. Comprobación de Número Positivo, Negativo o Cero

   Escribe una función que tome un número como argumento y determine si es positivo, negativo o cero. Muestra el resultado en la consola.


#### 2. Verificación de Contenido de Texto

Crea una función que tome una cadena como argumento y verifique si contiene una palabra específica (por ejemplo, "typescript"). Muestra "Contiene la palabra 'typescript'" o "No contiene la palabra 'typescript'" en la consola según corresponda.

**Pista:** Utiliza el método `includes()` de las cadenas de texto para verificar si la palabra deseada está presente. Recuerda que `includes()` es sensible a mayúsculas y minúsculas, así que podrías usar `toLowerCase()` para manejar ambos casos.

#### 3. Verificación de Año Bisiesto

   Escribe una función que tome un año como argumento y determine si es un año bisiesto. Muestra el resultado en la consola.

   **Pista:** La lógica para determinar un año bisiesto implica el uso de operadores lógicos (`&&`, `||`). Considera encapsular la verificación en una función separada para mejorar la legibilidad y reutilización del código.

#### 4. Clasificación de Calificaciones

   Crea una función que tome una calificación numérica (entre 0 y 100) como argumento y clasifique la calificación como "Sobresaliente", "Notable", "Aprobado" o "Reprobado". Muestra el resultado en la consola.

   **Pista:** Puedes usar una combinación de `if` y `else if` para manejar diferentes rangos de calificaciones. Considera el uso de una función de mapeo o de un objeto para simplificar la lógica de clasificación.

#### 5. Conversión de Temperatura

   Escribe una función que tome una temperatura en grados Celsius como argumento y la convierta a grados Fahrenheit. Si la temperatura es mayor a 30 °C, muestra "Hace calor", si es menor o igual a 10 °C, muestra "Hace frío", de lo contrario, muestra "Temperatura moderada".

   **Pista:** Usa la fórmula de conversión de Celsius a Fahrenheit y `toFixed()` para limitar el número de decimales en la salida. Para clasificar la temperatura, utiliza condicionales y considera funciones auxiliares que manejen diferentes mensajes de salida según los rangos de temperatura.

#### 6. Juego Automático de Piedra, Papel o Tijera

Crea una función que simule un juego de "Piedra, Papel o Tijera" entre dos participantes, donde ambos seleccionan su opción de forma aleatoria. Genera un número aleatorio entre 0 y 2 para cada jugador y determina el ganador. Muestra el resultado del juego en la consola.

**Pista:** Utiliza `Math.random()` para generar dos números aleatorios entre 0 y 2, donde cada número corresponde a una opción: `0` para "Piedra", `1` para "Papel", `2` para "Tijera". Usa una función para convertir estos números en sus equivalentes de "Piedra", "Papel" o "Tijera" para facilitar la legibilidad del código. Luego, implementa una estructura condicional `if-else` o `switch` para comparar las opciones de ambos jugadores y determinar el resultado del juego.

### Bucles

#### 1. Bucle `for` con Condición de Salto

Crea un bucle `for` que imprima los números del 1 al 20, pero que salte los múltiplos de 3.

#### 2. Bucle `while` para Factorial

Usa un bucle `while` para imprimir el factorial de un número entero dado. El factorial de 5 (5!) es 5×4×3×2×1=120.

#### 3. Bucle `do...while` para Entrada de Usuario

Escribe un programa que use un bucle `do...while` para pedir al usuario un número entre 1 y 10. Continúa solicitando hasta que el usuario introduzca un número válido.

**Pista:**  Utiliza la instrucción prompt() para solicitar datos al usuario en TypeScript. Esta función abre un cuadro de diálogo que permite al usuario introducir una cadena de texto. Para obtener datos numéricos, convierte la entrada del usuario usando parseInt() o parseFloat() según sea necesario. Asegúrate de manejar posibles entradas no válidas mediante condicionales if o un bucle while para solicitar repetidamente la entrada hasta que sea correcta.

#### 4. Bucle `for...of` para Iterar sobre Arreglo

Dado un array de nombres, usa un bucle `for...of` para imprimir cada nombre en mayúsculas.

```typescript
const names = ["Ana", "Luis", "Carlos", "Marta"];
for (const name of names) {
    console.log(name.toUpperCase());
}
```

#### 5. Bucle `for...in` para Contar Propiedades de un Objeto

Crea un objeto que contenga algunas propiedades simples, como `a`, `b` y `c`. Usa un bucle `for...in` para contar el número total de propiedades en el objeto e imprimir el resultado.

```typescript
const simpleObject = {
    a: 1,
    b: 2,
    c: 3
};

let propertyCount = 0;

for (const key in simpleObject) {
    propertyCount++;  // Incrementa el contador por cada propiedad
}

console.log(`El número total de propiedades es: ${propertyCount}`);
```
#### 6. Método `forEach` para Sumar Elementos de un Arreglo

Dado un array de números, usa el método `forEach` para calcular y mostrar la suma de todos los números.

**Pista:** Usa el método `forEach()` en TypeScript para iterar sobre los elementos de un array y ejecutar una función para cada elemento.

**Ejemplo:**

```typescript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
    console.log(numero * 2);  // Multiplica cada número por 2 y lo imprime
});
```
#### Otros ejercicios 

##### 1. Triángulo Rectángulo

Dibuja un triángulo rectángulo con `*` de `n` filas. Cada fila debe contener un número creciente de asteriscos, comenzando con 1 en la primera fila y aumentando en 1 en cada fila subsiguiente.

**Ejemplo para `n = 5`:**
```
*
**
***
****
*****
```

#### 2. Cuadrado de Asteriscos

Dibuja un cuadrado de `n x n` asteriscos. Cada fila debe tener exactamente `n` asteriscos.

**Ejemplo para `n = 4`:**
```
****
****
****
****
```

#### 3. Pirámide de Asteriscos

Dibuja una pirámide de `n` filas. La primera fila tiene un asterisco centrado, y cada fila subsiguiente tiene dos asteriscos más, formando una pirámide.

**Ejemplo para `n = 5`:**
```
    *
   ***
  *****
 *******
*********
```
