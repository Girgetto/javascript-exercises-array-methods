//1-Filtrar adultos: Implementa una función que tome un array de edades y use el método .filter() para generar un nuevo array con las edades que sean mayores que 18.
function filtrarAdultos(edades) {
  return edades.filter(edad => edad > 18);
}

//2-Filtrar números pares: Implementa una función que tome un array de números y use el método .filter() para generar un nuevo array con los valores que sean números pares.
function filtrarNumerosPares(numeros) {
  return numeros.filter(numero => numero % 2 === 0);
}

//3-Filtrar streamers de League of Legends: Implementa una función que tome un array de objetos de streamers y use el método .filter() para generar un nuevo array con los streamers que tengan gameMorePlayed igual a 'League of legends'.
function filtrarStreamersLOL(streamers) {
  return streamers.filter(streamer => streamer.gameMorePlayed === 'League of legends');
}

//4-Mapear valores aumentados: Implementa una función que tome un array de números y use el método .map() para generar un nuevo array con cada uno de los valores aumentados en 10.
function mapearValoresAumentados(numeros) {
  return numeros.map(numero => numero + 10);
}

//5-Mapear valores con signos invertidos: Implementa una función que tome un array de números y use el método .map() para generar un nuevo array en el que, si un número es negativo, se convierta en positivo, y si es positivo, se convierta en negativo.
function mapearValoresIvertidos(numeros) {
  return numeros.map(numero => numero * -1);
}

//6-Calcular la suma con .reduce(): Implementa una función que tome un array de números y use el método .reduce() para calcular la suma de todos los valores del array.
function calcularSuma(numeros) {
  return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}

//7-Calcular la media con .reduce(): Implementa una función que tome un array de números y use el método .reduce() para calcular la media de todos los valores del array.
function calcularMedia(numeros) {
  const total = numeros.reduce((acumulado, actual) => acumulado + actual, 0);
  return total / numeros.length;
}

//8-Contar repeticiones: Implementa una función que tome un array de elementos y use el método .reduce() para devolver un objeto con el número de veces que se repite cada elemento.
function contarRepeticiones(arr) {
  return arr.reduce((acumulador, valor) => {
    acumulador[valor] = (acumulador[valor] || 0) + 1;
    return acumulador;
  }, {});
}

//9-Sumar edades de personas: Implementa una función que tome un array de objetos de personas y use el método .reduce() para conseguir la suma de todas las edades de las personas.
function sumarEdades(personas) {
  return personas.reduce((acumulado, persona) => acumulado + persona.edad, 0);
}

//10-Sumar edades de personas con perro: Implementa una función que tome un array de objetos de personas y use el método .reduce() para conseguir la suma de todas las edades de las personas que tienen perro.
function sumarEdadesConPerro(personas) {
  return personas.reduce((acumulado, persona) => {
    if (persona.tienePerro) acumulado += persona.edad;
    return acumulado;
  }, 0);
}

//11-Encontrar el número 100: Implementa una función que tome un array de números y use el método .find() para encontrar el número 100.
function encontrarNumero100(numeros) {
  return numeros.find(numero => numero === 100);
}

//12-Ordenar números de menor a mayor: Implementa una función que tome un array de números y use el método .sort() para ordenar los números de menor a mayor.
function ordenarNumeros(numeros) {
  return numeros.sort((a, b) => a - b);
}

//13-Comprobar si hay números pares: Implementa una función que tome un array de números y use el método .some() para comprobar si hay al menos un número par en el array.
function comprobarNumerosPares(numeros) {
  return numeros.some(numero => numero % 2 === 0);
}

//14-Comprobar si todas las películas son del año 2018: Implementa una función que tome un array de objetos de películas y use el método .every() para comprobar si todas las películas son del año 2018.
function comprobarPeliculas2018(peliculas) {
  return peliculas.every(pelicula => pelicula.anio === 2018);
}

//15-Concatenar nombres con coma: Implementa una función que tome un array de nombres y use el método .join() para concatenar todos los nombres en una cadena separada por comas.

function concatenarNombres(nombres) {
  return nombres.join(', ');
}

//16-Comprobar si 'Perro' está incluido: Implementa una función que tome un array de animales y use el método .includes() para comprobar si 'Perro' está incluido en el array.

function comprobarSiPerroEstaIncluido(animales) {
  return animales.includes('Perro');
}

//17-Darle la vuelta a elementos de un array: Implementa una función que tome un array de números y use el método .reverse() para darle la vuelta a los elementos del array.

function darLaVuelta(numeros) {
  return numeros.reverse();
}

//18-Convertir una cadena en un array: Implementa una función que tome una cadena y use el método .from() para convertirla en un array.

function convertirCadenaEnArray(cadena) {
  return Array.from(cadena);
}


