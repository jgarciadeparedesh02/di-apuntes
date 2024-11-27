# **Tarea: Seguimiento de Películas o Series - Ampliación**

**Objetivo:**  
Crear una aplicación con funcionalidades avanzadas que permita a los usuarios gestionar de manera interactiva su lista de seguimiento de películas o series.  

---

## **Ampliación de la Tarea:**

### **Pantalla Principal**
1. **Interfaz de Usuario Ampliada**:
   - Cada película o serie debe estar contenida en un `ion-card` con un diseño más detallado que incluya:
     - Título (en negrita y con un tamaño de fuente destacado).
     - Descripción breve (con texto opcional recortado y un botón "Leer más").
     - Imagen destacada (placeholder o imagen cargada por el usuario).
     - Un `ion-checkbox` para marcar como "vista" (opcional: con animaciones al marcar/desmarcar).
     - Iconos para editar o eliminar (dentro del mismo card).
   - Opcional: agrega una sección destacada al inicio, como "Películas Recomendadas" o "Lo Más Visto".

2. **Navegación**:
   - Usa `ion-header` con un título fijo para la pantalla principal.
   - Añade un botón flotante o en el `ion-footer` que permita al usuario acceder rápidamente al formulario de "Añadir".

---

### **Funcionalidades Ampliadas**

1. **Edición de Elementos**:
   - Agrega un icono de edición en cada tarjeta que permita al usuario modificar el título, descripción o imagen de la película/serie.

2. **Orden y Filtros**:
   - Incluye un menú desplegable o `ion-segment` que permita al usuario filtrar la lista por:
     - Estado (Vistas/No Vistas).
     - Tipo (Película/Serie).
   - Opción para ordenar por fecha de adición o alfabéticamente.

3. **Confirmación de Eliminación**:
   - Al intentar eliminar un título, muestra un `ion-alert` para confirmar la acción.

4. **Detalles Ampliados**:
   - Permite que al tocar una película o serie, se abra una nueva página o modal con información detallada (sinopsis, fecha de estreno, etc.).

---

### **Formulario para Añadir/Editar**
1. **Componentes del Formulario**:
   - Campos básicos:
     - Título (input de texto).
     - Descripción (textarea o input largo).
     - Imagen (input tipo file o URL).
   - Campos opcionales:
     - Categoría (Película/Serie).
     - Fecha de estreno (selector de fecha).
     - Duración (en minutos).

2. **Validaciones**:
   - Validar que los campos obligatorios no estén vacíos.
   - Mostrar mensajes de error en tiempo real.

3. **Modal o Nueva Página**:
   - Implementa un modal o página separada para el formulario, que se abra al pulsar "Añadir" o "Editar".

---

### **Estilo y Diseño Mejorado**
1. **Colores y Estética**:
   - Define una paleta de colores que contraste entre elementos marcados como vistos y no vistos.
   - Usa transiciones suaves para cambios de estilo (por ejemplo, al marcar como visto).

2. **Componentes Personalizados**:
   - Aplica un diseño uniforme utilizando `ion-grid` y `ion-row` para organizar tarjetas en un diseño responsivo.
   - Estiliza el `ion-checkbox` con animaciones personalizadas.

3. **Compatibilidad Multidispositivo**:
   - Optimiza el diseño para que funcione correctamente en dispositivos móviles y tabletas.

---

### **Funcionalidades Avanzadas (Opcionales)**
1. **Integración con Almacenamiento Local**:
   - Usa `Storage` de Ionic para guardar la lista de películas o series localmente.
   - Implementa sincronización para mantener los datos persistentes incluso después de cerrar la aplicación.

---

### **Recomendaciones Técnicas**
- Usa `ion-list` con `virtual-scroll` para optimizar la lista si contiene muchos elementos.
- Para estilos avanzados, utiliza `SCSS` y aprovecha las variables CSS de Ionic para colores y tamaños.
- Documenta cada componente y funcionalidad para facilitar el mantenimiento del proyecto.

---

### **Estructura de Navegación**

1. **HomePage**: Lista de películas/series.
2. **AddEditPage**: Formulario para añadir/editar un título.
