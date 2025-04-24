// DOM Elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");
const taskCount = document.getElementById("taskCount");
const clearCompletedBtn = document.getElementById("clearCompleted");

// Tasks array
let tasks = [];

// Load tasks from localStorage if available
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTasks();
}

// Add new task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
}

// Render tasks based on filter
function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  let filteredTasks = tasks;
  if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.setAttribute("data-id", task.id);

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span class="task-text">${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;

    taskList.appendChild(taskItem);
  });

  // Update task count
  const activeTasks = tasks.filter((task) => !task.completed).length;
  taskCount.textContent = `${activeTasks} ${
    activeTasks === 1 ? "task" : "tasks"
  } left`;
}

// Toggle task completion
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    const taskId = parseInt(
      e.target.closest(".task-item").getAttribute("data-id")
    );
    const task = tasks.find((task) => task.id === taskId);
    task.completed = e.target.checked;
    saveTasks();
    renderTasks(getActiveFilter());
  }

  // Delete task
  if (e.target.classList.contains("delete-btn")) {
    const taskId = parseInt(
      e.target.closest(".task-item").getAttribute("data-id")
    );
    tasks = tasks.filter((task) => task.id !== taskId);
    saveTasks();
    renderTasks(getActiveFilter());
  }
});

// Filter tasks
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    renderTasks(this.getAttribute("data-filter"));
  });
});

// Clear completed tasks
clearCompletedBtn.addEventListener("click", function () {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks(getActiveFilter());
});

// Get active filter
function getActiveFilter() {
  const activeBtn = document.querySelector(".filter-btn.active");
  return activeBtn.getAttribute("data-filter");
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial render
renderTasks();
