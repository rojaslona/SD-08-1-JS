# Laboratorio de Clases JS.

## Requisitos previos

Editor de código (ej. VS Code).

Node.js instalado (para ejecutar programas en la terminal).

## Preparación

Clonar el respositorio
```bash
git clone sshurl
```
Moverse al repositorio clonado
```bash
cd nombreDelRepo
```

Instalar las dependencias
```bash
npm install
```
Abrir en vscode
```bash
code .
```
Ejecutar el archivo para ver lo que hace tu código
```bash
node --watch nombreArchivo
```
## Instrucciones
Las **clases** son una sintaxis alternativa para definir una **plantilla** para construir objetos. Al igual que las funciones constructoras, se pueden usar para construir objetos con su propio conjunto de propiedades y métodos. Al igual que los prototipos, también permiten que los objetos **hereden** de ellas. Los **métodos constructor** de una clase se usan para crear una instancia de la misma. Los **métodos compartidos** son heredados por cada instancia.

**Hoy, definirás clases, inicializarás objetos con propiedades y actuarás sobre esas propiedades con métodos.**

Para cada una de estas tareas, estarás construyendo e iterando sobre tu solución de la tarea anterior.

## Tareas

1. Estás trabajando en un código que será usado en un videojuego. Te han pedido crear una clase de objeto. Esta se usará para definir jugadores en ese juego. Cada jugador puede elegir su propio nombre, y estos objetos se usarán para almacenarlos.  
   * Modifica la clase `Player` para que acepte un argumento con el "**name**" del jugador.  
     * La clave de esta propiedad en el objeto resultante **debe** ser "`name`" —recuerda, **las computadoras son muy literales**.

2. Ahora te han pedido mejorar tu código, de modo que los objetos jugador puedan definir tanto un nombre como un número de nivel.  
   * Modifica la clase `Player` para que acepte dos argumentos: un string para el "**name**" del jugador y un número para el "**level**".  
     * La clave de esta propiedad en el objeto resultante **debe** ser "`level`" —recuerda, **las computadoras son muy literales**.

3. Ahora te han pedido incluir un método que muestre en consola un string anunciando que un jugador ha subido de nivel.  
   * Modifica la clase `Player` para que acepte un string con el nombre y un número de nivel en dos argumentos separados.  
   * Luego, define un método compartido `info()` que imprima el siguiente string, reemplazando los dos marcadores de posición:  
     * `<name> has reached Level <level>!`  
       * Un jugador llamado **Tara** en el nivel **6** debería mostrar en consola: "`Tara has reached Level 6!`".

4. Ahora te han pedido incluir un método para subir de nivel a un jugador, incrementando su número de nivel en uno.  
   * Modifica la clase `Player` para que acepte un string con el nombre y un número de nivel en dos argumentos separados.  
   * Luego, define un método compartido `info()` que muestre el siguiente string:  
     * `<name> has reached Level <level>!`  
   * Finalmente, define un segundo método compartido llamado `levelUp()` que **incremente** el nivel del jugador.

## Tareas Extra

Si has completado las tareas anteriores, prueba las siguientes para **experimentar** más:

5. Experimenta permitiendo que el jugador suba de nivel con base en los puntos de experiencia ganados.  
   * Un punto de experiencia es un **número**. Un jugador debería subir de nivel cuando acumule suficientes puntos de experiencia.  
   * Intenta añadir un método que permita al jugador ganar un número dado de puntos de experiencia.  
   * ¿Cuántos puntos de experiencia deberían resultar en un aumento de nivel? ¿Cómo puedes llevar un control de este número?

6. Experimenta permitiendo que los objetos jugador creados se añadan a un **array** de miembros de grupo.  
   * ¿Cómo debería identificarse un array de miembros de grupo en tu código?  
   * Intenta añadir métodos para añadir o eliminar objetos jugador de un grupo dado.

7. Experimenta permitiendo que el jugador tenga un inventario de objetos.  
   * Intenta añadir métodos para agregar o eliminar objetos del inventario.  
   * ¿Cómo puedes llevar un control de la cantidad de cada objeto? ¿Qué **estructura de datos** necesitarías para esto?
