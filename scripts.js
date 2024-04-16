const text = document.querySelector(".text");
const Btn = document.querySelector(".addTask");
const ul = document.querySelector("#taskList");
Btn.addEventListener("click", addTask);
function addTask() {
  const textInput = text.value.trim();
  const li = document.createElement("li");
  li.innerHTML = `<span class='span'>${textInput}</span>
    <button class='deleteBtn'>Delete</button>`;
  ul.appendChild(li);
  li.querySelector(".deleteBtn").addEventListener("click", deleteTask);
}
function deleteTask() {
  this.parentElement.remove();
}
