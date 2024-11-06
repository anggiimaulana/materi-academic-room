// Ambil referensi elemen
let textInput = document.getElementById('text-input');
let charCount = document.getElementById('char-count');

// Fungsi untuk menghitung jumlah karakter
function updateCharCount() {
  // Ambil teks yang ada di textarea
  let currentText = textInput.value;
  
  // Hitung jumlah karakter
  let count = currentText.length;
  
  // Update tampilan jumlah karakter
  charCount.textContent = count;
}

// Tambahkan event listener untuk menangani input dari pengguna
textInput.addEventListener('input', updateCharCount);
