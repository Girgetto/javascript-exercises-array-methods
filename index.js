// =============================================================================
// 1. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean mayor que 18
// =============================================================================
function getAdultsArray(ages) {
  // Aquí tu código
  const adults = ages.filter(function(age) {
    return age > 18;
  })
  return adults
}

// =============================================================================
// 2. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los valores que sean par
// =============================================================================
function getEvenArray(numbers) {
  // Aquí tu código
  const evenNumbers = numbers.filter((num)=>{
    return num % 2 === 0;
  })
  return evenNumbers
}

// =============================================================================
// 3. Dado el siguiente array, usa .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of legends'
// El objeto streamer tiene la siguiente forma
// { name: 'Nombre', gameMorePlayed: 'League of legends' }
// =============================================================================
function getStreamersLOL(streamers) {
  // Aquí tu código
  const lol = streamers.filter(function(streamer){
    return streamer.gameMorePlayed == 'League of legends'
  })
  return lol
}

// =============================================================================
// 4. Dado el siguiente array, usa .map() para generar un nuevo array con
// cada uno de los valores aumentados en 10.
// =============================================================================
function getIncreasedArray(numbers) {
  // Aquí tu código
  const ten = numbers.map(function(num){
    return num + 10;
  })
  return ten;
}

// =============================================================================
// 5. Dado el siguiente array, usa .map() para generar un nuevo array si hay números 
// negativos se conviertan a positivos y si son positivos se conviertan a negativos.
function getInvertedSignArray(numbers) {
  // Aquí tu código
  const invert = numbers.map(function(num){
    return num*-1
  })
  return invert;
}

// =============================================================================
// 6. Dado el siguiente array, usa .reduce() para calcular la suma de todos
// los valores del array.
// =============================================================================
function getSum(numbers) {
  // Aquí tu código
  const sum = numbers.reduce((acc,num)=>acc + num, 0)
  return sum
}

// =============================================================================
// 7. Dado el siguiente array, usa .reduce() para calcular la media de todos
// los valores del array.
// ej. numbers = [1, 2, 3, 4, 5]
// =============================================================================
function getAverage(numbers) {
  // Aquí tu código
  const average = numbers.reduce((acc, num) => acc + num, 0)
  return average / numbers.length
}

// =============================================================================
// 8. Dado el siguiente array, usa .reduce() para conseguir devolver un
// objeto con el número de veces que se repite cada string.
// =============================================================================
function getRepetitions(array) {
  // Aquí tu código

}

// =============================================================================
// 9. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero }
// =============================================================================
function getSumAges(people) {
  // Aquí tu código
  const sumAge = people.reduce((acc, people) => acc + people.age, 0)
  return sumAge
}

// =============================================================================
// 10. Dado el siguiente array, usa .reduce() para conseguir la suma de todas
// las edades de las personas que tienen perro.
// El objeto persona tiene la siguiente forma
// { name: 'Nombre', age: numero, hasDog: boolean }
// =============================================================================
function getSumDogAges(people) {
  // Aquí tu código
  const sumAgeWithDog = people.reduce((acc, person) => {
      if (person.hasDog){
        acc = acc + person.age
      }
      return acc
    }, 0)
  return sumAgeWithDog
}

// =============================================================================
// 11. Dado el siguiente array, usa .find() para encontrar el número 100.
// =============================================================================
function find100(numbers) {
  // Aquí tu código
  const num = numbers.find(elemento => elemento == 100)
  return num
}

// =============================================================================
// 12. Dado el siguiente array, usa .sort() para ordenar los números de menor
// a mayor.
// =============================================================================
function sortFromMinToMax(numbers) {
  // Aquí tu código
return numbers.sort((a,b) => a - b)
}

// =============================================================================
// 13. Dado el siguiente array, usa .some() para saber si hay algún número
// par.
// =============================================================================
function thereAreEven(numbers) {
  // Aquí tu código
  const even = numbers.some(num => num % 2 === 0);
  return even 
}

// =============================================================================
// 14. Dado el siguiente array, usa .every() para saber si todas las películas
// son del año 2018.
// El objecto pelicula tiene la siguiente forma
// { title: 'título', year: 2018 }
// =============================================================================
function areAllFilms2018(films) {
  // Aquí tu código
  const film = films.every(year => films.year == 2018)
  return film
}

// =============================================================================
// 15. Dado el siguiente array, usa .join() para concatenar todos los
// nombres en una coma.
// =============================================================================
function joinNames(names) {
  // Aquí tu código
  return names.join(", ")
}

// =============================================================================
// 16. Dado el siguiente array, usa .includes() para saber si 'Perro' está
// incluido en el array.
// =============================================================================
function thereIsADog(animals) {
  // Aquí tu código
  const elementExist = animals.includes("Perro")
  return elementExist;
}

// =============================================================================
// 17. Dado el siguiente array, usa .reverse() para darle la vuelta a los
// elementos del array.
// =============================================================================
function reverseNumbers(numbers) {
  // Aquí tu código
  return numbers.reverse()
}

// =============================================================================
// 18. Dado el siguiente array, usa .from() para convertirlo en un array.
// =============================================================================
function fromStringToArray(string) {
  // Aquí tu código
  const convertArray = Array.from(string)
  return convertArray
}
