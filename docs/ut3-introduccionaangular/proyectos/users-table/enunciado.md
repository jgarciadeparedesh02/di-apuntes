# **Gestión de Usuarios con Formulario Reactivo y Comunicación entre Componentes**

## **Descripción del Proyecto**:
Este proyecto consiste en crear una aplicación básica en Angular para la **gestión de usuarios**. El objetivo principal es aprender a utilizar **Reactive Forms** para gestionar un formulario de registro y, además, manejar la **comunicación entre componentes** (padre-hijo) para pasar datos del formulario desde el componente hijo (donde se rellena) al componente padre (donde se muestra la lista de usuarios registrados).

## **Objetivos**:
1. **Implementar un formulario reactivo** con validaciones usando `ReactiveFormsModule`.
2. **Realizar la comunicación entre componentes**:
   - El **componente hijo** se encargará de contener el formulario reactivo.
   - El **componente padre** mostrará una lista de usuarios registrados, obtenidos desde el componente hijo.
3. Utilizar `@Input()` y `@Output()` para el **intercambio de datos** entre los componentes.
4. Manejar **validaciones de formulario** tanto de campos obligatorios como de reglas específicas (ej. longitud mínima de la contraseña).

## **Requisitos**:
- Crear dos componentes:
  1. **Componente Padre (`UserListComponent`)**: Muestra una lista de los usuarios registrados.
  2. **Componente Hijo (`UserFormComponent`)**: Contiene el formulario de registro de usuarios.
  
- El formulario tendrá los siguientes campos:
  - **Nombre**: campo obligatorio, mínimo 3 caracteres.
  - **Correo electrónico**: campo obligatorio, debe seguir el formato de un correo válido.
  - **Contraseña**: campo obligatorio, mínimo 6 caracteres.
  
- El formulario estará deshabilitado hasta que todos los campos sean válidos.
- Una vez el formulario se envíe correctamente, se enviarán los datos del nuevo usuario al **componente padre** para que se agregue a la lista de usuarios.

## **Flujo del Proyecto**:
1. El **usuario** rellena el formulario en el **componente hijo** (`UserFormComponent`).
2. Al enviar el formulario, los datos del usuario se pasan al **componente padre** (`UserListComponent`) mediante un evento personalizado (`@Output`).
3. El **componente padre** recibe los datos y los agrega a una lista visible en la interfaz.
