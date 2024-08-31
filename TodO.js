document.getElementById('add-task-button').addEventListener('click', function() {
    const inputBox = document.getElementById('input-box');
    const taskText = inputBox.value.trim();

    if (taskText) {
        addTask(taskText);
        inputBox.value = '';  // Clear the input box
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskTextSpan = taskItem.querySelector('.task-text');
    const currentText = taskTextSpan.textContent;
    
    // Prompt user to enter new text
    const newText = prompt('Edit task:', currentText);
    
    if (newText !== null && newText.trim() !== '') {
        taskTextSpan.textContent = newText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
