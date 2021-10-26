---
title: 'como eliminar la publicidad a lo largo de todo el sistema'
date: 2021-02-13T08:11:00.000-08:00
draft: false
url: /2021/02/como-eliminar-la-publicidad-lo-largo-de.html
tags: 
- guias
---

Translator

Hoy hablamos de una forma práctica de **bloquear** toda la **publicidad** indeseable de Internet con unos sencillos pasos. No requiere de extensiones que consuman memoria, programas externos etc… y bloquea publicidad no solo del navegador, sino de cualquier programa que mande peticiones a una de las URL de la lista que os explicamos a continuación.

Para bloquear la publicidad desde el **archivo hosts** nos centraremos en modificar el archivo hosts de nuestro sistema operativo (todos los sistemas tienen uno).

¿**Qué es el archivo hosts?**
-----------------------------

Bueno básicamente cuando mandamos una petición a una URL (ej: google.com) le pedimos a un servidor DNS cuál es su IP, pero antes de pedir al DNS, lo que hace nuestro sistema operativo es consultar el **archivo hosts**, vamos que tiene prioridad sobre cualquier otra cosa.

**Estructura del archivo:**

ip\_a\_donde\_ir dominio

EJ: 1.1.1.1 google.es

El ejemplo de arriba lo que hace es que cuando queramos ir a Google, no irá a su IP original, irá a la IP 1.1.1.1 (por poner un ejemplo).

**¿Dónde está el archivo host?**

*   Windows: C:\\Windows\\System32\\drivers\\etc o %systemroot%\\system32\\drivers\\etc (por si no funciona el primero)
*   Mac: /private/etc
*   Linux: /etc

**Editar el archivo hosts con permisos de Administrador**

¿**Efectividad?**

Mucha, no 100% pero muy elevada. Tras varios días probando sin Adblock no ha salido ni un popup, ni ningún anuncio.

**Consejo**

No os recomendamos sobrescribir el archivo, sino, copiar todo el contenido y pegarlo en vuestro archivo. Hay programas que crean sus propias entradas en el archivo etc…

Lista de páginas basura / adware / publicidad
---------------------------------------------

a continuacion teneis el link del de que descargar, le dais en la opcion que querais en el que pone raw hosts la abris con el bloc de notas copiais el contenido, vais al archivo hosts, y tras abrirlos con el bloc de notas le pegais el contenido copiado anteriormente