# Desplegando la Aplicación en iOS y Android 📲

Ya que añadimos **Capacitor** a nuestro proyecto desde el inicio, ¡solo faltan unos pocos pasos para desplegar la aplicación de galería de fotos en dispositivos iOS y Android! A continuación, te guiaremos en la configuración y el despliegue de la app en dispositivos móviles.

---

## Configuración de Capacitor 🔌

**Capacitor** es el runtime oficial de Ionic que permite desplegar aplicaciones web en plataformas nativas como iOS y Android. Si aún estás ejecutando `ionic serve` en la terminal, cancélalo para realizar una nueva compilación de tu proyecto Ionic:

```bash
ionic build
```

A continuación, crea los proyectos nativos para iOS y Android:

```bash
ionic cap add ios
ionic cap add android
```

> Estos comandos crean las carpetas `ios` y `android` en la raíz del proyecto. Cada una es un proyecto nativo independiente, que debe considerarse como parte de tu app de Ionic (puedes gestionarlos con herramientas nativas y agregarlos al control de versiones).

Cada vez que realices un `ionic build` que actualice el directorio `www`, es necesario copiar esos cambios a los proyectos nativos:

```bash
ionic cap copy
```

> **Nota**: Si realizas cambios en el código nativo (por ejemplo, añadiendo un nuevo plugin), usa el comando `sync` en lugar de `copy`:

```bash
ionic cap sync
```

---

## Despliegue en iOS 🍎

> **Nota**: Para crear y ejecutar una app en iOS, es necesario utilizar una computadora Mac.

Las aplicaciones de Capacitor para iOS se configuran y gestionan a través de **Xcode**, y las dependencias se manejan mediante **CocoaPods**. Sigue estos pasos para abrir el proyecto en Xcode y configurarlo:

1. **Abrir el Proyecto en Xcode**:

   ```bash
   ionic cap open ios
   ```

2. **Configurar Permisos para la Cámara**: 

   - En **Info.plist**, añade la clave `NSCameraUsageDescription` y establece su valor con un mensaje que describa por qué la app necesita acceso a la cámara, como "Para tomar fotos".
   - Añade también `NSPhotoLibraryAddUsageDescription` y `NSPhotoLibraryUsageDescription` para habilitar el acceso a la galería.

3. **Seleccionar Equipo de Desarrollo**:
   - Haz clic en "App" en el **Project Navigator** y selecciona tu **Development Team** en la sección **Signing & Capabilities**.

4. **Probar la App en un Dispositivo Real**:
   - Conecta un dispositivo iOS a tu computadora Mac, selecciona el dispositivo en Xcode y haz clic en el botón **Build** para compilar e instalar la app.

Cuando ejecutes la app en el dispositivo, se mostrará un mensaje solicitando permiso para acceder a la cámara al pulsar el botón de cámara en la pestaña de galería de fotos. Después de conceder el permiso, podrás tomar una foto y verla en la app.

---

## Despliegue en Android 🤖

Las aplicaciones de Capacitor para Android se gestionan y configuran a través de **Android Studio**. Para preparar la app y ejecutarla en un dispositivo Android, sigue estos pasos:

1. **Abrir el Proyecto en Android Studio**:

   ```bash
   ionic cap open android
   ```

2. **Configurar Permisos para la Cámara**:
   - En **AndroidManifest.xml**, asegúrate de que se incluyan los permisos para leer y escribir en el almacenamiento externo:

     ```xml
     <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
     <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
     ```

3. **Probar la App en un Dispositivo Real**:
   - Conecta un dispositivo Android a tu computadora. En Android Studio, haz clic en el botón **Run**, selecciona el dispositivo y confirma para compilar e instalar la app.

Cuando ejecutes la app en el dispositivo Android, al pulsar el botón de cámara en la pestaña de galería de fotos, se solicitará permiso para acceder a la cámara. Después de conceder el permiso, podrás tomar una foto y verla en la app.

---

## ¡Nuestra App de Galería de Fotos ya está en iOS y Android! 🎉

Con estos pasos, hemos desplegado exitosamente la aplicación en dispositivos iOS y Android, utilizando una única base de código. En el próximo paso, implementaremos la funcionalidad para eliminar fotos, completando así nuestra característica de galería de fotos. ¡Adelante!