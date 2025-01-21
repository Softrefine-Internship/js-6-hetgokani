// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.
"use strict";
function repeatFunction(func, interval) {
  setInterval(func, interval);
}
function sayHello() {
  console.log("Hello!");
}
repeatFunction(sayHello, 1000);
