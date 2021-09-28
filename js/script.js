const listItems = [];

const items = document.querySelectorAll("li span");

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function () {
  listItems.push(listInput.value);
  console.log(listItems);

  let list = document.querySelector(".list_ul");


  listItems.forEach((element) => {
      .list_ul
    console.log(element);
  });
};

// button.addEventListener("click", addToList);

// function addToList() {
//   const newItem = listInput.value.trim();
//   listItems.push(newItem);

//   console.log(listItems);
// }

// function createList() {
//   const listContainer = document.querySelectorAll("ul");

//   listContainer.innerHTML = "";
// }

// items.forEach(function (item) {
//   item.addEventListener("click", handleClick);
// });

// function handleClick() {
//   event.target.classList.toogle("complete");
// }
