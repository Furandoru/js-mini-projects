document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const prioritySelector = document.getElementById("priority-selector");
  
    // Dark mode toggle functionality
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  
    // Add task functionality
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      const priority = prioritySelector.value;
  
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        // Add the appropriate class based on the selected priority
        if (priority === "low") {
          li.classList.add("low-priority");
        } else if (priority === "medium") {
          li.classList.add("medium-priority");
        } else if (priority === "high") {
          li.classList.add("high-priority");
        }
  
        // Add animation only for new tasks (fade-in slide)
        li.style.animation = "fadeInSlide 0.3s ease-in-out";
  
        // Toggle completed status (without triggering the slide animation)
        li.addEventListener("click", function () {
          li.classList.toggle("completed");
        });
  
        // Create delete button for each task
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        
        // Add event listener to the delete button with fade-out effect
        deleteBtn.addEventListener("click", function () {
          li.classList.add("fade-out"); // Add the fade-out effect
  
          // Remove the task after the fade-out transition
          setTimeout(() => {
            taskList.removeChild(li); // Remove the task from the list
          }, 300); // Match the transition time (300ms)
        });
  
        // Append the delete button to the task item
        li.appendChild(deleteBtn);
        
        // Add the task item to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
      }
    });
  
    // Allow adding task via Enter key
    taskInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addTaskButton.click();
      }
    });
  });
  