// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.
"use strict";
function fetchretry(url, retries) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => {
      if (retries > 0) {
        fetchretry(url, retries - 1);
      } else {
        console.log("Failed after retries");
      }
    });
}
const apiURL = "https://jsonplaceholder.typicode.com/todos/1";
fetchretry(apiURL, 3);
