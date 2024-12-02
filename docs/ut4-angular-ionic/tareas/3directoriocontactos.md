# **Directorio de Contactos:**
Crea una aplicación en **Angular con Ionic** para gestionar un directorio de contactos. La aplicación debe incluir funcionalidades de **búsqueda dinámica** y **filtros rápidos** para mejorar la experiencia del usuario.


## **Requisitos de Funcionalidad:**

1. **Routing:**
   - **Página Principal (home):**
     - Lista todos los contactos en formato de cards.
     - Incluye una barra de búsqueda en la parte superior para filtrar los contactos por nombre o email.
     - Agrega filtros rápidos (botones) para mostrar contactos etiquetados como:
       - **Amigos**
       - **Familia**
       - **Trabajo**
     - Combina búsqueda y filtros para refinar los resultados.
   - **Página de Detalles (contact-detail/:id):**
     - Muestra información detallada de un contacto seleccionado, incluyendo:
       - Nombre
       - Foto (o avatar si no tiene foto)
       - Email
       - Teléfono
       - Notas adicionales
     - Proporciona botones para acciones rápidas:
       - Llamar
       - Enviar correo
       - Editar contacto
   - **Página para Agregar Contacto (add-contact):**
     - Permite al usuario agregar un nuevo contacto.
     - Los campos incluyen:
       - Nombre
       - Foto (subida desde el dispositivo o generada automáticamente)
       - Email
       - Número de teléfono
       - Categoría (Amigos, Familia, Trabajo)
       - Notas opcionales.

---

**Diseño de Cards:**
- Cada contacto debe mostrarse como una **IonCard** que incluya:
  - **Foto circular** o un avatar con las iniciales si no hay foto disponible.
  - **Nombre completo** del contacto.
  - **Email** y **teléfono** visibles.
  - Íconos para acciones rápidas (llamar, editar) que se muestren al deslizar o interactuar con la card.
- Añade **animaciones** suaves al cargarse o al realizar una acción (e.g., eliminar contacto).

---

**Funcionalidades Clave:**
1. **Búsqueda Dinámica:**
   - La barra de búsqueda actualiza la lista en tiempo real según lo que el usuario escribe.
   - Permite buscar por:
     - Nombre
     - Email

2. **Filtros Rápidos:**
   - Justo debajo de la barra de búsqueda, agrega botones para filtrar contactos:
     - "Amigos", "Familia", "Trabajo".
   - Implementa la lógica para combinar los filtros con la búsqueda.

3. **Categorías y Secciones:**
   - Agrupa los contactos en categorías con encabezados claros para "Amigos", "Familia" y "Trabajo".
   - Asegúrate de que los contactos estén organizados alfabéticamente dentro de cada sección.

4. **Resaltado de Resultados:**
   - Al realizar una búsqueda, resalta los términos coincidentes dentro de las cards.

---

**Tecnología y Detalles Técnicos:**
- **Barra de Búsqueda:**
  - Usa un `(ionInput)` para capturar el texto ingresado y actualiza dinámicamente los resultados.
  - Utiliza pipes o funciones en el componente principal para filtrar la lista.

- **Filtros Rápidos:**
  - Implementa botones con eventos `(click)` que modifiquen una propiedad de filtro en el estado de la aplicación.
  - Combina la lógica de filtros con la búsqueda para devolver resultados refinados.

- **Diseño Responsivo:**
  - Asegúrate de que la aplicación funcione correctamente en dispositivos móviles y tablets.

---

**Resultado Esperado:**
Una aplicación funcional y estéticamente atractiva que permita a los usuarios gestionar fácilmente sus contactos con herramientas avanzadas como búsqueda en tiempo real, filtros intuitivos y acciones rápidas desde las cards.

Usa **Ionic Framework** para los componentes de interfaz y asegúrate de aplicar buenas prácticas en el desarrollo con Angular. 🎯