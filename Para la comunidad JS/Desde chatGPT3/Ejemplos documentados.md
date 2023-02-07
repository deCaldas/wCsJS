### DOCUMENTACIÓN

## La función `findIndex`

— Me podrías documentar este código...

```js
const index = a.findIndex(x => x.prop2  === "jkl");
```

— Este código utiliza la función `findIndex` para encontrar el índice de un objeto dentro de un arreglo a. La función findIndex recibe como argumento una función de `callback` que es llamada para cada elemento del arreglo hasta que se encuentra uno que cumpla con la condición especificada en la función de callback.

En este caso, la función de callback compara el valor de la propiedad prop2 con el string "jkl". Si se encuentra un objeto con una propiedad prop2 con ese valor, la función devuelve el índice de ese objeto en el arreglo. Si no se encuentra un objeto que cumpla con la condición, findIndex devuelve -1.

El resultado de la función findIndex se asigna a la constante index. Por lo tanto, después de ejecutar este código, index contiene el índice del objeto con una propiedad prop2 con el valor "jkl", o -1 si no se encuentra ese objeto.

— **Enséñame un ejemplo documentado de cómo funciona la función `callback`...**

— Una función **"callback"** es una función que se pasa como argumento a otra función. La función receptor luego ejecuta el callback en algún momento. Esto es útil porque permite que una función **"espere"** a que se complete otra operación antes de continuar su ejecución.

Aquí tienes un ejemplo de código documentado:

```js
// Función que acepta un "callback" como argumento
function doSomething(callback) {
  // Aquí ocurre algo...
  console.log('Doing something...');

  // Finalmente, se ejecuta el callback
  callback();
}

// Función que será usada como callback:
function done() {
  console.log('Done!');
}

// Llamada a la función "doSomething", pasándole la función "done" como argumento:
doSomething(done);

/**
* Salida en consola:
* Doing something...
* Done!
**/
```

En este ejemplo, la función `doSomething` espera recibir una función como argumento. En la llamada a doSomething, se pasa la función `done` como argumento. Entonces, cuando doSomething termina de hacer algo, llama a la función callback que se le ha pasado como argumento, en este caso done.

— **Explícame el concepto del `arrow function`...**

— Las funciones de flecha (arrow function en inglés) son una forma más concisa y legible de escribir funciones en JavaScript. Una función de flecha se define usando la siguiente sintaxis:

```scss
(param1, param2, …, paramX) => { statements }
```
o
```r
(param1, param2, …, paramX) => expression
```

Donde param1, param2, …, paramX son los parámetros de la función y `statements` son un conjunto de sentencias que se deben ejecutar cuando la función se invoca, o `expression` es una expresión que devuelve un valor.

El arrow function se utiliza con frecuencia como función de callback para eventos o para métodos como `map`, `filter` o `reduce`. Por ejemplo:

```js
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
```

Además, las funciones de flecha tienen un comportamiento diferente en cuanto a su contexto de `this`. La función de flecha mantiene el contexto de this del scope en el que se ha definido, en lugar de cambiarlo dinámicamente cuando se invoca la función. Esto puede ser útil en algunos casos, como cuando se trabaja con objetos o clases.

___
## Me pregunto cómo insertar valores en una variable desde un documento HTML...

— Puedes insertar valores en una variable desde un documento HTML de varias maneras, aquí hay un ejemplo:

+ Usando JavaScript puro:

```js
const input = document.getElementById("input");
const value = input.value;
```

— Me podrías documentar tu código...

— Claro, este código consta de dos líneas de JavaScript que obtienen el valor de un elemento HTML mediante su identificador.

En la primera línea, se utiliza el método `document.getElementById` para obtener una referencia al elemento con el identificador "input". Este método devuelve el primer elemento con el identificador especificado o null si no se encuentra ningún elemento con el identificador dado.

En la segunda línea, se asigna el valor del elemento a la variable `value`. La propiedad value de un elemento HTML representa el contenido actual del elemento, por lo que al acceder a esta propiedad, se obtiene el valor actual del elemento.

Ejemplo de HTML:

```html
<input type="text" id="input">
```

___
## Cadena de texto plano y valores dinámicos insertados por la sintaxis TEMPLATE LITERAL

— Me podrías documentar este código:
```js
var betterExample = `${name} esta ${activity} con sus gatos ${today}`
```
— Este código crea una variable llamada betterExample que es una cadena de texto con una estructura específica. La cadena de texto está formada por una combinación de texto plano y valores dinámicos, que son insertados en la cadena usando una sintaxis de template literal.

La sintaxis de template literal se caracteriza por estar entre comillas invertidas (``) en lugar de comillas simples o dobles. Los valores dinámicos se incluyen dentro de llaves (${}) dentro de la cadena de texto.

En este ejemplo, se están insertando tres valores dinámicos en la cadena de texto: name, activity y today. Estos valores son variables que se asumen que ya han sido definidas en algún momento anterior en el código.

Una vez que se han insertado los valores dinámicos, la cadena de texto se guarda en la variable betterExample. Esto significa que la cadena de texto tendrá un valor diferente en función de los valores actuales de las variables name, activity y today.

Por ejemplo, si name es igual a "Alex", activity es igual a "jugando" y today es igual a "hoy", la variable betterExample tendrá el valor: "Alex esta jugando con sus gatos hoy".

___
## ARRAY, CONST y método PUSH

— Me podrías documentar este código...

```js
const todoList = ["Write", "Read", "Eat"]
todoList.push("Sleep")
```

— Claro, aquí tenemos un ejemplo de código en JavaScript que crea una lista de tareas (todoList) usando un array con tres elementos: "Write", "Read", "Eat". Luego, usamos el método `push()` para agregar un nuevo elemento, "Sleep", a la lista.

El método push() agrega uno o más elementos al final de un array y devuelve la nueva longitud del array. En este caso, la lista todoList ahora tiene cuatro elementos: "Write", "Read", "Eat", "Sleep".

___
## Destructuración
— Me podrías documentar este código:
```js
const person = {
	name: 'Some Name',
	lastName: 'Some LastName',
	age: '#...',
	mail: 'some@mail.com'
}

let { name, lastName, age, mail } = person
```

— Este código es un ejemplo de destructuring (desestructuración) en JavaScript. La desestructuración es una técnica que permite extraer valores de objetos y arrays y asignarlos a variables.

En este caso, se crea un objeto person que contiene cuatro propiedades: name, lastName, age y mail. Luego, en la siguiente línea, se utiliza la sintaxis de destructuring para extraer esos valores y asignarlos a variables con los mismos nombres.

Por ejemplo, la propiedad name del objeto person se asigna a una variable llamada name. La propiedad lastName se asigna a una variable llamada lastName, y así sucesivamente. Esto es equivalente a escribir:

```js
const name = person.name
const lastName = person.lastName
const age = person.age
const mail = person.mail
```
La sintaxis de destructuring es muy útil para simplificar el código y hacerlo más legible. Además, es una forma eficiente de acceder a las propiedades de un objeto, especialmente cuando se tienen que usar muchas veces.

___
## Estructura de datos
— **Dame un ejemplo documentado de una estructura de datos que no requiera iteración...**


— Una estructura de datos que no requiere iteración es un objeto o una estructura de datos estática que contiene información sin la necesidad de ser recorrido. Por ejemplo:

```js
const datosPersonales = {
  nombre: 'Jess',
  edad: 30,
  ciudad: 'NYC'
};

console.log(datosPersonales.nombre);  // Jess
console.log(datosPersonales.edad);  // 30
console.log(datosPersonales.ciudad);  // NYC
```

En este ejemplo, podemos acceder a los valores de cada propiedad del objeto datosPersonales de forma directa, sin tener que iterar sobre el objeto. Cada propiedad se puede acceder a través de la notación de punto (`.`), seguido del nombre de la propiedad. Esta es una forma sencilla y directa de acceder a los datos contenidos en un objeto y no requiere ninguna iteración.


— **Dame un ejemplo documentado de una estructura de datos que requiera iteración...**


— Un ejemplo de una estructura de datos que requiere iteración es un `array`. Un array es una colección ordenada de elementos que pueden ser accedidos mediante un índice numérico. Para recorrer un array y realizar una tarea específica en cada elemento, es necesario utilizar una estructura de control de flujo como un bucle `for` o `forEach`.

A continuación, presento un ejemplo de código que muestra cómo recorrer un array utilizando el método forEach:

```js
// Definimos un array llamado "numbers" con tres elementos
const numbers = [1, 2, 3];

// Usamos el método forEach para recorrer el array
numbers.forEach(function (number) {
  console.log(number);
});

// El resultado en la consola sería:
// 1
// 2
// 3
```

En este ejemplo, el método forEach se invoca en el array numbers y se le pasa una función anónima que es llamada para cada elemento en el array. La función recibe un argumento, number, que representa el valor de cada elemento en el array mientras se está recorriendo. La función simplemente imprime el valor del número en la consola.
