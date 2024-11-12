# Guardando Fotos en el Sistema de Archivos 🗄️

Ahora que tenemos la capacidad de tomar múltiples fotos y mostrarlas en una galería en la segunda pestaña de nuestra aplicación, el siguiente paso es hacer que estas fotos se almacenen de manera permanente. Actualmente, las fotos no se guardan, por lo que se pierden al cerrar la app.

Con la **API de Sistema de Archivos de Capacitor**, podemos almacenar las fotos en el dispositivo en unos pocos pasos, permitiendo su acceso incluso después de reiniciar la aplicación.

---

## Uso de la API de Sistema de Archivos 📂

Para empezar, vamos a crear un nuevo método en la clase `PhotoService` llamado `savePicture()`. Este método se encargará de recibir la foto capturada y guardarla en el sistema de archivos del dispositivo.

1. **Creación del Método `savePicture`**: Abre `src/app/services/photo.service.ts` y define el método `savePicture()`. Este método aceptará el objeto de la foto como parámetro.
   ```typescript
   private async savePicture(photo: Photo) { }
   ```
2. **Llamar a `savePicture` en `addNewToGallery`**: Ahora, dentro de `addNewToGallery()`, vamos a llamar al método `savePicture` para guardar la foto y añadirla a la colección de fotos.
   ```typescript
   public async addNewToGallery() {
     const capturedPhoto = await Camera.getPhoto({
       resultType: CameraResultType.Uri,
       source: CameraSource.Camera,
       quality: 100
     });

     const savedImageFile = await this.savePicture(capturedPhoto);
     this.photos.unshift(savedImageFile);
   }
   ```
---

## Guardar la Foto en Base64 🖼️

Para guardar la foto en el sistema de archivos, primero necesitamos convertirla al formato **base64**, que es compatible con la API de Sistema de Archivos.

1. **Conversión a Base64**: Dentro de `savePicture`, utiliza el método `readAsBase64()` (que definiremos más adelante) para convertir la foto al formato base64.

2. **Escritura en el Directorio de Datos**: Una vez convertida, utiliza la función `writeFile` de `Filesystem` para escribir el archivo en el sistema.
   ```typescript
   private async savePicture(photo: Photo) {
     const base64Data = await this.readAsBase64(photo);

     const fileName = Date.now() + '.jpeg';
     const savedFile = await Filesystem.writeFile({
       path: fileName,
       data: base64Data,
       directory: Directory.Data
     });

     return {
       filepath: fileName,
       webviewPath: photo.webPath
     };
   }
   ```
> **Nota**: Usamos la propiedad `webviewPath` en lugar del dato base64 para mostrar la imagen en la app, ya que ya está cargada en la memoria.

---

## Función de Conversión `readAsBase64` 🛠️

`readAsBase64` es una función auxiliar que convierte la imagen capturada a base64. Esto implica un poco de lógica específica para la plataforma, ya que los métodos de manejo de archivos varían entre la web y dispositivos móviles.

1. **Definición de `readAsBase64`**: Esta función utiliza el método `fetch()` para leer el archivo como un **blob**, luego lo convierte a base64 usando el método `FileReader`.
   ```typescript
   private async readAsBase64(photo: Photo) {
     const response = await fetch(photo.webPath!);
     const blob = await response.blob();

     return await this.convertBlobToBase64(blob) as string;
   }
   ```
2. **Función `convertBlobToBase64`**: Define `convertBlobToBase64` para convertir el blob en una cadena base64, usando el método `readAsDataURL()` de `FileReader`.
   ```typescript
   private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.onerror = reject;
     reader.onload = () => {
         resolve(reader.result);
     };
     reader.readAsDataURL(blob);
   });
   ```

Esta configuración permite que las fotos se conviertan a base64 de manera eficiente, especialmente en la web, donde se utiliza `fetch()` y `FileReader` para realizar esta conversión.

---

## Conclusión 📌

Cada vez que se toma una nueva foto, se guarda automáticamente en el sistema de archivos del dispositivo, lo que permite conservarla entre sesiones. ¡Así, logramos una galería de fotos persistente y funcional en Ionic y Angular 18!