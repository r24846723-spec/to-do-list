// Tambah tugas
function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;

  // Klik = tandai selesai
  span.onclick = () => {
    span.classList.toggle('done');

    if (span.classList.contains('done')) {
      badge.textContent = '✔ Selesai';
    } else {
      badge.textContent = '';
    }
  };

  // Badge selesai
  const badge = document.createElement('span');
  badge.className = 'badge';

  // Tombol hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Hapus';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(badge);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

// Tanggal & Jam realtime
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString('id-ID');
  document.getElementById('datetime').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
