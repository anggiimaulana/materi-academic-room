// Ambil referensi elemen
let todoInput = document.getElementById('todo-input');
let todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas ke dalam daftar
function addTodo() {
  let todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  // Membuat elemen list item baru
  let todoItem = document.createElement('li');

  // Membuat elemen teks untuk tugas
  let textNode = document.createTextNode(todoText);
  todoItem.appendChild(textNode);

  // Membuat tombol untuk menandai selesai
  let completeBtn = document.createElement('button');
  completeBtn.textContent = "Selesai";
  completeBtn.onclick = function () {
    todoItem.classList.toggle('completed');
  };
  todoItem.appendChild(completeBtn);

  // Membuat tombol untuk menghapus tugas
  let removeBtn = document.createElement('button');
  removeBtn.textContent = "Hapus";
  removeBtn.classList.add('remove-btn');
  removeBtn.onclick = function () {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(removeBtn);

  // Menambahkan todo item ke dalam daftar
  todoList.appendChild(todoItem);

  // Reset input field
  todoInput.value = '';
}
