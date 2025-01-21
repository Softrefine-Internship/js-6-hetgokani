// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
"use strict";
function delay(callback) {
  setTimeout(callback, 2000);
}
delay(() => {
  console.log("delay after 2 seconds.");
});
