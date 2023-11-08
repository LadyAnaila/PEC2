const findOne = (list, { key, value }) => {
    // Se define la función findOne. Esta función busca un elemento de la lista según los valores key y value. Se crea una nueva promesa que se resuelve o rechaza según el resultado de la búsqueda.
    return new Promise((resolve, reject) => {
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

const asincSearch = async (name) => {
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
    // Esperamos a que la promesa se resuelva con el await. Se devuelve el elemento encontrado.
    return element;
};

const multipleAsincSearch = async () => {
//Creamos la función asincrónica que permita realizar varias búsquedas en paralelo. Así no hace falta esperar a los resultados de una para comenzar la siguiente. 
    console.log('Parallel Search Started');
    
    try {
        //Igual que en el ejercicio anterior, usamos un try.  Llamamos dos veces a la función para que realice la búsqueda.. Como está marcada como asincrónica no necesita hacer una antes dee la otra. 
        const search1 = asincSearch('Carlos');
        const search2 = asincSearch('Ana');
        
        const [element1, element2] = await Promise.all([search1, search2]);
        // Esperamos a que ambas promesas se resuelvan utilizando Promise.all.


        // Imprimimos los resultados de ambos usuarios.
        console.log(`User 1: ${element1.name} & User 2: ${element2.name}`);
        console.log();
    } catch (error) {
//Como antes, manejamos los errores con un catch que imprime en pantalla el mensaje de error. 
        console.log(error);
    }
};

multipleAsincSearch();
//Llamamos a la función para hacer la búsqueda en paralelo.
