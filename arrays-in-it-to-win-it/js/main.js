//Create an array of movies with at least three movies.

let movieList = ["Matrix", "Thor:Ragnarok", " Avengers"];

//Using the array from above, store the first movie in a variable

let firstMovie = movieList[0];
console.log(firstMovie);

//Get the length of the original array and store it in a new variable

let lengthOfFirstMovie = movieList.length;
console.log(lengthOfFirstMovie);

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastMovieOnTheList = movieList[movieList.length - 1];
console.log(lastMovieOnTheList);
