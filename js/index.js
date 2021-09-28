// import all our files that we need
import { testLengthofTextBoxValue } from "./libs/testLength.js";
import createHTML from "./libs/createHTML.js";

// Create an empty list to add all our items into
let itemsList = [];

// Select the button, search box and UL from the DOM
const searchButton = document.querySelector(".add-item__button");
const searchInput = document.querySelector(".add-item__textbox");

// Gathering data from the search box and showing it inside the DOM.

// 1. Watch the button for a click event
searchButton.onclick = function () {
  // 2. lets test the input value because we dont want empty values stored inside our array.
  // We have create a function that returns a boolean value based on the length of the input value.
  console.log(testLengthofTextBoxValue(searchInput.value, 3));

  if (!testLengthofTextBoxValue(searchInput.value, 3)) {
    // 3. if the condition is not true

    console.log("The input value is incorrect");
    // You can add better validation in if you like.
    return;
  } else {
    // 4. Add the item to the array called itemsList
    itemsList.push(searchInput.value);
    document.querySelector(".items__list").innerHTML = "";
    createHTML(itemsList, ".items__list");
  }

  // 6. Toggling a class to cancel off an item
  // You can only bind events after you have created them
  // in the DOM
  let listItem = document.querySelectorAll(".item");
  console.log(listItem);
  listItem.forEach(function (item) {
    item.onclick = function () {
      item.classList.toggle("completed");
    };
  });
};
