const { animals, prices, hours, employees } = require("./data");

function entryCalculator(entrants) {
    if (!entrants || Object.keys(entrants).length === 0) {
        return 0;
    }

    const totalPrice =
        entrants.Adult * prices.Adult +
        entrants.Child * prices.Child +
        entrants.Senior * prices.Senior;

    return totalPrice;
}





function schedule(dayName) {
  const scheduleData = hours;
  if (!dayName) {
    const formattedSchedule = {};
    for (const day in scheduleData) {
      const openTime = scheduleData[day].open === 0 ? 'CLOSED' : `${scheduleData[day].open}am`;
      const closeTime = scheduleData[day].close === 12 ? '12pm' : `${scheduleData[day].close % 12}pm`;
      formattedSchedule[day] = `Open from ${openTime} until ${closeTime}`;
    }
    return formattedSchedule;
  }




  
  const day = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  return { [day]: `Open from ${scheduleData[day].open}am until ${scheduleData[day].close % 12 || 12}pm` };
}






function animalCount(species) {
    if (!species) {
        const countObject = {};
        for (const animal of animals) {
            countObject[animal.name] = animal.residents.length;
        }
        return countObject;
    }

    const animal = animals.find((a) => a.name === species);
    return animal ? animal.residents.length : 0;
}

function animalMap(options) {
    if (!options) {
        const map = {};
        for (const animal of animals) {
            const location = animal.location;
            if (!map[location]) {
                map[location] = [];
            }
            map[location].push(animal.name);
        }
        return map;
    }

    const { includeNames, sex } = options;
    const map = {};

    for (const animal of animals) {
        const location = animal.location;
        if (!map[location]) {
            map[location] = [];
        }

        let animalInfo = animal.name;
        if (includeNames) {
            const names = animal.residents.map((resident) => resident.name);
            animalInfo = { [animal.name]: names };
        }

        if (sex) {
            const filteredResidents = animal.residents.filter(
                (resident) => resident.sex === sex
            );
            animalInfo = includeNames ? { [animal.name]: filteredResidents.map((r) => r.name) } : animal.name;
        }

        map[location].push(animalInfo);
    }

    return map;
}

function animalPopularity(rating) {
    if (!rating) {
        const popularityMap = {};
        for (const animal of animals) {
            const popularity = animal.popularity.toString();
            if (!popularityMap[popularity]) {
                popularityMap[popularity] = [];
            }
            popularityMap[popularity].push(animal.name);
        }
        return popularityMap;
    }

    const filteredAnimals = animals
        .filter((animal) => animal.popularity === rating)
        .map((animal) => animal.name);

    return filteredAnimals;
}

function animalsByIds(ids) {
    if (arguments.length === 0) {
        return [];
    } else if (typeof (ids) == 'string') {
        return animals.filter(x => x.id == ids);
    } else if (ids.length > 1) {
        return animals.filter(x => ids.includes(x.id));
    }
}

function animalByName(animalName) {
    if (arguments.length === 0) {
        return {};
    } else {
        let res = {};
        animals.filter(x => {
            res = x.residents.filter(x => x.name == animalName)[0];
            if (res != undefined) res['species'] = x.name;
        });
        return res;
    }
}

function employeesByIds(ids) {
    if (!ids) {
        return [];
    }

    if (typeof ids === 'string') {
        return employees.filter((employee) => employee.id === ids);
    }

    return employees.filter((employee) => ids.includes(employee.id));
}







function employeeByName(employeeName) {
  if (arguments.length === 0) {
    return {};
  }else if(typeof(employeeName) == 'string'){
    return employees.filter(x => x.firstName == employeeName || x.lastName == employeeName)[0];
  }
}







function managersForEmployee(idOrName) {
  const employee = typeof idOrName === 'string'
      ? employees.find((e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName)
      : null;

  if (!employee || !employee.managers || employee.managers.length === 0) {
      return [];
  }

  const managerNames = employee.managers.map((managerId) => {
      const manager = employees.find((e) => e.id === managerId);
      return `${manager.firstName} ${manager.lastName}`;
  });

  return managerNames;
}

function employeeCoverage(idOrName) {
  const employee = typeof idOrName === 'string'
      ? employees.find((e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName)
      : null;

  if (!employee || !employee.responsibleFor || employee.responsibleFor.length === 0) {
      return {};
  }

  const coverage = {};
  employee.responsibleFor.forEach((animalId) => {
      const animal = animals.find((a) => a.id === animalId);
      if (animal) {
          coverage[animal.name] = animal.residents.map((resident) => resident.name);
      }
  });

  return coverage;
}

  
  module.exports = {
    entryCalculator,
    schedule,
    animalCount,
    animalMap,
    animalPopularity,
    animalsByIds,
    animalByName,
    employeesByIds,
    employeeByName,
    managersForEmployee,
    employeeCoverage
};
