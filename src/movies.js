// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movieDirectors = movies.map((movie) => movie.director)

function uniqueMovieDirectors(arr) {
  return arr.filter((value, index) => arr.indexOf (value) === index);
}
console.log('Movie directors')
console.log(uniqueMovieDirectors(movieDirectors))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr) {
  let ssMovies = 0
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i].director === 'Steven Spielberg' && arr[i].genre.includes('Drama')){
      ssMovies++
    } 
  } return ssMovies
}
console.log('Steven Spielberg drama movies (Christofer Nolan is better :))')
console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scores = movies.map((movie) => movie.score);

const totalScore = scores.reduce((acc, val) => acc + val)

const avgScore = (totalScore / movies.length).toFixed(2)

console.log('All Score Average')
console.log(avgScore)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScores (arr) {
  let dramaMoviesScores = []
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i].genre.includes('Drama')){
      dramaMoviesScores.push(arr[i].score)
    } 
  } const totalDramaScores = dramaMoviesScores.reduce((acc, val) => acc + val);
    const avgDramaScore = (totalDramaScores / dramaMoviesScores.length).toFixed(2);
    console.log('Avg Drama movies score')
    console.log(avgDramaScore)
}


dramaMoviesScores(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
var moviesByYear = movies.slice(0);
moviesByYear.sort(function(a,b) {
    return a.year - b.year;
});

console.log('Movies by year ascending');
console.log(moviesByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
var moviesByName = [...movies].slice(0);
moviesByName.sort(function(a,b) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
});

moviesByName = moviesByName.slice(0,20)

console.log('First 20 movies by name')
console.log(moviesByName)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
