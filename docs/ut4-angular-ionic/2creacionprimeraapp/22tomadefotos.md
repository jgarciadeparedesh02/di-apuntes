# Tomando Fotos con la Cámara en Ionic y Angular 18 📸

Ahora pasaremos a la parte divertida: añadir la capacidad de tomar fotos con la cámara del dispositivo usando la **API de Cámara de Capacitor**. Comenzaremos configurando la funcionalidad para la web y haremos algunos ajustes para que también funcione en dispositivos móviles (iOS y Android).

---

## Servicio de Fotos 📷

Para encapsular toda la lógica de Capacitor (uso de la cámara y otras características nativas), crearemos una clase de servicio. Este servicio, llamado **PhotoService**, manejará toda la interacción con la cámara y el almacenamiento de las fotos.

### Creación del Servicio de Fotos

Usa el siguiente comando en la terminal para generar el servicio:

```bash
ionic g service services/photo
```

Esto creará el archivo `photo.service.ts` en la carpeta `services`. Ahora, abramos este archivo y añadamos la lógica que habilitará la funcionalidad de la cámara.

1. **Importar Dependencias de Capacitor**: Comenzamos importando las dependencias necesarias de Capacitor para interactuar con la cámara, el sistema de archivos y las preferencias de almacenamiento.
   ```typescript
   import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
   import { Filesystem, Directory } from '@capacitor/filesystem';
   import { Preferences } from '@capacitor/preferences';
   ```
2. **Método `addNewToGallery`**: Creamos el método `addNewToGallery` en la clase `PhotoService`. Este método contendrá la lógica principal para abrir la cámara del dispositivo, tomar una foto y guardarla en el sistema de archivos.
   ```typescript
   public async addNewToGallery() {
     const capturedPhoto = await Camera.getPhoto({
       resultType: CameraResultType.Uri,
       source: CameraSource.Camera,
       quality: 100
     });
   }
   ```
> ⚠️ **Nota**: Con la API de Cámara de Capacitor, no necesitamos escribir código específico para cada plataforma (web, iOS o Android). Simplemente llamamos a `Camera.getPhoto()` para abrir la cámara del dispositivo.

---

## Integración del Servicio de Fotos en la Interfaz 📲

Para conectar este servicio con la interfaz de usuario, agregaremos un botón que active la cámara y capture la imagen.

1. **Importar el Servicio en `tab2.page.ts`**: Primero, importamos `PhotoService` y lo llamamos cuando el usuario quiera tomar una foto.
   ```typescript
   import { PhotoService } from '../services/photo.service';

   constructor(public photoService: PhotoService) { }

   addPhotoToGallery() {
     this.photoService.addNewToGallery();
   }
   ```
2. **Asociar el Botón de Cámara**: Abre el archivo `tab2.page.html` y agrega el siguiente botón de acción flotante (FAB) para activar la cámara al hacer clic:
   ```html
   <ion-content>
     <ion-fab vertical="bottom" horizontal="center" slot="fixed">
       <ion-fab-button (click)="addPhotoToGallery()">
         <ion-icon name="camera"></ion-icon>
       </ion-fab-button>
     </ion-fab>
   </ion-content>
   ```
Guarda los cambios y reinicia el servidor de desarrollo con `ionic serve`. Ahora, en la pestaña de Galería de Fotos, haz clic en el botón de cámara. Si tu computadora tiene una cámara, se abrirá una ventana para tomar una selfie. 

---

## Mostrando las Fotos en la Galería 🌄

Después de tomar una foto, vamos a mostrarla en la app y guardarla para futuras referencias.

1. **Definir el Modelo `UserPhoto`**: En la parte inferior del archivo `photo.service.ts`, define una interfaz `UserPhoto` para almacenar la metadata de cada foto:
   ```typescript
   export interface UserPhoto {
     filepath: string;
     webviewPath?: string;
   }
   ```
2. **Agregar Fotos al array**: En `PhotoService`, definimos un array `photos` que contendrá cada foto capturada. Agregaremos cada nueva foto al principio de este array.
   ```typescript
   export class PhotoService {
     public photos: UserPhoto[] = [];

     public async addNewToGallery() {
       const capturedPhoto = await Camera.getPhoto({
         resultType: CameraResultType.Uri,
         source: CameraSource.Camera,
         quality: 100
       });

       this.photos.unshift({
         filepath: "soon...",
         webviewPath: capturedPhoto.webPath!
       });
     }
   }
   ```
3. **Mostrar las Fotos en la Interfaz**: En `tab2.page.html`, añade un componente `ion-grid` para organizar las fotos en una cuadrícula. Luego, recorre el array `photos` en `PhotoService` y agrega un componente `<ion-img>` para cada foto.
   ```html
   <ion-content>
     <ion-grid>
       <ion-row>
         <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
           <ion-img [src]="photo.webviewPath"></ion-img>
         </ion-col>
       </ion-row>
     </ion-grid>

     <!-- Botón de cámara -->
   </ion-content>
   ```

Guarda todos los archivos y actualiza la aplicación en el navegador. Ahora, cuando tomes una foto, se mostrará en la Galería de Fotos.

---

## Próximos Pasos ⏩

¡Ya tienes la galería funcional en Ionic y Angular 18! En los próximos pasos, podrías añadir soporte para guardar las fotos en el sistema de archivos del dispositivo, permitiendo que se guarden de forma persistente. ¡Continúa explorando y mejorando tu app de Galería de Fotos!