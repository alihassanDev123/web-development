const base_url = "https://jsonplaceholder.typicode.com/todos";

function getTodos() {
  $.ajax({
    url: base_url,
    method: "GET",
    success: handleSuccessResponse,
    error: function (error) {
      console.error("Error fetching todos:", error);
    },
  });
}

function addTodo() {
  let todoInput = $("#todo-input");
  let newTodo = todoInput.val().trim();
  if (newTodo === "") {
    alert("Please enter a todo item.");
    return;
  }
  $("#todo-list").prepend(`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${newTodo}
        <button class="btn btn-danger btn-sm">Delete</button>
    </li>
`);
  $.ajax({
    url: `${base_url}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      title: newTodo,
      completed: false,
      userId: 1,
    }),
    success: function (response) {
      console.log("Created Todo:", response);
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  let todoInput = $("#todo-input");
  let newTodo = todoInput.val().trim();
  if (newTodo === "") {
    alert("Please enter a todo item.");
    return;
  }
  addTodo(newTodo);
  todoInput.val("");
}

function handleSuccessResponse(response) {
  console.log(response);
  let todos = response;
  let todoList = $("#todo-list");
  todoList.empty();
  todos.forEach((todo) => {
    todoList.append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${todo.title}
                <button class="btn btn-danger btn-sm" onclick="deleteTodo(${todo.id})">Delete</button>
            </li>
        `);
  });
}

function deleteTodo(id) {
  
}


$(document).ready(function () {
  getTodos();

  $("#todo-form").submit(handleFormSubmit);
});
