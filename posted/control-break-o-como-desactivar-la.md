---
title: 'Control break. O como desactivar la localización remota de un dispositivo o el control parental usando una sd.'
date: 2021-08-06T10:50:00.001-07:00
draft: false
url: /2021/08/control-break-o-como-desactivar-la.html
---

La idea de este "exploit" es usar el hecho de que android carga la sd despues de arrancar el dispositivo para por ejemplo acceder a los ajustes de accesibilidad para desactivar el control parental o find my device antes de que se cargue el bloqueo de esos mismos ajustes. Mi prueba practica fue con kaspersky safe kids, puesto que bloqueaba los ajustes de accesibilidad, los de la app y la instalacion de apps externas, hubo que usar adb para instalar una app como link2sd para pasarlo a la sd. A partir de aqui la opcion mas facil es apagar el dispositivo y sacar la sd. al encederlo este control parental no bloqueo el dispositivo. Para los que si lo hacen se enciende el dispositivo y en lo que el sistema cargue la sd desmontarla y acceder a accesibilidad. puesto que la app no ha sido cargada no bloqueara el dispositivo en cualquier caso puedes ir a accesibilidad y desactivar la app. El dispositivo estara libre de control desde ese momento.