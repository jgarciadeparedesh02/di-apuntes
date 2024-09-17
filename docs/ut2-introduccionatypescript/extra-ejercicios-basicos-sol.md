## Ejercicios (Soluciones)

### Condicionales

#### 1. Comprobación de Número Positivo, Negativo o Cero

Escribe una función que tome un número como argumento y determine si es positivo, negativo o cero. Muestra el resultado en la consola.

```typescript
function comprobarNumero(numero: number): void {
    if (numero > 0) {
        console.log('El número es positivo.');
    } else if (numero < 0) {
        console.log('El número es negativo.');
    } else {
        console.log('El número es cero.');
    }
}

// Ejemplos de uso
comprobarNumero(5);   // El número es positivo.
comprobarNumero(-3);  // El número es negativo.
comprobarNumero(0);   // El número es cero.
```

**Salida esperada:**
```
El número es positivo.
El número es negativo.
El número es cero.
```

#### 2. Verificación de Contenido de Texto

Crea una función que tome una cadena como argumento y verifique si contiene una palabra específica (por ejemplo, "typescript"). Muestra "Contiene la palabra 'typescript'" o "No contiene la palabra 'typescript'" en la consola según corresponda.

```typescript
function contienePalabra(texto: string, palabra: string): void {
    if (texto.toLowerCase().includes(palabra.toLowerCase())) {
        console.log(`Contiene la palabra '${palabra}'.`);
    } else {
        console.log(`No contiene la palabra '${palabra}'.`);
    }
}

// Ejemplos de uso
contienePalabra('Estoy aprendiendo TypeScript', 'typescript'); // Contiene la palabra 'typescript'.
contienePalabra('Me gusta programar', 'typescript');          // No contiene la palabra 'typescript'.
```

**Salida esperada:**
```
Contiene la palabra 'typescript'.
No contiene la palabra 'typescript'.
```

#### 3. Verificación de Año Bisiesto

Escribe una función que tome un año como argumento y determine si es un año bisiesto. Muestra el resultado en la consola.

```typescript
function esAnioBisiesto(anio: number): void {
    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        console.log(`${anio} es un año bisiesto.`);
    } else {
        console.log(`${anio} no es un año bisiesto.`);
    }
}

// Ejemplos de uso
esAnioBisiesto(2024); // 2024 es un año bisiesto.
esAnioBisiesto(2023); // 2023 no es un año bisiesto.
```

**Salida esperada:**
```
2024 es un año bisiesto.
2023 no es un año bisiesto.
```

#### 4. Clasificación de Calificaciones

Crea una función que tome una calificación numérica (entre 0 y 100) como argumento y clasifique la calificación como "Sobresaliente", "Notable", "Aprobado" o "Reprobado". Muestra el resultado en la consola.

```typescript
function clasificarCalificacion(calificacion: number): void {
    if (calificacion >= 90) {
        console.log('Sobresaliente');
    } else if (calificacion >= 75) {
        console.log('Notable');
    } else if (calificacion >= 50) {
        console.log('Aprobado');
    } else {
        console.log('Reprobado');
    }
}

// Ejemplos de uso
clasificarCalificacion(95); // Sobresaliente
clasificarCalificacion(80); // Notable
clasificarCalificacion(60); // Aprobado
clasificarCalificacion(40); // Reprobado
```

**Salida esperada:**
```
Sobresaliente
Notable
Aprobado
Reprobado
```

#### 5. Conversión de Temperatura

Escribe una función que tome una temperatura en grados Celsius como argumento y la convierta a grados Fahrenheit. Si la temperatura es mayor a 30 °C, muestra "Hace calor", si es menor o igual a 10 °C, muestra "Hace frío", de lo contrario, muestra "Temperatura moderada".

```typescript
function convertirTemperatura(celsius: number): void {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius} °C son ${fahrenheit.toFixed(2)} °F.`);

    if (celsius > 30) {
        console.log('Hace calor.');
    } else if (celsius <= 10) {
        console.log('Hace frío.');
    } else {
        console.log('Temperatura moderada.');
    }
}

// Ejemplos de uso
convertirTemperatura(35); // Hace calor.
convertirTemperatura(5);  // Hace frío.
convertirTemperatura(20); // Temperatura moderada.
```

**Salida esperada:**
```
35 °C son 95.00 °F.
Hace calor.
5 °C son 41.00 °F.
Hace frío.
20 °C son 68.00 °F.
Temperatura moderada.
```

### 6. Juego Automático de Piedra, Papel o Tijera

Crea una función que simule un juego de "Piedra, Papel o Tijera" entre dos participantes, donde ambos seleccionan su opción de forma aleatoria. Genera un número aleatorio entre 0 y 2 para cada jugador y determina el ganador. Muestra el resultado del juego en la consola.

```typescript
function generarOpcion(): string {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

function jugarPiedraPapelTijera(): void {
    const jugador1 = generarOpcion();
    const jugador2 = generarOpcion();

    console.log(`Jugador 1 elige: ${jugador1}`);
    console.log(`Jugador 2 elige: ${jugador2}`);

    if (jugador1 === jugador2) {
        console.log('Es un empate.');
    } else if (
        (jugador1 === 'Piedra' && jugador2 === 'Tijera') ||
        (jugador1 === 'Papel' && jugador2 === 'Piedra') ||
        (jugador1 === 'Tijera' && jugador2 === 'Papel')
    ) {
        console.log('Jugador 1 gana.');
    } else {
        console.log('Jugador 2 gana.');
    }
}

// Ejemplo de uso
jugarPiedraPapelTijera();
```

**Salida esperada:** (varía debido a la aleatoriedad)
```
Jugador 1 elige: Piedra
Jugador 2 elige: Tijera
Jugador 1 gana.

Jugador 1 elige: Papel
Jugador 2 elige: Papel
Es un empate.
```
