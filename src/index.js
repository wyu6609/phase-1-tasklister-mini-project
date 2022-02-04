document.addEventListener("DOMContentLoaded", function () {
  //DOM nodes
  const textBox = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");
  const formSubmit = document.getElementById("create-task-form");
  // submit button functionality
  formSubmit.addEventListener("submit", () => {
    event.preventDefault();
    console.log("button clicked");
    addList();
  });

  function addList() {
    let li = document.createElement("li");
    li.innerHTML = textBox.value;
    let button = document.createElement("button");
    button.innerHTML = "x";
    button.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(button);
    list.appendChild(li);
  }
});
