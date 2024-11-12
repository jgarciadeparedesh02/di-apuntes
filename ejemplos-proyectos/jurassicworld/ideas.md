## Descripción general

Descripción: Inspirada en juegos como Jurassic World Evolution, los usuarios gestionan su propio parque de dinosaurios, donde deben cuidar de las especies, construir instalaciones y atraer visitantes.
Funcionalidades:
Login y registro para personalizar el parque y almacenar el progreso.
Guardar en local storage el número de dinosaurios, ingresos generados y visitantes.
Llamadas a una API para obtener información sobre especies de dinosaurios o condiciones climáticas que afectan el parque.
Los usuarios pueden comprar nuevas especies, construir recintos, y gestionar situaciones de emergencia (por ejemplo, fugas de dinosaurios).
Sistema de evolución que permite desbloquear nuevas especies y tecnologías para mejorar el parque.

## Forma de avanzar

Clicker, cada x clicks se van desbloqueando nuevas especies y recintos con la compra de éstos al ser construidos.

Endpoints:
Login y Registro
Situación del parque de un usuario: Dinosaurios descubiertos, Visitantes Actuales, Recintos construidos
Dinosaurios y Recintos: Información sobre los clicks necesarios para cada dinosaurio y su recinto. Con la información de cada uno.
Situaciones de emergencia: Cada x minutos se consulta para conseguir una situación de emergencia aleatoria.

## Metas de clicks

TODO: Definir cada x clicks se ganan x monedas
Definir monedas para recinto y dinosaurio, yendo escalando cada vez más

Usuario: id, correo, contraseña
Parque: userid, nombre, monedas actuales, dinosaurios comprados(ids), recintos construidos(ids)
Dinosaurios: id, nombre, costo, nombre científico, recinto necesario, imagen
Recintos: id, nombre, imagen
Situaciones emergencia: id, nombre, monedas perdidas, imagen
