const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todo-list");
addBtn.addEventListener("click", function(e) { 
{e.preventDefault}()
const text = todoInput.value.trim();
if (text !== "") {
    const li = document.createElement("li"); li.textContent = text;
    todoInput.value = "";
}
});