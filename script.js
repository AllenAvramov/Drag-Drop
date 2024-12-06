const tasks = ['tasks--todo', 'tasks--doing', 'tasks--done'];

tasks.forEach((taskState) => {
  const tasks = document.getElementById(taskState);

  new Sortable(tasks, {
    group: 'shared',
    animation: 150,
    fallbackOnBody: true,
    chosenClass: 'task--chosen',
    dragClass: 'task--drag',
  });
});

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners to all `+` buttons
    const addTaskButtons = document.querySelectorAll(".add-task");
    
    addTaskButtons.forEach(button => {
      button.addEventListener("click", () => {
        const columnId = button.getAttribute("data-column");
        const taskContainer = document.getElementById(columnId);
  
        // Create a new task element
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `
          <header>
            <h3 contenteditable="true">New Task</h3>
          </header>
          <div class="tags">
            <div class="tag tag--frontend" contenteditable="true">Frontend</div>
          </div>
          <footer>
            
            <span contenteditable="true">Today</span>
          </footer>
        `;
  
        // Append the new task to the task container
        taskContainer.appendChild(newTask);
  
        // Optional: Focus on the newly created task's title
        newTask.querySelector("h3").focus();
      });
    });
  });
  
  