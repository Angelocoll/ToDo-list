let darkBtn = document.querySelector(".dark");
let body = document.querySelector("#bod");
let Todoinput = document.querySelector("#Todo");
let TodoBtn = document.querySelector("#Todobtn");
let ul = document.querySelector("#TodoList");
let h1 = document.querySelector("h1");

let offOron = localStorage.getItem("darkmode");
if (offOron === "on") {
  addEventListener("DOMContentLoaded", () => {
    body.classList.add("darkmode");
    ul.classList.add("darkmodee");
  });
}

let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
savedTodos.forEach(addTodoToList);

function addTodoToList(todo) {
  let li = document.createElement("li");
  li.innerText = "Att göra: " + todo;
  let RaderaBtn = document.createElement("button");
  RaderaBtn.innerText = "X";
  RaderaBtn.addEventListener("click", () => {
    let index = Array.from(ul.children).indexOf(li);
    savedTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    li.remove();
    h1.innerText = "To-do lista!";
  });
  li.appendChild(RaderaBtn);
  ul.appendChild(li);
}

TodoBtn.addEventListener("click", () => {
  if (savedTodos.length < 5) {
    savedTodos.push(Todoinput.value);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    addTodoToList(Todoinput.value);
    Todoinput.value = "";
  } else {
    h1.innerText = "Din Lista är full!";
    Todoinput.value = "";
  }
});

darkBtn.addEventListener("click", () => {
  ul.classList.toggle("darkmodee");
  body.classList.toggle("darkmode");
  let mode = ul.classList.contains("darkmodee") ? "on" : "off";
  localStorage.setItem("darkmode", mode);
});
