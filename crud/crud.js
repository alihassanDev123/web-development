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
      <span class="todo-text">${newTodo}</span>
      <div>
        <button class="btn btn-warning btn-sm edit-btn me-2">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      </div>
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
        <span class="todo-text">${todo.title}</span>
        <div>
          <button class="btn btn-warning btn-sm edit-btn me-2">Edit</button>
          <button class="btn btn-danger btn-sm delete-btn">Delete</button>
        </div>
      </li>
    `);
  });
}

function deleteTodo(element) {
  $(element).closest("li").remove();
}

function editTodo(element) {
  let li = $(element).closest("li");
  let textSpan = li.find(".todo-text");
  let oldText = textSpan.text();
  let input = $(`<input type="text" class="form-control form-control-sm" value="${oldText}">`);
  textSpan.replaceWith(input);
  $(element).text("Save").removeClass("edit-btn btn-warning").addClass("save-btn btn-success");
}

function saveUpdatedTodo(element) {
  let li = $(element).closest("li");
  let input = li.find("input");
  let newText = input.val().trim();
  if (!newText) return alert("Todo cannot be empty!");
  input.replaceWith(`<span class="todo-text">${newText}</span>`);
  $(element).text("Edit").removeClass("save-btn btn-success").addClass("edit-btn btn-warning");
}


$(document).ready(function () {
  getTodos();

  $("#todo-form").submit(handleFormSubmit);

  $("#todo-list").on("click", ".delete-btn", function () {
    deleteTodo(this);
  });

  $("#todo-list").on("click", ".edit-btn", function () {
    editTodo(this);
  });

  $("#todo-list").on("click", ".save-btn", function () {
    saveUpdatedTodo(this);
  });
});
