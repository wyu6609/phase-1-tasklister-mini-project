document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  function logSubmit(event) {
    console.log("submit clicked");
    event.preventDefault();
    createNewToDo();
    //append list to list id = "task"
  }

  function createNewToDo() {
    console.log("createNewTodo");
    let node = document.createElement("li");
    let text = document.getElementById("new-task-description").value;
    let textNode = document.createTextNode(text);
    node.appendChild(textNode);
    document.getElementById("tasks").appendChild(node);
  }
  form.addEventListener("submit", logSubmit);
});
//add click eventListener() to CREATE NEW TASK submit btn
