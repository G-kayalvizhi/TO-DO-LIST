// Get references to the elements
const addButton = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim();
    
    // Only add a task if input is not empty
    if (taskText !== "") {
        const li = document.createElement("li");
        
        // Create the task text
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        
        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        
        // Event listener for deleting the task
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(li);
        });
        
        // Event listener for marking a task as completed
        taskContent.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
        
        // Append the task and button to the list item
        li.appendChild(taskContent);
        li.appendChild(deleteButton);
        
        // Add the list item to the todo list
        todoList.appendChild(li);
        
        // Clear the input field
        newTaskInput.value = "";
    }
}

// Add task when the button is clicked
addButton.addEventListener("click", addTask);

// Add task when Enter key is pressed
newTaskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
