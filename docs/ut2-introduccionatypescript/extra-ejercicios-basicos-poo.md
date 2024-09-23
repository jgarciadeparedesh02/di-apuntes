# Ejercicios

### Programación Orientada a Objetos

#### 1. **Clase `Persona` y Método para Saludar**

Crea una clase llamada `Persona` que tenga las propiedades `nombre` (string) y `edad` (number). Incluye un método `saludar()` que muestre en la consola un mensaje como "Hola, mi nombre es [nombre] y tengo [edad] años". Instancia un objeto de la clase y llama al método `saludar()`.

**Pista:** Define las propiedades en el constructor de la clase y utiliza `this` para acceder a ellas dentro de los métodos.

#### 2. **Sistema de Gestión de Productos**

Crea una clase `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Luego, crea una clase `CarritoDeCompras` que tenga una lista de productos y métodos para agregar un producto, eliminar un producto y calcular el total del carrito. Muestra en la consola el contenido del carrito y el total después de agregar y eliminar productos.

**Pista:** Utiliza métodos como `agregarProducto(producto: Producto)`, `eliminarProducto(nombre: string)`, y `calcularTotal()`. Considera el uso de `Array.prototype.filter` y `Array.prototype.reduce` para manipular la lista de productos.

#### 3. **Herencia y Polimorfismo con Vehículos**

Crea una clase base `Vehiculo` con propiedades como `marca`, `modelo` y `velocidadMaxima`, y un método `acelerar()` que muestra la aceleración del vehículo en la consola. Luego, crea dos clases derivadas `Coche` y `Moto`, cada una con un método adicional único (`abrirMaletero()` para `Coche` y `hacerCaballito()` para `Moto`). Instancia objetos de ambas clases y demuestra el uso de la herencia y polimorfismo llamando a sus métodos.

**Pista:** Usa la palabra clave `extends` para la herencia y `super` para llamar al constructor de la clase base.

#### 4. **Sistema de Gestión de Estudiantes**

Crea una clase `Estudiante` con las propiedades `nombre`, `edad`, y `notas` (array de números). Incluye métodos para agregar una nota y calcular el promedio de las notas del estudiante. Luego, crea una clase `Curso` que gestione un grupo de estudiantes con métodos para agregar estudiantes y calcular el promedio general del curso.

**Pista:** Usa métodos como `agregarNota(nota: number)` para `Estudiante` y `calcularPromedio()` tanto para la clase `Estudiante` como `Curso`. Implementa un array para manejar la lista de estudiantes en la clase `Curso`.