document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
  
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        li.addEventListener("click", function () {
          li.classList.toggle("completed");
        });
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", function () {
          taskList.removeChild(li);
        });
  
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTaskButton.click();
      }
    });
  });
  