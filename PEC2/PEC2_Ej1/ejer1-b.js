const findOne = (list, { key, value }) => {
    // Se define la función findOne. Esta función busca un elemento de la lista según los valores key y value. Se crea una nueva promesa que se resuelve o rechaza según el resultado de la búsqueda.
    return new Promise((resolve, reject) => {
        //Se crea una promesa que see resuelve o se rechaza según el resultado. 
        setTimeout(() => {
            // Se ejecuta una función que establece un tiempo de retraso para mostrar el resultado. Es una forma de introducir asincronía. En este caso, el retraso es de dos segundos, los cuales se establecen al final de la función.
            const element = list.find((element) => element[key] === value);
            // Busca un elemento en la lista en que el key coincida con el value.

            if (element) {
                // Si se encuentra un elemento, se llama a la función onSuccess. Esta función está definida más abajo. Si se encuentra el elemento, se resuelve la promesa con el elemento encontrado.
                resolve(element);
            } else {
                // Si no se encuentra el elemento, se rechaza la promesa con un mensaje de error.
                reject('ERROR: Element Not Found');
            }
        }, 2000);
    });
};

//Aquí teníamos las funciones on success y oneerror, pero como ahora lo vamos a definir con un then y un catch, ya no nos hacen falta. 


const users = [
    // Aquí tenemos un array de objetos. En este caso, tenemos un array llamado "users" que contiene información sobre distintos objetos que son los usuarios. Cada usuario está entre {} y tiene dos propiedades: "name" y "rol".
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
// Imprime por pantalla el mensaje de éxito "findOne success".

findOne(users, { key: 'name', value: 'Carlos' })
    .then((element) => {
        //Si el resultado de la promesa tiene éxito, en lugar de la función de éxito que habíamos usado con anteriorirdad, usamos then. En este caso, como sí existe Carlos como nombre, se lanzará el then. 
        console.log(`user: ${element.name}`);
    })
    .catch((error) => {
        //Si el resultado de la promesa no tiene éxito, en lugar del then usamos catch. 
        console.log(error);
    });

console.log('findOne error');

findOne(users, { key: 'name', value: 'Fermin' })
    .then((element) => {
        //Si el resultado de la promesa tiene éxito, en lugar de la función de éxito que habíamos usado con anteriorirdad, usamos then. 

        console.log(`user: ${element.name}`);
    })
    .catch((error) => {
        //Si el resultado de la promesa no tiene éxito, en lugar del then usamos catch. En este caso, como no existe el nombre Fermín, se lanzará el catch. 
        console.log(error);
    });
