# Pipes y Filtros en Angular 18: Transformación de Datos en Tiempo Real 🛠️

Los **pipes** en Angular son una poderosa herramienta que te permite transformar datos de manera rápida y eficiente directamente en las plantillas HTML. En lugar de modificar los datos en el componente, los pipes actúan como filtros que puedes aplicar dinámicamente. Ya sea formatear fechas, mostrar monedas o crear tus propios pipes personalizados, Angular 18 tiene todo lo que necesitas para manipular datos de forma sencilla. ¡Vamos a explorar cómo usar y crear pipes como un profesional! 🚀

---

## Uso de Pipes Comunes: `date`, `currency`, `json` 📅💰

Angular viene con una serie de **pipes integrados** que te ayudan a formatear y transformar datos de uso común. Aquí te mostramos algunos de los más utilizados:

### 1. Pipe `date`: Formateo de Fechas 📆

El pipe `date` se utiliza para dar formato a las fechas en diferentes estilos.

```html
<p>Fecha actual: {{ fecha | date:'fullDate' }}</p>
```

Si `fecha` contiene el valor `2024-09-29`, el resultado sería algo como:

```
Fecha actual: domingo, 29 de septiembre de 2024
```

Puedes personalizar el formato de la fecha usando diferentes patrones como `'shortDate'`, `'longDate'`, etc.

### 2. Pipe `currency`: Mostrar Moneda 💵

El pipe `currency` formatea un número como una moneda, añadiendo símbolos y decimales automáticamente.

```html
<p>Precio: {{ precio | currency:'USD':'symbol':'1.2-2' }}</p>
```

Si `precio = 1234.5`, el resultado sería:

```
Precio: $1,234.50
```

Este pipe es extremadamente útil para aplicaciones de comercio electrónico o sistemas financieros.

### 3. Pipe `json`: Mostrar Datos en Formato JSON 🔍

Cuando necesitas mostrar objetos JSON en tus plantillas de forma legible, el pipe `json` es tu mejor aliado.

```html
<pre>{{ datos | json }}</pre>
```

Si `datos` contiene un objeto como `{ nombre: 'Angular', version: 18 }`, el resultado será:

```json
{
  "nombre": "Angular",
  "version": 18
}
```

💡 **Tip**: Este pipe es excelente para depuración rápida mientras desarrollas.

---

## Creación de Pipes Personalizados 🛠️

Aunque los pipes integrados son útiles, a veces necesitas transformar los datos de una manera específica para tu aplicación. Aquí es donde entran los **pipes personalizados**.

### Ejemplo: Crear un Pipe que Capitalice las Palabras 🔤

Vamos a crear un pipe llamado `capitalize` que convierta la primera letra de cada palabra en mayúscula.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\b\w/g, char => char.toUpperCase());
  }
}
```

### Uso del Pipe en la Plantilla:

```html
<p>{{ 'angular es genial' | capitalize }}</p>
```

Resultado:

```
Angular Es Genial
```

💡 **Tip**: Los pipes personalizados te permiten crear transformaciones a medida según las necesidades específicas de tu aplicación.

---

## Optimización de Rendimiento con Pipes Puros e Impuros ⚡

Angular clasifica los pipes en **puros** e **impuros**:

- **Pipes Puros**: Angular los recalcula solo si el valor de entrada cambia. Son ideales para transformaciones que no requieren ser recalculadas frecuentemente. De manera predeterminada, los pipes en Angular son puros.
- **Pipes Impuros**: Angular los recalcula en cada ciclo de detección de cambios, lo que puede afectar el rendimiento si no se usa con cuidado.

### Declarar un Pipe Impuro:

Para crear un **pipe impuro**, simplemente establece su propiedad `pure: false` en el decorador `@Pipe`:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impuro',
  pure: false
})
export class ImpuroPipe implements PipeTransform {
  transform(value: any[]): any[] {
    // Lógica compleja que necesita actualizarse frecuentemente
    return value.filter(item => item.activo);
  }
}
```

### Uso de Pipes Impuros:

```html
<ul>
  <li *ngFor="let item of lista | impuro">{{ item.nombre }}</li>
</ul>
```

🔍 **Nota**: Los **pipes impuros** pueden ser útiles en escenarios donde los datos cambian constantemente, pero es importante usarlos con moderación para evitar problemas de rendimiento.

### ¿Cuándo Usar un Pipe Puro vs. Impuro?

- **Pipes Puros**: Úsalos en la mayoría de los casos, ya que son más eficientes.
- **Pipes Impuros**: Son necesarios cuando el contenido del valor no cambia pero quieres que el pipe vuelva a ejecutarse, como en un arreglo cuyos elementos cambian internamente.

---

### Conclusión 🚀

Los **pipes** en Angular 18 te proporcionan una forma flexible y poderosa de transformar y manipular los datos en tus plantillas. Ya sea que estés utilizando **pipes integrados** como `date` y `currency`, o creando **pipes personalizados**, dominar esta funcionalidad te permitirá crear interfaces dinámicas y responsivas de manera eficiente. Además, saber cuándo usar **pipes puros** e **impuros** puede marcar una gran diferencia en el rendimiento de tu aplicación. ¡Es hora de poner a prueba estos conocimientos y empezar a transformar datos como un experto en Angular! 🎉