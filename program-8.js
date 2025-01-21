// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
"use strict";
function fetchdata(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);
  fetch(url, { signal })
    .then((response) => response.json())
    .then((data) => {
      clearTimeout(timer);
      console.log(data);
    })
    .catch((error) => {
      clearTimeout(timer);
      if (error.name === "AbortError") {
        console.log("Request timed out");
      } else {
        console.log("Error:", error);
      }
    });
}
fetchdata("https://jsonplaceholder.typicode.com/todos/1", 3000);
