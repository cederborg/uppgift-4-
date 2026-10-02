/* Uppgift 4 */

const taskInput = document.querySelector("#addtask");
const addButton = document.querySelector("#pushButton");
const taskList = document.querySelector("#listan");
const errorMessage = document.querySelector("#error_message");
const counter = document.querySelector("#counter");

const tasks = [];
let completedTasks = 0;

addButton.addEventListener("click", handleClick);

function handleClick() {
  const taskText = taskInput.value.trim();

  errorMessage.textContent = "";

  if (taskText === "") {
    errorMessage.textContent = "Skriv en uppgift först.";
    return;
  }

  // Spara uppgiften som object i array.
  const task = {
    text: taskText,
    completed: false
  };

  tasks.push(task);

  // rad i listan
  const listItem = document.createElement("li");
  listItem.textContent = task.text;
  taskList.appendChild(listItem);

  // uppgift klar
  listItem.addEventListener("click", function() {
    if (task.completed === false) {
      task.completed = true;
      listItem.classList.add("completed");

      completedTasks = completedTasks + 1;
      counter.textContent = completedTasks + " tasks completed";
    }
  });

  // rensa text
  taskInput.value = "";
}
