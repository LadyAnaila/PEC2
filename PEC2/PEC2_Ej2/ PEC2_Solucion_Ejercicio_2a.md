//**(0.50 puntos) Observa que se han creado funciones handle en el fichero controlador (todo.controller.js), las cuales son pasadas como parámetro. Esto es debido al problema con el cambio de contexto (this) que existe en JavaScript. Ahora mismo si no tienes muy claro que está sucediendo, revisa qué hacen las “fat-arrow” de ES6 sobre el objeto this, y prueba a cambiar el código para comprender qué está sucediendo cuando se modifica la siguiente línea:
this.view.bindAddTodo(this.handleAddTodo);
Por esta:
this.view.bindAddTodo(this.service.addTodo);

Responde, en un documento texto en el directorio de entrega a la siguiente pregunta:
**¿Por qué es el valor de this es undefined?**

Es undefined porque al trabajar con funciones perdemos el contexto de this. Al no estar definido dentro de la función, la función pierde el contexto en el que se declara el this. 