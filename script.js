function saveProfile() {
  const nama = document.getElementById('inputNama').value;
  const kelas = document.getElementById('inputKelas').value;
  const umur = document.getElementById('inputUmur').value;

  document.getElementById('nama').textContent = 'Nama: ' + nama;
  document.getElementById('kelas').textContent = 'Kelas: ' + kelas;
  document.getElementById('umur').textContent = 'Umur: ' + umur;
}

// Tambah tugas
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  const badge = document.createElement('span');
  badge.className = 'badge';

  span.onclick = () => {
    span.classList.toggle('done');
    badge.textContent = span.classList.contains('done') ? '✔' : '';
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'x';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(badge);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

// Jam realtime
function updateDateTime() {
  const now = new Date();
  document.getElementById('datetime').textContent = now.toLocaleTimeString('id-ID');
}

setInterval(updateDateTime, 1000);
updateDateTime();
