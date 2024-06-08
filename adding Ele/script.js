const newItemInput = document.getElementById("newItemInput");
const addItemButton = document.getElementById("addItemButton");
const todoList = document.getElementById("todoList");

addItemButton.addEventListener("click", function () {
  todoList.appendChild(`<li>${newItemInput}</li>`);
});
