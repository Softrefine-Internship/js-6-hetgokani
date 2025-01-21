// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
"use strict";
const arr = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
];
function fetchdata(arr) {
  const promises = arr.map((url) => fetch(url).then((res) => res.json()));
  Promise.all(promises)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
fetchdata(arr);
