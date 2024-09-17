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

### 6. Juego Automático de Piedra, Papel o Tijera

Crea una función que simule un juego de "Piedra, Papel o Tijera" entre dos participantes, donde ambos seleccionan su opción de forma aleatoria. Genera un número aleatorio entre 0 y 2 para cada jugador y determina el ganador. Muestra el resultado del juego en la consola.

**Pista:** Utiliza `Math.random()` para generar dos números aleatorios entre 0 y 2, donde cada número corresponde a una opción: `0` para "Piedra", `1` para "Papel", `2` para "Tijera". Usa una función para convertir estos números en sus equivalentes de "Piedra", "Papel" o "Tijera" para facilitar la legibilidad del código. Luego, implementa una estructura condicional `if-else` o `switch` para comparar las opciones de ambos jugadores y determinar el resultado del juego.