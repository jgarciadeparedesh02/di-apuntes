# Añadiendo Compatibilidad Móvil a Nuestra Galería de Fotos 📲

Nuestra app de galería de fotos aún no está completa hasta que pueda ejecutarse en iOS, Android y la web con una única base de código. Con algunos cambios de lógica específicos para plataformas y la instalación de herramientas nativas, podremos desplegar la app en dispositivos móviles. ¡Vamos a ello!

---

## Importación de la API de Platform de Ionic 🌐

Empezaremos haciendo unos pequeños cambios en el código para detectar la plataforma en la que se ejecuta la aplicación (web o móvil). Esto nos ayudará a adaptar la lógica en función del dispositivo.

1. **Importar la API de Platform**: En `photo.service.ts`, importamos `Platform` para identificar el tipo de dispositivo en el que se ejecuta la app y adaptamos el constructor de `PhotoService` para usar esta plataforma.

   ```typescript
   import { Platform } from '@ionic/angular';

   export class PhotoService {
     public photos: UserPhoto[] = [];
     private PHOTO_STORAGE: string = 'photos';
     private platform: Platform;

     constructor(platform: Platform) {
       this.platform = platform;
     }
   }
   ```

---

## Lógica Específica para Cada Plataforma 📲

### 1. Actualizar la Función `readAsBase64`

La función `readAsBase64` se encarga de convertir las fotos a formato base64. Modificaremos esta función para que use el método `Filesystem.readFile()` en dispositivos móviles (donde la plataforma es "hybrid") y `fetch()` en la web.

   ```typescript
   private async readAsBase64(photo: Photo) {
     if (this.platform.is('hybrid')) {
       const file = await Filesystem.readFile({
         path: photo.path!
       });

       return file.data;
     } else {
       const response = await fetch(photo.webPath!);
       const blob = await response.blob();

       return await this.convertBlobToBase64(blob) as string;
     }
   }
   ```

### 2. Actualizar la Función `savePicture`

En el método `savePicture`, cuando la app corre en un dispositivo móvil, configuramos `filepath` como el resultado de `writeFile()` y `webviewPath` usando `Capacitor.convertFileSrc()`. En la web, mantenemos el uso de `webPath`.

   ```typescript
   private async savePicture(photo: Photo) {
     const base64Data = await this.readAsBase64(photo);

     const fileName = Date.now() + '.jpeg';
     const savedFile = await Filesystem.writeFile({
       path: fileName,
       data: base64Data,
       directory: Directory.Data
     });

     if (this.platform.is('hybrid')) {
       return {
         filepath: savedFile.uri,
         webviewPath: Capacitor.convertFileSrc(savedFile.uri),
       };
     } else {
       return {
         filepath: fileName,
         webviewPath: photo.webPath
       };
     }
   }
   ```

> **Nota**: `Capacitor.convertFileSrc()` convierte el URI de archivo en un URI compatible con webview, esencial para mostrar imágenes en dispositivos móviles.

### 3. Actualizar la Función `loadSaved`

En dispositivos móviles, podemos configurar directamente el atributo `src` de las imágenes, por lo que no necesitamos convertirlas a base64. En la web, continuamos usando la lógica de `Filesystem.readFile()` para cargar las imágenes en base64. 

   ```typescript
   public async loadSaved() {
     const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
     this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

     if (!this.platform.is('hybrid')) {
       for (let photo of this.photos) {
         const readFile = await Filesystem.readFile({
           path: photo.filepath,
           directory: Directory.Data
         });

         photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
       }
     }
   }
   ```

---

## Conclusión 📌

Con estos cambios, nuestra galería de fotos ahora puede ejecutarse en **web, Android y iOS** desde un solo código base. Hemos ajustado la lógica para que las fotos se almacenen y se muestren correctamente en cada plataforma, ya sea en base64 para la web o mediante rutas nativas en dispositivos móviles. 

El siguiente paso es desplegar la aplicación en un dispositivo móvil y ver nuestra galería en acción en Android y iOS. ¡Vamos a por ello! 🎉