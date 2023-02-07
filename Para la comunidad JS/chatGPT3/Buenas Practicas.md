## BUENAS PRACTICAS

### Variables

— **¿cuál es la mejor practica para usar la variable const?**


— La mejor práctica para usar const es utilizarla cuando deseas declarar una constante que no será reasignada en ningún momento de la ejecución del programa.

Esto es útil porque proporciona una mayor claridad y seguridad en el código. Al usar const, se indica explícitamente que el valor de esa variable no cambiará, lo que puede ayudar a prevenir errores y aumentar la confiabilidad del código.

Además, al usar const en lugar de var, se puede mejorar la legibilidad y la organización del código, ya que const es una forma más clara de indicar que una variable es una constante y no una variable común.

En general, la mejor práctica es usar const siempre que sea posible y reemplazar var por let cuando necesitas reasignar una variable. Sin embargo, también es importante tener en cuenta que const sólo hace que la referencia a la variable sea inmutable, no sus propiedades, por lo que es posible mutar un objeto o un array declarados con const.

— **Entonces cuándo asigno una variable usando mayúsculas...**


— Las variables con nombres en mayúsculas son comúnmente conocidas como "constantes". Se utilizan para almacenar valores que no cambian a lo largo del tiempo de ejecución del programa. Por convención, los nombres de las constantes se escriben en mayúsculas para distinguirlas de las variables normales, que pueden cambiar su valor. Por ejemplo:

```js
const PI = 3.14159265;
```

En JavaScript, las constantes se pueden declarar usando la palabra clave `const`. Una vez asignado un valor a una constante, no se puede cambiar su valor. Si intentas reasignar un valor a una constante, se producirá un error. Por lo tanto, es importante elegir cuidadosamente cuándo utilizar constantes y asegurarse de que su valor no necesite ser modificado en el futuro.
