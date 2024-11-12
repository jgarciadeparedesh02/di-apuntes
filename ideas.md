# Ideas 

### **Idea de Proyecto: Plataforma de Cursos Online con Routing en Angular**

#### **Descripción del Proyecto**
El objetivo de este proyecto es crear una **plataforma de cursos online** utilizando **Angular**. En esta plataforma, los usuarios pueden ver una lista de cursos, navegar entre los detalles de cada curso, e inscribirse en ellos. El proyecto hará uso de **Angular Routing** para gestionar la navegación entre diferentes vistas, como la lista de cursos, el perfil del usuario, la página de detalles de un curso, y la página de inscripción.

#### **Funcionalidades del Proyecto**
1. **Home (Página Principal)**: La página principal muestra un listado general de los cursos disponibles.
2. **Detalles del Curso**: Al hacer clic en un curso, se navega a una página de detalles que muestra información más detallada del curso seleccionado.
3. **Perfil del Usuario**: Una página que muestra el perfil del usuario registrado, donde puede ver su información personal y los cursos en los que está inscrito.
4. **Inscripción al Curso**: Un formulario donde el usuario puede inscribirse en un curso.
5. **Páginas de Error**: Manejo de rutas no existentes con una página de error 404 personalizada.

#### **Estructura de Rutas en el Proyecto**
Aquí se define cómo se estructuran las rutas utilizando el **Angular Router**.

1. **Rutas principales**:
   - `/home`: Muestra la lista de cursos.
   - `/courses/:id`: Muestra los detalles del curso específico usando un parámetro dinámico (ID del curso).
   - `/profile`: Muestra el perfil del usuario registrado.
   - `/enroll/:id`: Muestra el formulario de inscripción para el curso con el ID especificado.
   - `**`: Ruta comodín para mostrar una página de error 404 cuando se intenta acceder a una ruta que no existe.