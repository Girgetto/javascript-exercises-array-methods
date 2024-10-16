// 1. Dado el array, usa .filter() para generar un nuevo array con los valores que sean mayor que 18
function getAdultsArray(ages) {
  return ages.filter(age => age > 18);
}


// 2. Dado el array, usa .filter() para generar un nuevo array con los valores que sean pares
function getEvenArray(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

// 3. Dado el array, usa .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'
function getStreamersLOL(streamers) {
  return streamers.filter(streamer => streamer.gameMorePlayed === 'League of legends');
}

// 4. Dado el array, usa .map() para generar un nuevo array con cada uno de los valores aumentados en 10
function getIncreasedArray(numbers) {
  return numbers.map(number => number + 10);
}

// 5. Dado el array, usa .map() para generar un nuevo array con los signos invertidos
function getInvertedSignArray(numbers) {
  return numbers.map(number => number * -1);
}

// 6. Dado el array, usa .reduce() para calcular la suma de todos los valores del array
function getSum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

// 7. Dado el array, usa .reduce() para calcular la media de todos los valores del array
function getAverage(numbers) {
  return numbers.reduce((total, number) => total + number, 0) / numbers.length;
}

// 8. Dado el array, usa .reduce() para devolver un objeto con el número de veces que se repite cada string
function getRepetitions(array) {
  return array.reduce((acc, string) => {
    acc[string] = (acc[string] || 0) + 1;
    return acc;
  }, {});
}

// 9. Dado el array, usa .reduce() para sumar todas las edades de las personas
function getSumAges(people) {
  return people.reduce((total, person) => total + person.age, 0);
}

// 10. Dado el array, usa .reduce() para sumar las edades de las personas que tienen perro
function getSumDogAges(people) {
  return people.reduce((total, person) => person.hasDog ? total + person.age : total, 0);
}

// 11. Dado el array, usa .find() para encontrar el número 100
function find100(numbers) {
  return numbers.find(number => number === 100);
}

// 12. Dado el array, usa .sort() para ordenar los números de menor a mayor
function sortFromMinToMax(numbers) {
  return numbers.sort((a, b) => a - b);
}

// 13. Dado el array, usa .some() para saber si hay algún número par
function thereAreEven(numbers) {
  return numbers.some(number => number % 2 === 0);
}

// 14. Dado el array, usa .every() para saber si todas las películas son del año 2018
function areAllFilms2018(films) {
  return films.every(film => film.year === 2018);
}

// 15. Dado el array, usa .join() para concatenar todos los nombres en una coma
function joinNames(names) {
  return names.join(', ');
}

// 16. Dado el array, usa .includes() para saber si 'Perro' está incluido en el array
function thereIsADog(animals) {
  return animals.includes('Perro');
}

// 17. Dado el array, usa .reverse() para darle la vuelta a los elementos del array
function reverseNumbers(numbers) {
  return numbers.reverse();
}

// 18. Dado el array, usa .from() para convertirlo en un array
function fromStringToArray(string) {
  return Array.from(string);
}

