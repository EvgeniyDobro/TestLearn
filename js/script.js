
const numberOfFilms = +prompt( "Сколько фильмов вы уже просмотрели?" , '0')
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('последний просмотренный фильм ?',''),
      b = +prompt('на сколько его оцените ?',''),
      c = prompt('последний просмотренный фильм ?',''),
      d = +prompt('на сколько его оцените ?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log('кол-во фильмов ' + numberOfFilms);
console.log(personalMovieDB);


