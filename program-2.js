// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
"use strict";
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error("Error " + error);
    });
}
