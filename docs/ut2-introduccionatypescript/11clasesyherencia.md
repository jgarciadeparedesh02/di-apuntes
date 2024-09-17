# 🏛️ Clases y Herencia en TypeScript

En TypeScript, las **clases** son una forma poderosa de crear objetos y organizar el código en estructuras reutilizables y fáciles de mantener. Las clases permiten definir **propiedades**, **métodos**, y utilizar **herencia** para extender la funcionalidad de otras clases. También puedes definir propiedades como **privadas** o **públicas** para controlar el acceso a los datos. ¡Vamos a explorar estas características! 🚀

### 1️⃣ Declaración de Clases y Métodos

Una **clase** en TypeScript se define utilizando la palabra clave `class`. Dentro de una clase, puedes definir **propiedades** (datos) y **métodos** (funciones). Las clases son plantillas que describen cómo deben ser los objetos que se basan en ellas.

**Ejemplo de Declaración de Clase:**

```typescript
class Animal {
  nombre: string; // Propiedad

  constructor(nombre: string) {
    this.nombre = nombre; // Inicialización de la propiedad
  }

  hacerSonido(): void { // Método
    console.log(`${this.nombre} hace un sonido. 🐾`);
  }
}

const miAnimal = new Animal("Elefante");
miAnimal.hacerSonido(); // Elefante hace un sonido. 🐾
```

En este ejemplo, hemos declarado una clase `Animal` con una propiedad `nombre` y un método `hacerSonido()`. El constructor se usa para inicializar las propiedades de la clase cuando se crea una nueva instancia del objeto. 🏗️

### 2️⃣ Propiedades Privadas y Públicas

En TypeScript, puedes definir propiedades y métodos como **públicos** (`public`) o **privados** (`private`). Las propiedades y métodos **públicos** son accesibles desde fuera de la clase, mientras que los **privados** solo son accesibles dentro de la propia clase.

**Propiedades Públicas y Privadas:**

```typescript
class Persona {
  public nombre: string; // Propiedad pública
  private edad: number;  // Propiedad privada

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public saludar(): void {
    console.log(`Hola, soy ${this.nombre} 👋`);
  }

  private mostrarEdad(): void {
    console.log(`Tengo ${this.edad} años.`);
  }

  public informacionCompleta(): void {
    this.saludar();
    this.mostrarEdad(); // Llamada a método privado dentro de la clase
  }
}

const persona1 = new Persona("Carlos", 30);
persona1.saludar(); // Hola, soy Carlos 👋
// persona1.mostrarEdad(); ❌ Error: 'mostrarEdad' es privado y no accesible fuera de la clase
persona1.informacionCompleta(); // Hola, soy Carlos 👋 Tengo 30 años.
```

En este ejemplo, `nombre` es una propiedad pública y `edad` es privada. Los métodos públicos como `saludar()` pueden ser llamados desde fuera de la clase, pero los métodos privados como `mostrarEdad()` solo se pueden usar dentro de la propia clase. 🔒

### 3️⃣ Herencia y Clases Abstractas

La **herencia** es un principio clave de la programación orientada a objetos que permite a una clase derivar de otra clase, heredando todas sus propiedades y métodos. TypeScript también soporta **clases abstractas**, que actúan como plantillas para otras clases.

#### 🔹 Herencia

Para heredar de una clase, utiliza la palabra clave `extends`. La clase derivada puede agregar nuevas propiedades o métodos y también puede sobrescribir los métodos existentes.

**Ejemplo de Herencia:**

```typescript
class Animal {
  constructor(public nombre: string) {}

  hacerSonido(): void {
    console.log(`${this.nombre} hace un sonido. 🐾`);
  }
}

class Perro extends Animal {
  constructor(nombre: string) {
    super(nombre); // Llamada al constructor de la clase padre
  }

  hacerSonido(): void { // Sobrescribe el método de la clase padre
    console.log(`${this.nombre} ladra: ¡Guau guau! 🐕`);
  }
}

const miPerro = new Perro("Max");
miPerro.hacerSonido(); // Max ladra: ¡Guau guau! 🐕
```

En este ejemplo, la clase `Perro` **extiende** la clase `Animal`, heredando su propiedad `nombre` y su método `hacerSonido()`, que luego sobrescribe con un comportamiento específico para perros. 🐶

#### 🔹 Clases Abstractas

Una **clase abstracta** es una clase que no puede ser instanciada directamente. Sirve como plantilla para otras clases que la extienden. Una clase abstracta puede contener métodos abstractos (sin implementación) que deben ser implementados por las clases derivadas.

**Ejemplo de Clase Abstracta:**

```typescript
abstract class Vehiculo {
  constructor(public marca: string) {}

  abstract moverse(): void; // Método abstracto, sin implementación

  mostrarMarca(): void {
    console.log(`Este vehículo es un ${this.marca}. 🚗`);
  }
}

class Coche extends Vehiculo {
  constructor(marca: string) {
    super(marca);
  }

  moverse(): void { // Implementación del método abstracto
    console.log(`El ${this.marca} está conduciendo. 🛣️`);
  }
}

const miCoche = new Coche("Toyota");
miCoche.mostrarMarca(); // Este vehículo es un Toyota. 🚗
miCoche.moverse(); // El Toyota está conduciendo. 🛣️
```

En este ejemplo, `Vehiculo` es una clase abstracta con un método abstracto `moverse()` que debe ser implementado por cualquier clase que la extienda, como `Coche`. 🚙

### 🌟 ¡Resumen Rápido!

TypeScript ofrece potentes características de programación orientada a objetos:

- **Declaración de Clases y Métodos:** Crea plantillas de objetos con propiedades y métodos.
- **Propiedades Privadas y Públicas:** Controla el acceso a los datos dentro de las clases.
- **Herencia y Clases Abstractas:** Reutiliza código y establece contratos claros para las clases derivadas.

Estas características te permiten escribir código más modular, reutilizable y organizado. ¡Experimenta con las clases en TypeScript y lleva tu programación orientada a objetos al siguiente nivel! 💪
