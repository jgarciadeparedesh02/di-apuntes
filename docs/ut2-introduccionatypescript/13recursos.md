# 🛠️ Guía para Debuggear TypeScript en Visual Studio Code

### 1️⃣ **Configura el Proyecto de TypeScript**

Para comenzar, necesitas configurar tu proyecto de TypeScript para que esté listo para ser depurado. Esto se hace utilizando un archivo `tsconfig.json` que configura el compilador de TypeScript.

**Abre tu proyecto en VS Code**: Si aún no tienes un proyecto, crea una carpeta nueva y ábrela en VS Code.

**Abre la Terminal Integrada**: Puedes abrir la terminal integrada de VS Code presionando `Ctrl + \`` (Windows/Linux) o `Cmd + \`` (Mac).

**Ejecuta `tsc --init` para crear el archivo `tsconfig.json`**:

   ```bash
   tsc --init
   ```

Este comando generará un archivo `tsconfig.json` en la raíz de tu proyecto.

**Configura el archivo `tsconfig.json`**:

   Abre el archivo `tsconfig.json` generado y asegúrate de que contenga las siguientes configuraciones:

   ```json
   {
     "compilerOptions": {
       "target": "es2016",                // Versión de ECMAScript de destino
       "module": "commonjs",              // Módulo común para Node.js
       "strict": true,                    // Activa las verificaciones estrictas de TypeScript
       "esModuleInterop": true,           // Interoperabilidad de módulos ES
       "forceConsistentCasingInFileNames": true, // Consistencia de mayúsculas y minúsculas en nombres de archivo
       "skipLibCheck": true,              // Omite la verificación de tipos en archivos de definición de bibliotecas
       "sourceMap": true                  // Importante: Habilita los mapas de origen para depuración
     }
   }
   ```

   - **Importante**: La propiedad `"sourceMap": true` es crucial para el debugging. Esta propiedad permite que el depurador de VS Code mapee el código JavaScript compilado de vuelta al código TypeScript original, facilitando la depuración.

### 2️⃣ **Escribe un Código de Ejemplo para Debuggear**

Para verificar que todo funciona correctamente, crea un archivo TypeScript simple en la raíz de tu proyecto. Por ejemplo, crea un archivo llamado `extra-ejercicios-basicos-sol.ts` y añade el siguiente código:

```typescript
function suma(a: number, b: number): number {
  return a + b;
}

function mostrarResultado(): void {
  const resultado = suma(5, 10);
  console.log(`El resultado de la suma es: ${resultado}`);
}

mostrarResultado();
```

Este código define una función `suma` y otra función `mostrarResultado` que llama a `suma` y muestra el resultado.

### 3️⃣ **Compila el Código TypeScript**

Compila el código TypeScript a JavaScript usando el siguiente comando en la terminal integrada de VS Code:

```bash
tsc
```

Esto generará un archivo JavaScript correspondiente (`extra-ejercicios-basicos-sol.js`) en la misma carpeta, a menos que hayas configurado una carpeta de salida (`outDir`) en `tsconfig.json`.

### 4️⃣ **Configura el Archivo `launch.json` para la Depuración**

1. **Crea la Carpeta `.vscode`**: Si no existe ya, crea una carpeta llamada `.vscode` en la raíz de tu proyecto.

2. **Crea el Archivo `launch.json`**: Dentro de la carpeta `.vscode`, crea un archivo llamado `launch.json`.

3. **Configura el Archivo `launch.json`**: Añade la siguiente configuración al archivo `launch.json`:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",                         // Tipo de depuración
         "request": "launch",                    // Tipo de solicitud de depuración
         "name": "Launch Program",               // Nombre de la configuración
         "program": "${workspaceFolder}/extra-ejercicios-basicos-sol.ts",  // Ruta al archivo TypeScript
         "preLaunchTask": "tsc: build - tsconfig.json", // Tarea de compilación antes de lanzar la depuración
         "outFiles": [
           "${workspaceFolder}/**/*.js"          // Coincide con los archivos JavaScript generados
         ]
       }
     ]
   }
   ```

   - **`type`**: Especifica que el depurador es para Node.js.
   - **`request`**: `launch` indica que se iniciará un programa.
   - **`program`**: Ruta al archivo TypeScript que deseas depurar.
   - **`preLaunchTask`**: Compila el código TypeScript antes de iniciar la depuración.
   - **`outFiles`**: Permite al depurador encontrar los archivos `.js` generados por TypeScript.

### 5️⃣ **Ejecuta la Depuración en Visual Studio Code**

1. **Agrega Puntos de Interrupción (Breakpoints)**: Abre el archivo `extra-ejercicios-basicos-sol.ts` y haz clic en la barra de la izquierda junto a los números de línea para agregar un **punto de interrupción**. Por ejemplo, puedes agregar un breakpoint en la línea donde se llama a `console.log`.

2. **Inicia la Depuración**: Ve a la vista de depuración (presiona `Ctrl + Shift + D` o `Cmd + Shift + D` en Mac), selecciona "Launch Program" en el menú desplegable y haz clic en el botón de inicio (`▶️`) o presiona `F5`.

3. **Inspecciona el Código durante la Depuración**: Cuando la ejecución se detenga en el punto de interrupción, podrás inspeccionar variables, evaluar expresiones en la **Consola de Depuración**, y navegar por el **stack de llamadas**.

### 6️⃣ **Aprovecha los Mapas de Origen (Source Maps)**

Gracias a la opción `"sourceMap": true` en `tsconfig.json`, VS Code podrá mapear el código JavaScript compilado al TypeScript original, lo que facilita la depuración.

- **Ver el Código Original**: Durante la depuración, VS Code mostrará el archivo `.ts` original en lugar del archivo `.js` compilado, lo que permite que los breakpoints, la navegación y las inspecciones se realicen directamente en el código TypeScript.

### 7️⃣ **Consejos para un Debugging Efectivo**

- **Usa "Step Over" (F10) y "Step Into" (F11)** para navegar por el código línea a línea o entrar en funciones.
- **Explora el Call Stack**: Te ayuda a ver la ruta que siguió la ejecución del código.
- **Utiliza la Consola de Depuración** para evaluar expresiones y cambiar variables en tiempo real.

### 🌟 ¡Y Listo!

Siguiendo estos pasos, ahora tienes un entorno de depuración completamente configurado en Visual Studio Code para trabajar con TypeScript. Esta configuración te permitirá depurar de manera eficiente y encontrar errores en tu código mucho más rápido. ¡Feliz debugging! 🐞💪