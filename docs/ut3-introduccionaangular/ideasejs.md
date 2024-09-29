Aquí tienes 10 ideas de ejercicios enfocados en la creación de componentes con Angular, utilizando `*ngIf`, `*ngFor`, y servicios (`services`). Estos ejercicios están diseñados para que los estudiantes practiquen cómo crear componentes, gestionar el estado de la aplicación, y manipular datos mediante directivas estructurales y servicios.

### Ejercicios para Practicar Componentes, `*ngIf`, `*ngFor`, y Servicios

1. **Lista de Tareas Pendientes (To-Do List):**
   - **Objetivo:** Crear una aplicación de lista de tareas donde se puedan añadir, mostrar y eliminar tareas.
   - **Detalles:**
     - Crear un componente para la lista de tareas y otro para añadir nuevas tareas.
     - Utilizar `*ngFor` para mostrar la lista de tareas y `*ngIf` para mostrar un mensaje si la lista está vacía.
     - Crear un servicio para gestionar las tareas (añadir, obtener y eliminar).

2. **Galería de Imágenes Dinámica:**
   - **Objetivo:** Mostrar una galería de imágenes obtenida desde un servicio.
   - **Detalles:**
     - Crear un servicio que devuelva un array de URLs de imágenes.
     - Utilizar `*ngFor` para mostrar las imágenes y `*ngIf` para mostrar un mensaje cuando no haya imágenes.
     - Añadir funcionalidad para ocultar o mostrar imágenes utilizando `*ngIf`.

3. **Gestor de Productos de una Tienda:**
   - **Objetivo:** Crear un componente para gestionar productos de una tienda con opciones para añadir y eliminar productos.
   - **Detalles:**
     - Crear un servicio que gestione los productos (simular una API).
     - Usar `*ngFor` para mostrar la lista de productos y `*ngIf` para mostrar un mensaje de "No hay productos" cuando la lista esté vacía.
     - Añadir botones para añadir nuevos productos y eliminarlos.

4. **Tabla de Usuarios con Filtro:**
   - **Objetivo:** Crear una tabla de usuarios que permita filtrar los datos obtenidos de un servicio.
   - **Detalles:**
     - Crear un servicio que devuelva un listado de usuarios.
     - Usar `*ngFor` para renderizar los usuarios en una tabla.
     - Utilizar `*ngIf` para mostrar u ocultar filas basadas en un filtro de búsqueda.

5. **Componentes de Comentarios con Respuestas:**
   - **Objetivo:** Crear un sistema de comentarios donde cada comentario puede tener respuestas anidadas.
   - **Detalles:**
     - Usar `*ngFor` para mostrar comentarios y subcomentarios.
     - Crear un servicio que gestione los comentarios y respuestas.
     - Usar `*ngIf` para mostrar un formulario de respuesta debajo de cada comentario.

6. **Panel de Control de Visibilidad de Elementos:**
   - **Objetivo:** Crear un panel que permita alternar la visibilidad de diferentes secciones.
   - **Detalles:**
     - Crear varios componentes (como estadísticas, gráficos, reportes).
     - Utilizar `*ngIf` para mostrar u ocultar cada sección según las opciones seleccionadas en el panel de control.
     - Gestionar el estado de visibilidad con un servicio.

7. **Encuesta Dinámica:**
   - **Objetivo:** Desarrollar un componente de encuesta donde las preguntas y opciones se gestionen mediante servicios.
   - **Detalles:**
     - Crear un servicio que proporcione las preguntas y opciones.
     - Usar `*ngFor` para mostrar cada pregunta con sus opciones.
     - Mostrar un mensaje con `*ngIf` cuando la encuesta esté completada.

8. **Cartera de Inversiones:**
   - **Objetivo:** Crear un componente para mostrar una cartera de inversiones con datos obtenidos de un servicio.
   - **Detalles:**
     - Utilizar un servicio para obtener la lista de inversiones.
     - Mostrar los datos de inversiones con `*ngFor`.
     - Utilizar `*ngIf` para mostrar mensajes como "No hay inversiones activas".

9. **Listado de Eventos con Detalles:**
   - **Objetivo:** Mostrar un listado de eventos y permitir ver más detalles de cada evento.
   - **Detalles:**
     - Crear un servicio que devuelva eventos (nombre, fecha, descripción).
     - Usar `*ngFor` para mostrar los eventos y `*ngIf` para mostrar los detalles cuando se selecciona un evento específico.
     - Agregar funcionalidad para ocultar o mostrar detalles utilizando `*ngIf`.

10. **Catálogo de Libros:**
    - **Objetivo:** Desarrollar un catálogo de libros donde se muestren los libros disponibles y se puedan agregar nuevos.
    - **Detalles:**
      - Crear un servicio para gestionar los libros (obtener, añadir y eliminar).
      - Mostrar los libros con `*ngFor` y utilizar `*ngIf` para mostrar un mensaje si no hay libros disponibles.
      - Implementar botones para eliminar libros y formularios para agregar nuevos.

Estos ejercicios son excelentes para que los estudiantes practiquen la creación y manipulación de componentes en Angular, además de la interacción con servicios y la utilización de `*ngIf` y `*ngFor` para gestionar la visualización de datos en la interfaz.