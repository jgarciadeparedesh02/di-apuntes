### Tarea: Batalla Pokémon con Clases y Métodos Personalizables

En esta tarea, crearás un sistema de batalla Pokémon utilizando una clase general en TypeScript. Los Pokémon se modelarán a partir de una única clase con propiedades y métodos, donde cada instancia de Pokémon puede tener diferentes características y movimientos personalizados. Se introducirá una lógica de control de Pokémon por el usuario y ataques automáticos del oponente.

#### Instrucciones:

1. **Define una clase general `Pokemon`:**

   - Esta clase debe incluir propiedades como `nombre`, `hp` (puntos de vida), `hpMax` (puntos de vida máximos), `ataque`, `defensa`, y un array de `movimientos` que contiene objetos con el nombre del ataque y el daño asociado.
   - Incluye un método `atacar()` que reciba un oponente y un movimiento como argumentos. El método debe calcular el daño basado en el ataque del Pokémon, la defensa del oponente, y el daño del movimiento seleccionado.
   - Incluye un método `curar()` que permita al Pokémon recuperar una cantidad fija de HP, siempre que su HP actual no sea igual a `hpMax`.

2. **Crea un JSON con una lista de Pokémon disponibles:**

   - Define un archivo JSON con diferentes Pokémon, cada uno con sus atributos (`nombre`, `hp`, `ataque`, `defensa`, `movimientos`, etc.).
   - Al iniciar la batalla, se seleccionará aleatoriamente un Pokémon para el usuario y uno para el oponente de esta lista.

3. **Implementa la lógica de simulación de batalla:**

   - Los jugadores (o el sistema) pueden elegir movimientos en cada turno, que incluyen atacar con un movimiento específico o curarse.
   - El jugador elige los ataques manualmente, mientras que el oponente selecciona sus ataques de forma aleatoria.
   - La batalla continúa hasta que uno de los Pokémon sea derrotado (su HP llegue a 0 o menos).

4. **Crea una función que maneje el flujo del juego:**
   - Muestra el estado actual de los Pokémon en cada turno.
   - Permite al jugador seleccionar un movimiento y aplica la lógica de combate.
   - El Pokémon del oponente elige sus ataques de manera aleatoria.
   - Verifica si alguno de los Pokémon ha sido derrotado y declara un ganador.

#### Explicación del Flujo de Cada Turno:

1. **Inicio del Turno:**

   - Se muestra el estado actual de ambos Pokémon, incluyendo su nombre y puntos de vida (HP).

2. **Selección de Acción del Usuario:**

   - El usuario selecciona un movimiento disponible de su Pokémon o decide curarse.
   - Si el usuario selecciona "curar" y el HP del Pokémon ya está al máximo, se le notifica que elige otra acción.

3. **Aplicación del Movimiento del Usuario:**

   - Si el usuario selecciona un ataque, se aplica el daño correspondiente al oponente.
   - Si selecciona "curar", el Pokémon recupera una cantidad fija de HP.

4. **Acción del Oponente:**

   - El Pokémon oponente elige su movimiento de manera aleatoria entre sus movimientos disponibles.
   - Se aplica el movimiento seleccionado contra el Pokémon del usuario.

5. **Comprobación de Fin de Batalla:**
   - Después de cada turno, se verifica si alguno de los Pokémon ha sido derrotado (HP ≤ 0). Si es así, se declara al ganador y termina la batalla.

#### Ejemplo de JSON de Pokémon:

```json
[
  {
    "nombre": "Pikachu",
    "hp": 100,
    "hpMax": 100,
    "ataque": 35,
    "defensa": 20,
    "movimientos": [
      { "nombre": "Impactrueno", "daño": 20 },
      { "nombre": "Rayo", "daño": 50 },
      { "nombre": "Ataque Rápido", "daño": 15 }
    ]
  },
  {
    "nombre": "Charmander",
    "hp": 100,
    "hpMax": 100,
    "ataque": 30,
    "defensa": 25,
    "movimientos": [
      { "nombre": "Ascuas", "daño": 15 },
      { "nombre": "Llamarada", "daño": 45 },
      { "nombre": "Garra Dragón", "daño": 20 }
    ]
  },
  {
    "nombre": "Bulbasaur",
    "hp": 110,
    "hpMax": 110,
    "ataque": 32,
    "defensa": 28,
    "movimientos": [
      { "nombre": "Látigo Cepa", "daño": 25 },
      { "nombre": "Bomba Germen", "daño": 40 },
      { "nombre": "Drenadoras", "daño": 10 }
    ]
  }
]
```

#### Consideraciones:

- Utiliza una única clase `Pokemon` para crear diferentes Pokémon con configuraciones personalizadas.
- Emplea condicionales y bucles para manejar la lógica del combate y determinar el ganador.
- Asegúrate de que los métodos como `atacar()` y `curar()` funcionen correctamente, considerando los atributos del Pokémon y el daño del movimiento.
- La selección aleatoria de los ataques del oponente debe estar bien implementada para que la simulación sea realista.

#### Recursos extra:

- Si se desea pintar a los pokemon elegidos, puede hacerse mediante texto. Mirar esta página: https://emojicombos.com/pikachu-text-art
