const findOne = (list, { key, value }) => {
    // Se define la función findOne. Esta función busca un elemento de la lista según los valores key y value. Se crea una nueva promesa que se resuelve o rechaza según el resultado de la búsqueda.
    return new Promise((resolve, reject) => {
        //Se crea una promesa que see resuelve o se rechaza según el resultado. 

        setTimeout(() => {
            // Se ejecuta una función que establece un tiempo de retraso para mostrar el resultado. Es una forma de introducir asincronía. En este caso, el retraso es de dos segundos, los cuales se establecen al final de la función.

            const element = list.find((element) => element[key] === value);
            // Busca un elemento en la lista en que el key coincida con el value.

            if (element) {
                //Si se encuentra el elemento, se resuelve la promesa con el elemento encontrado.

                resolve(element);
            } else {
                reject('ERROR: Element Not Found');
                // Si no se encuentra el elemento, rechazamos la promesa con un mensaje de error.
            }
        }, 2000);
    });
};

//Aquí teníamos las funciones on success y oneerror, pero como ahora lo vamos a definir con un then y un catch, ya no nos hacen falta. 


const getUserByName = async (name) => {
    // Creamos una función asincrónica para buscar usuarios por nombre.

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

    const element = await findOne(users, { key: 'name', value: name });
    //Esperamos a que la promesa se resuelva con el await. Lo demás funciona de la misma manera que en el anterior ejercicio. 
    return element;
    //Se devuelve el elemento encontrado . 
};

const asincSearch = async () => {
    //Hemos introducido una función asincrónica para buscar el usuario. 

    console.log('findOne success');
    try {
        //Aquí en lugar de then se busca mediante try. Si se encuentra, se muestra el nombre.  En este caso, como sí existe Carlos como nombre, se lanzará el then. 
        console.log(`user: ${element.name}`);
        const element = await getUsersByName('Carlos');
        console.log(`user: ${element.name}`);
    } catch (error) {
        //En caso de que no existiera Carlos, se lanzaría el error. 
        console.log(error);
    }

    console.log('findOne error');

    try {
        //Aquí en lugar de then se busca mediante try. Si se encontrara, se mostraría el nombre.  

        const element = await getUsersByName('Fermin');
        console.log(`user: ${element.name}`);
    } catch (error) {
        console.log(error);
        //Si no tiene éxito, manejamos el error con un catch. En este caso, como no existe el nombre Fermín, se lanzará el catch. 

    }
};

asincSearch();
//Se llama a la función para que realice la búsqueda
