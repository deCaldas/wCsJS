### CONCEPTOS EXPLICADOS

## Object Literals
— **Me explicas el concepto de la notación abreviada "object literals"**

— La notación abreviada de _**object literals** es una forma concisa y legible de crear objetos en JavaScript_. En lugar de escribir la sintaxis completa de un objeto, puedes utilizar una sintaxis abreviada para crear un objeto que tenga propiedades con los mismos nombres que las variables que se utilizan en su declaración. Aquí hay un ejemplo:

```js
const name = 'Jax';
const age = 38;

const person = { name, age };
```

En este ejemplo, person es un objeto que tiene dos propiedades: name y age. La sintaxis abreviada permite que se especifiquen estas propiedades sin tener que repetir el nombre de la propiedad para cada una de ellas. Esto hace que el código sea más legible y más fácil de mantener.

## Optional Chaining
— **Me explicas el concepto del encadenamiento opcional "optional chaining" de JS**

El encadenamiento opcional de JavaScript, también conocido como "optional chaining", es una nueva característica en ECMAScript 2020 que permite acceder a un objeto, función o propiedad sin tener que preocuparse por si ese objeto, función o propiedad existe o no.

Antes de la introducción de optional chaining, para acceder a una propiedad de un objeto, debías primero verificar si el objeto existía y luego acceder a la propiedad. Por ejemplo:

```js
const data = {
  user: {
    name: 'Alex'
  }
};

let userName;

if (data.user) {
  userName = data.user.name;
} else {
  userName = 'Unknown';
}
```

Con optional chaining, puedes escribir el mismo código de la siguiente manera:

```js
const data = {
  user: {
    name: 'Alex'
  }
};

const userName = data.user?.name || 'Unknown';
```

La notación `"?"` se utiliza para indicar que se está realizando un encadenamiento opcional. Si `data.user` es null o undefined, entonces la expresión `data.user?.name` también será null o undefined, y se devolverá el valor por defecto 'Unknown'.
