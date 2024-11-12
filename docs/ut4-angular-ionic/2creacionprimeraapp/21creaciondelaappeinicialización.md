# ¡Tu Primera App con Ionic y Angular 18! 🚀

Ionic nos permite construir aplicaciones para cualquier plataforma (iOS, Android y web) desde una sola base de código utilizando HTML, CSS y JavaScript. En este tutorial, te guiaremos paso a paso para crear una aplicación de galería de fotos, explorando los fundamentos del desarrollo con Ionic y Angular.

---

## ¿Qué Vamos a Construir? 🖼️📸

Crearemos una **app de Galería de Fotos** que permita:

- Tomar fotos con la cámara del dispositivo.
- Mostrar las fotos en una cuadrícula.
- Guardarlas de manera permanente en el dispositivo.

La aplicación será capaz de correr en la web, iOS y Android gracias a los componentes de Ionic y Capacitor, el runtime nativo oficial de Ionic.

---

## Descarga de Herramientas Necesarias 🛠️

Antes de empezar, instala las siguientes herramientas para garantizar una experiencia óptima en el desarrollo con Ionic:

- **Node.js**: Necesario para interactuar con el ecosistema de Ionic.
- **Editor de código**: Como Visual Studio Code, para escribir y gestionar el código.
- **Interfaz de línea de comandos (CLI)**: Para usuarios de Windows, recomendamos usar PowerShell o cmd en modo Administrador; en Mac/Linux, cualquier terminal es suficiente.

---

## Instalación de las Herramientas de Ionic 🚀

En la terminal, instala el CLI de Ionic junto con herramientas adicionales necesarias para ejecutar y generar iconos nativos:

```bash
npm install -g @ionic/cli native-run cordova-res
```

> **Nota:** La opción `-g` indica que se instalarán globalmente. Si experimentas errores de permisos, revisa la configuración global de `npm`.

---

## Crear una Nueva App en Ionic 📱

Vamos a iniciar una app de Ionic Angular utilizando la plantilla “Tabs” y añadiendo Capacitor para la funcionalidad nativa.

```bash
ionic start photo-gallery tabs --type=angular --capacitor
```

> **Nota**: Selecciona la opción `NgModules` cuando se te pregunte entre `NgModules` y `Standalone`.

Una vez creada la aplicación, accede a la carpeta de tu proyecto:

```bash
cd photo-gallery
```

---

## Agregar Plugins de Capacitor 🔌

Para habilitar las funcionalidades nativas (como el uso de la cámara), instala los plugins necesarios:

```bash
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

---

## Ionic PWA Elements ⚙️

Algunos plugins de Capacitor, como el de la cámara, requieren la librería **Ionic PWA Elements** para funcionar en la web. Instálala de la siguiente forma:

```bash
npm install @ionic/pwa-elements
```

Luego, importa esta dependencia en `src/main.ts` para que esté disponible en tu app:

```javascript
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
```

---

## Ejecuta la App 🚀

¡Hora de ver la app en acción! Ejecuta el siguiente comando para iniciar la app en tu navegador web:

```bash
ionic serve
```

¡Y voilà! Verás tu aplicación Ionic en el navegador, lista para ser probada y editada.

---

## Construyendo la Galería de Fotos 📸

  1. **Configuración de la Interfaz**: La aplicación incluye tres pestañas por defecto. Navega a la pestaña “Tab2” para usarla como nuestra galería de fotos.
  2. **Actualización del Título**: Cambia el título de esta pestaña para reflejar su propósito. Navega al archivo `/src/app/tab2/tab2.page.html` y cambia `<ion-title>` a “Photo Gallery”.
   ```html
   <ion-title>Photo Gallery</ion-title>
   ```
  3. **Agregar el Botón de Cámara**: Para abrir la cámara, agrega un botón de acción flotante (FAB) en el contenido de la página. Este botón usará un ícono de cámara que aparecerá en la parte inferior de la pantalla.
   ```html
   <ion-content>
     <ion-fab vertical="bottom" horizontal="center" slot="fixed">
       <ion-fab-button>
         <ion-icon name="camera"></ion-icon>
       </ion-fab-button>
     </ion-fab>
   </ion-content>
   ```
  4. **Actualización de la Barra de Navegación**: Cambia el ícono y la etiqueta de la pestaña. En el archivo `src/app/tabs/tabs.page.html`, cambia la etiqueta a “Photos” y el nombre del ícono a “images”.
   ```html
   <ion-tab-button tab="tab2">
     <ion-icon name="images"></ion-icon>
     <ion-label>Photos</ion-label>
   </ion-tab-button>
   ```
Guarda todos los cambios y observa cómo se aplican automáticamente en el navegador gracias a la función de **recarga en vivo** (Live Reload) de Ionic.

---

## Conclusión 🏁

Acabamos de crear la base de una app de galería de fotos en Ionic con Angular 18. Esta es solo la introducción a las múltiples capacidades de Ionic y Angular en el desarrollo de aplicaciones híbridas. Ahora puedes seguir explorando y construyendo nuevas funcionalidades para transformar esta galería en una experiencia completa y robusta.