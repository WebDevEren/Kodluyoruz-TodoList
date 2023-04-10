let addInput = document.querySelector("#todoInput");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector("#todoList");
let todoForm = document.querySelector("#todoForm");
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", removeTodoUI);
todoList.addEventListener("click", completeTodo);
function addTodo(event) {
  if (addInput.value.trim() == "") {
    alertUI("warning", "Boş Bırakılamaz");
  } else {
    let li = document.createElement("li");
    let i = document.createElement("i");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center position-relative p-3";
    li.innerHTML = addInput.value;
    i.className = "fa-solid fa-xmark hoverForClose";
    i.id = "todoClose";
    li.appendChild(i);
    todoList.appendChild(li);
    addInput.value = "";
    alertUI("success", "Todo Başarılı Bir Şekilde Eklendi");
  }
  event.preventDefault();
}
function removeTodoUI(event) {
  if (event.target.id == "todoClose") {
    event.target.parentElement.remove();
  }
  event.preventDefault();
}
function completeTodo(event) {
  if (
    event.target.className ==
      "list-group-item d-flex justify-content-between align-items-center position-relative p-3" ||
    event.target.className ==
      "list-group-item d-flex justify-content-between align-items-center position-relative p-3 customize-li"
  ) {
    event.target.classList.toggle("customize-li");
  }
}
function alertUI(type, message) {
  let div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.innerHTML = message;
  todoForm.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
}