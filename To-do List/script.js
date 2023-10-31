let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);

        taskInput.value = '';

        newTask.addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });
    }
});
