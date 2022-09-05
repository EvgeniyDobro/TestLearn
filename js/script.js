'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt( "Сколько фильмов вы уже просмотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt( "Сколько фильмов вы уже просмотрели?", '');
    }
}

// start();

function detectPersonalLevel() {
    if (numberOfFilms < 10 ) {
        alert ('Просмотрено довольно мало фильмов');
    }
    else if (numberOfFilms <= 30 ) {
        alert ('Вы классический зритель');
    }
    else if (numberOfFilms > 30 ) {
        alert ('Вы киноман');
    }
    else alert ('Произошла ошибка');
}

// detectPersonalLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remebmerMyFilms() {
    for (let i = 0; i < 2 ; i++) {
        const a = prompt('последний просмотренный фильм ?',''),
              b = +prompt('на сколько его оцените ?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            alert('error');
            i--;
        }
    }
}

// remebmerMyFilms();

function showMyDb(hidden) {
    if (!hidden ) {
        console.log(personalMovieDB);
    }
}
// showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt( `Ваш любимый жанр под номером ${i}` );
    }
}

writeYourGenres();

console.log('кол-во фильмов ' + numberOfFilms);
console.log(personalMovieDB);