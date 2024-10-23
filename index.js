// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  // Aquí tu código

  const over18Array = ages.filter(function (ages) {
    return ages > 18;
  });
  console.log(over18Array);
  return over18Array;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  // Aquí tu código
  const parArray = numbers.filter(function (numbers) {
    return numbers % 2 === 0;
  });
  console.log(parArray);
  return parArray;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  // Aquí tu código
  console.log(streamers);
  const lolArray = streamers.filter(function (streamers) {
    return streamers.gameMorePlayed === "League of legends";
  });
  console.log(lolArray);
  return lolArray;
}
console.log(lolArray(streamers));

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  // Aquí tu código
  constMas10Array = numbers.map(function (numbers) {
    //console.log(numbers);
    return numbers + 10;
  });
  //
  return constMas10Array;
}
console.log(constMas10Array);

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  // Aquí tu código
  console.log(numbers);
  const flippedArray = numbers.map(function (number) {
    if (number < 0) {
      return number * -1;
    } else {
      return number * -1;
    }
  });
  console.log(flippedArray);
  return flippedArray;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  // Aquí tu código
  console.log(numbers);
  const reduceSum = numbers.reduce(function (rtotal, num) {
    return rtotal + num;
  }, 0);

  console.log(reduceSum);
  return reduceSum;
}

getSum(numbers);
console.log(getSum(numbers));

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  // Aquí tu código
  console.log(numbers);
  const reduceSum = numbers.reduce(function (rtotal, num) {
    return rtotal + num;
  }, 0);
  const average = reduceSum / numbers.length;
  console.log(average);
  return average;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  // Aquí tu código
  console.log(array);
  const repititions = array.reduce(function (rtotal, currentItem) {
    if (rtotal[currentItem]) {
      rtotal[currentItem]++;
    } else {
      rtotal[currentItem] = 1;
    }

    return rtotal;
  }, {});

  console.log(repititions);
  return repititions;
}
// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  // Aquí tu código
  console.log(people);
  const ages = people.reduce(function (rtotal, person) {
    return rtotal + person.age;
  }, 0);
  return ages;
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  // Aquí tu código
  const dogsOwners = people.reduce(function (rtotal, person) {
    if (person.hasDog) {
      return rtotal + person.age;
    }
    return rtotal;
  }, 0);
console.log(dogsOwners);
return (dogsOwners);
}

//console.log(getSumDogAges(people));
// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  // Aquí tu código
  const find100 = numbers.find(num => num === 100);
  console.log(find100);
  return find100;

}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  // Aquí tu código
   numbers.sort(function(a,b) {
    return a - b;
   });

   console.log(numbers);
   return numbers;
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  // Aquí tu código


  
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  // Aquí tu código
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  // Aquí tu código
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  // Aquí tu código
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  // Aquí tu código
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  // Aquí tu código
}
