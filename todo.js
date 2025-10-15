let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (!taskText) return alert('Please enter a task');
  tasks.push({ text: taskText, completed: false });
  taskInput.value = '';
  saveTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
}

function deleteTask(index) {
  if(confirm('Are you sure you want to delete this task?')) {
    tasks.splice(index, 1);
    saveTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="complete-btn" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

displayTasks();
