### MODO DE USO

## Operador ternario

— **Me explicas por favor cómo usar el operador ternario de JS...**

— El operador ternario en JavaScript es un operador de abreviación que te permite escribir una estructura `if` en una sola línea. Se representa por el símbolo `?` y permite escribir código de la siguiente manera:

```js
condicion ? valorSiTrue : valorSiFalse
```

Donde condicion es una expresión que puede ser evaluada como verdadera o falsa. Si la condición es verdadera, el operador ternario devolverá el valor valorSiTrue, y si es falsa, devolverá valorSiFalse.

Por ejemplo, podríamos usar el operador ternario para asignar un valor a una variable en función de una condición:

```js
let age = 30;
const CanDrink = age >= 21 ? 'Yes' : 'No';

console.log(CanDrink);  // Output: "Yes"
```

En este ejemplo, la variable CanDrink es asignada el valor "Yes" si la edad es mayor o igual a 21, o el valor "No" en caso contrario.

El _**operador ternario** es una forma concisa de escribir código if y else y es especialmente útil en situaciones donde se requiere una simple asignación condicional._ Sin embargo, debes ser cuidadoso al usarlo, ya que puede ser difícil de leer y entender si se usa de manera excesiva o si la lógica es demasiado compleja. — Para lo cual creo que con una buena documentación del código podríamos "ser cuidadosos". — Digo yo pues. 

