---
title: 'Pantalla azulen windows 10: soluciones'
date: {}
draft: false
url: /2021/02/pantalla-azulen-windows-10-soluciones.html
tags:
  - guias
published: true
---

Con Windows 98, los pantallazos azules (de la muerte como añaden algunos) se convirtieron en algo habitual en todas versiones de Windows. Y cuando habitual, no me refiero a que sea un error que se muestre continuamente, sino a un **error crítico del sistema** que utiliza el color azul (también hay errores críticos que se muestran en color blanco) para informar del tipo de error.

Este tipo de errores se muestra **cuando nuestro equipo no funciona correctamente**, ya sea debido al mal funcionamiento de un componente del equipo (tenemos que reemplazarlo si o si) o bien a las instrucciones de los drivers de un componente del equipo, por lo que al final, siempre están relacionados con algún componente de hardware de nuestro equipo.

Estas pantallas azules se muestran continuamente hasta que damos con una solución en el equipo, por lo que d**e nada vale formatear el disco duro** y empezar de cero.

  

¿Cuándo se muestra la pantalla azul?
------------------------------------

Este tipo de pantallas se muestra cuando el equipo registra la instrucción STOP Error, una instrucción que **detiene completamente al equipo** siendo el reinicio la única forma de salir de esta pantalla. Esta pantalla suele ir acompañada de algunos de los siguientes códigos de error:

*   CRITICAL\_PROCESS\_DIED
*   SYSTEM\_THREAD\_EXCEPTION\_NOT\_HANDLED
*   IRQL\_NOT\_LESS\_OR\_EQUAL
*   VIDEO\_TDR\_TIMEOUT\_DETECTED
*   PAGE\_FAULT\_IN\_NONPAGED\_AREA
*   SYSTEM\_SERVICE\_EXCEPTION
*   DPC\_WATCHDOG\_VIOLATION

Además de estos códigos de error, también se pueden mostrar en formato hexadecimal como **0x0000000A, 0x0000003B, 0x000000EF, 0x00000133, 0x000000D1, 0x1000007E, 0xC000021A, 0x0000007B, 0xC000000F**… La mayoría de los errores tiene siempre la misma solución, por lo que a continuación os mostramos cómo proceder.

Estos códigos de error **nos permiten identificar** de una forma más sencilla de que tipo de error se trata. Otro aspecto que debemos tener en cuenta es cuando se presenta el problema: al instalar una nueva actualización o mientras utilizamos nuestro dispositivo de forma habitual.

¿Cómo soluciono la pantalla azul de Windows 10?
-----------------------------------------------

Como he comentado anteriormente, los problemas relacionados con esta odiosa pantalla en el 90% de los casos, **está relacionada con algún problema de hardwar**e o de los drivers asociados.

Esto se debe a que Windows 10 se encarga de **buscar e instalar los drivers necesarios para el hardware** disponible en el equipo, por lo que es probable que en alguna ocasión no de con el modelo concreto, y al instalar unos drivers equivocados, el hardware no funcione correctamente.

### Después de instalar una actualización

Este problema **es uno de los más comunes**, ya que con cada nueva actualización, Microsoft añade nuevas funcionalidades que pueden afectar al funcionamiento de algunos componentes, aunque no suele ser habitual.

Sin embargo, si después de instalar la última actualización de Windows, nuestro equipo no para de mostrarnos la pantalla azul, debemos **entrar en el modo recuperación de Windows** para proceder a desinstalarla.

Para encontrar en recuperación de Windows, debemos encender nuestro equipo y comience a iniciar Windows, lo apagamos (mantenemos apretado el botón de inicio varios segundos hasta que se apague). Realizamos este paso 2 veces.

![Pantalla azul](https://guiastecnologia.com/wp-content/uploads/2021/01/pantalla-azul-1.jpg)

A continuación, encendemos una vez más el equipo y dejamos que se inicie. Windows habrá detectado que hay algún problema y nos mostrará tres opciones:

*   **Continuar**. Salir y continuar a Windows 10
*   **Solucionar problemas**. Restablecer el equipo o ver opciones avanzadas.
*   **Apagar el equipo**.

Seleccionamos la segunda opción: **Solucionar problemas**.

![Pantalla azul](https://guiastecnologia.com/wp-content/uploads/2021/01/pantalla-azul-2.jpg)

En esta sección se mostrarán dos opciones:

*   **Restablecer equipo**. Le permite elegir entre mantener o quitar los archivos personales y después reinstalar Windows.
*   **Opciones avanzadas**.

Seleccionamos la segunda opción: **Opciones avanzadas**.

![Pantalla azul](https://guiastecnologia.com/wp-content/uploads/2021/01/pantalla-azul-3.jpg)

A continuación se mostrarán 6 nuevas opciones:

*   **Restauración del sistema**. Nos permite volver a punto de restauración anterior para restaurar Windows.
*   **Volver a la versión anterior**.
*   **Recuperación de imagen del sistema**. Recuperar Windows con una imagen del sistema que tengamos en una unidad.
*   **Reparación de inicio**. Soluciona problemas que impiden que Windows inicie.
*   **Símbolo de sistema**. Muestra el símbolo de sistema para solucionar los problemas de inicio.
*   **Configuración de inicio**.Cambiar el comportamiento de inicio de Windows.

Seleccionamos la última opción: **Configuración de inicio**.

![Pantalla azul](https://guiastecnologia.com/wp-content/uploads/2021/01/pantalla-azul-4.jpg)

A continuación se mostraran todas las opciones que podemos establecer cuando se vuelva a iniciar Windows. Lo recomendable es utilizar la opción Modo seguro con funciones de red. Una vez hemos iniciado nuestro equipo, nos dirigimos al cuadro de búsquedas y escribimos **panel de control.**

Seguidamente, pulsamos en Desinstalar un programa. A continuación, pulsamos **Ver actualizaciones instaladas**, estas se muestran ordenadas por fecha, por lo que tan solo tenemos que buscar la última que se ha instalado y con el botón derecho pulsar sobre ella y seleccionar Desinstalar.

Una vez desinstalada, debemos reiniciar el equipo para que se elimine completamente de nuestro equipo. Si el motivo del pantallazo azul era la última actualización de Windows que habíamos instalado, esta **no volverá a mostrarse**. Lo que debemos hacer a continuación, es desactivar la instalación de actualizaciones automáticas, hasta que Windows lance una nueva que solucione es problema.

### Utilizando mi equipo de forma habitual

Si el problema se presenta de forma esporádica, **tenemos tres soluciones para evitar que la pantalla azul** (de la muerte) vuelva a mostrarse en nuestro equipo.

Si la pantalla azul se muestra de forma continuada, debemos acceder el modo recuperación de Windows, tal y como os he explicado en el apartado anterior, ya que de lo contrario, es probable que nunca puedas llegar a realizar las acciones que os detallo a continuación.

#### Desinstalar el software instalado recientemente

![Desinstalar actualizaciones Windows 10](https://guiastecnologia.com/wp-content/uploads/2021/01/desinstalar-actualizaciones.jpg)

Los software antivirus suelen ser las aplicaciones que más problemas ofrecen en Windows con las pantallas azules. Si has instalado un nuevo antivirus o cualquier otra aplicación de un desarrollador poco o nada conocido, es probable que esta esté ocasionando problemas de rendimiento en los controlares del hardware de tu equipo, por lo que lo mejoro que podemos hacer es **desinstalar y volver a probar si la pantalla azul se vuelve a mostrar**. Si es así, pasaremos al siguiente punto.

#### Desinstalar los últimos drivers instalados

![Actualizar drivers Windows 10](https://guiastecnologia.com/wp-content/uploads/2021/01/actualizar-driver-windows-10.jpg)

Las tarjetas gráficas y las de sonido, al igual que algunas memorias y discos duros pueden **llevar asociado algún tipo de drivers**. Si estos drivers se han actualizado recientemente es probable que el problema de la pantalla azul se encuentre en estos y no en el hardware en si.

Para salir de dudas, debemos **desinstalar los controlares e instalar lo que nos ofrece el fabricante directamente** y no los que de forma genérica instala Windows cuando detecta que se han actualizado. Instalando siempre el software del fabricante, nunca vamos a tener problemas de funcionamiento.

#### Desconectar el hardware externo conectado al equipo

![](https://guiastecnologia.com/wp-content/uploads/2020/08/akrales_190522_3440_0067.jpg)

En ocasiones, la solución al problema de pantalla azul pasa por **desconectar cualquier dispositivo de hardware** que tengamos conectado a nuestro equipo, ya sea un disco duro, una gráfica externa, una capturadora de vídeo, un pendrive, un ratón o incluso un teclado, aunque estos dos últimos debemos dejarlos para el final a no ser que tengamos otro teclado y ratón por casa.
