# Cargando Fotos desde el Sistema de Archivos 🖼️

Hasta ahora hemos implementado la captura de fotos y su almacenamiento en el sistema de archivos del dispositivo. Sin embargo, falta una última pieza: **cargar las fotos almacenadas para mostrarlas nuevamente en la galería de fotos** cada vez que el usuario abre la app. Para lograr esto, utilizaremos la **API de Preferencias de Capacitor** para guardar referencias a cada archivo, permitiendo que las fotos persistan en la galería incluso después de cerrar la aplicación.

---

## Uso de la API de Preferencias de Capacitor 🗃️

La API de Preferencias permite almacenar datos en un formato de clave-valor. Usaremos esta funcionalidad para guardar el arreglo de fotos, de modo que podamos recuperarlo cuando la app se vuelva a abrir.

### 1. Definir la Clave para el Almacenamiento

Empezamos definiendo una constante que actuará como la clave de almacenamiento en la clase `PhotoService`:

```typescript
export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  // código adicional
}
```

### 2. Guardar el Arreglo de Fotos en `addNewToGallery`

En el método `addNewToGallery`, añadimos una llamada a `Preferences.set()` al final. Con esto, el arreglo de fotos se guardará en el almacenamiento cada vez que se tome una nueva foto, asegurando la persistencia de los datos.

```typescript
public async addNewToGallery() {
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);

  Preferences.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos),
  });
}
```

### 3. Crear el Método `loadSaved` para Recuperar las Fotos

Para cargar las fotos guardadas, creamos el método `loadSaved()`, que recuperará el arreglo de fotos almacenado en formato JSON y lo convertirá nuevamente en un arreglo.

```typescript
public async loadSaved() {
  const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

  // Código adicional para cargar las imágenes en la plataforma web...
}
```

### 4. Mostrar las Fotos en la Galería (Compatibilidad Web) 🌐

En dispositivos móviles, se puede cargar cada foto directamente desde el sistema de archivos. Sin embargo, en la web, las fotos necesitan ser convertidas a formato **base64** debido a que la API de sistema de archivos usa **IndexedDB** en segundo plano. Por ello, en `loadSaved()`, agregamos el siguiente código para leer cada foto guardada y convertirla a base64, de modo que pueda mostrarse correctamente en la web.

```typescript
for (let photo of this.photos) {
  const readFile = await Filesystem.readFile({
    path: photo.filepath,
    directory: Directory.Data,
  });

  // Solo para la plataforma web: cargar la foto en formato base64
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

---

## Llamar a `loadSaved` en la Interfaz 📲

Para que las fotos se carguen automáticamente cuando el usuario acceda a la galería, invocamos el método `loadSaved()` cuando se carga la pestaña de galería de fotos.

1. Abre `tab2.page.ts` y llama al método `loadSaved()` en el ciclo de vida `ngOnInit` para cargar las fotos al abrir la galería.

   ```typescript
   async ngOnInit() {
     await this.photoService.loadSaved();
   }
   ```

---

## Conclusión 📌

¡Y listo! Ahora hemos completado una galería de fotos funcional en Ionic y Angular que guarda y carga las fotos desde el sistema de archivos usando Capacitor. Cada vez que se abre la app, las fotos guardadas se cargan automáticamente y se muestran en la galería. El siguiente paso sería compilar la aplicación para iOS y Android, ¡llevando nuestra galería a dispositivos móviles!