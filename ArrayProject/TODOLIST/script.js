// let array_list = [];

// function clickButton(){
//     const inputTask = document.getElementById('inputTask');
//     const plusAdd = document.getElementById('btn1');
//     const addTask = document.getElementById('addTask');

//     const taskText = taskInput.value.trim();
// }



// const input = document.createElement('input');

function toggleInput() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const toggleInputButton = document.getElementById('btn1');
    
    if (taskInput.style.display === 'none') {
        taskInput.style.display = 'inline-block';
        taskInput.style.width = '20vw';
        taskInput.style.height = '10vh';
        addTaskButton.style.display = 'inline-block';
        addTaskButton.style.marginLeft = '1vw';
        addTaskButton.style.marginBottom = '20vh';
        toggleInputButton.textContent = 'remove';
    } else {
        taskInput.style.display = 'none';
        addTaskButton.style.display = 'none';
        toggleInputButton.textContent = '+';
    }
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}
