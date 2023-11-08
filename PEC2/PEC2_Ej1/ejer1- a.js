const findOne = (list, { key, value }, { onSuccess, onError }) => {
    //Se define la función findOne. Esta función busca un elemento de la lista según los valores key y value. Según si lo encuentra o no, se ejecutará onSuccess o onError. 

    setTimeout(() => {
        //Se ejecuta una función que establece un tiempo de retraso para mostrar el resultado. Es una forma de introducir asincronía. En este caso el retraso es de dos segundos, los cuales se establecen al final de la función. 
        const element = list.find((element) => element[key] === value);
        // Busca un elemento en la lista en que el key coincidad con el value.

        if (element) {
            onSuccess(element);
            // Si se encuentra un elemento, se llama a la función onSuccess. Esta función está definidda más abajo.

        } else {
            // Si no se encuentra un elemento, se llama a la función onError.Esta función está definidda más abajo.
            onError({ msg: 'ERROR: Element Not Found' });
        }
    }, 2000);
    //Retraso de 2000 milisegundos o dos segundos. 
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
//Función onSuccess. Se llama cuando se encuentra el elemento y lo que se muestra es el nombre de usuario por consola.

const onError = ({ msg }) => console.log(msg);
//Función onError. Se llama cuando no se encuentra el elemento y lo que se muestra por consola es un mensaje de error.


const users = [
    // Aquí tenemos array de objetos. En este caso tenemos un array llamado "users" que contiene información sobre distintos objetos que son los usuarios. Cada usuario tienee dos propiedades: "name" y "rol".
    {
        name: 'Carlos',
        rol: 'Teacher',
    },
    {
        name: 'Ana',
        rol: 'Boss',
    },
];

console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
//Realiza una búsqueda para encontrar el string dado "Carlos" entre las propiedades "name" de los usuarios definidios. Como el usuario existe tendrá éxito, por lo que llama a "onSuccess" para mostrar su nombre en la consola.

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
//Realiza una búsqueda para encontrar el string dado "Fermín" entre las propiedades "name" de los usuarios definidios. Como el usuario no existe, en este caso llamará a la segunda opción, que es "onError" y lo que muestra es el mensaje de error.




/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
