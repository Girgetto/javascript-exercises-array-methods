// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  const isAdult = ages.filter((age) => age > 18);
  return isAdult;
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  const pares = numbers.filter((number) => number % 2 == 0);
  return pares;
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  const playersLol = streamers.filter(
    (player) => player.gameMorePlayed == "League of legends"
  );
  return playersLol;
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  const newArray = numbers.map((number) => number + 10);
  return newArray;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  const newArray = numbers.map((number) => number * -1);
  return newArray;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  const myArray = numbers.reduce((sum, number) => sum + number, 0);
  return myArray;
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  const myArray = numbers.reduce((sum, number) => sum + number, 0);
  return myArray / numbers.length;
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  const myArray = array.reduce((cont, el) => {
    if (cont[el]) {
      cont[el]++;
    } else {
      cont[el] = 1;
    }
    return cont;
  }, {});
  return myArray;
}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  const myArray = people.reduce((sum, person) => sum + person.age, 0);
  return myArray;
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  const myArray = people.reduce((sum, person) => {
    if (person.hasDog) {
      sum = sum + person.age;
    }
    return sum;
  }, 0);
  return myArray;
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  const myArray = numbers.find((number) => number === 100);
  return myArray;
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  return numbers.sort((a, b)=> a - b)
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  const par = numbers.some((number)=> number % 2 === 0); 
  return par
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  const is2018 = films.every((film)=> film.year === 2018); 
  return is2018
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  return names.join(", "); 
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  return animals.includes('Perro')
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  return numbers.reverse(); 
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  return Array.from(string)
}
