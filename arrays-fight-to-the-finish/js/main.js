//Create an array of movie titles. Loop through the array and each element to the h2.

let movieList = [
  "End Game",
  "Multiverse of Madness",
  "Far From Home",
  "Civil War",
];
// movieList.forEach((x, i) => console.log(x, i));

movieList.forEach((x, i) => (document.querySelector("h2").innerText += x));
//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numList = [1, 2, 3, 4, 5, 6];
numList.forEach((x, i) => {
  numList[i] = x + 3;
});
console.log(numList);
//Find the average of all the numbers from question three

let sum = 0;

for (let i = 0; i < numList.length; i++) {
  sum += numList[i];
}
console.log(sum / numList.length);
