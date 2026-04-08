let tasks = [];
let currentFilter = 'all';

function addTask() {
  const text = document.getElementById('taskInput').value;
  const date = document.getElementById('dateInput').value;
  const time = document.getElementById('timeInput').value;
  const category = document.getElementById('categoryInput').value;

  if (!text) return;

  tasks.push({ text, date, time, category, done: false });
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    if (currentFilter === 'pending' && task.done) return;
    if (currentFilter === 'done' && !task.done) return;

    const li = document.createElement('li');

    const title = document.createElement('div');
    title.textContent = task.text + ' (Due: ' + task.date + ' ' + task.time + ')';
    if (task.done) title.classList.add('done');

    title.onclick = () => {
      task.done = !task.done;
      renderTasks();
    };

    const del = document.createElement('button');
    del.textContent = 'X';
    del.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    li.appendChild(title);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function filterTasks(type) {
  currentFilter = type;
  renderTasks();
}

// Dark mode
document.getElementById('darkToggle').addEventListener('change', function() {
  document.body.classList.toggle('dark');
});
