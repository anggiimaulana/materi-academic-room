// contoh
document.write("Saya akan cumlaude");
document.write("Saya akan cumlaude");
document.write("Saya akan cumlaude");
document.write("Saya akan cumlaude");
document.write("Saya akan cumlaude");

// looping for
// bentuk umum 
for (initialization; condition; increment) {
    // kode yang akan dijalankan
}

// contoh
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-", i);
}
// Output: 0, 1, 2, 3, 4


// looping while
// bentuk umum
while (condition) {
    // kode yang akan dijalankan
}

// contoh
let i = 0;
while (i < 5) {
    console.log("Looping dengan while:", i);
    i++;
}
// Output: 0, 1, 2, 3, 4


// looping do-while
// bentuk umum
do {
    // kode yang akan dijalankan
} while (condition);

// contoh
let x = 0;
do {
    console.log("Looping dengan do...while:", x);
    x++;
} while (x < 5);
// Output: 0, 1, 2, 3, 4


// looping for of
// bentuk umum
for (const element of iterable) {
    // kode yang akan dijalankan
}

// contoh
const angka = [1, 2, 3, 4, 5];
for (const num of angka) {
    console.log(num);
}
// Output: 1, 2, 3, 4, 5


// looping for in
// bentuk umum
for (const property in object) {
    // kode yang akan dijalankan
}

// contoh
const mahasiswa = { nama: "Anggi", umur: 20, jurusan: "Sistem Informasi" };
for (const key in mahasiswa) {
    console.log(`${key}: ${mahasiswa[key]}`);
}
// Output:
// nama: Anggi
// umur: 20
// jurusan: Sistem Informasi


// penggunaan break dan continue
// break
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log("Loop dengan break:", i);
}
  // Output: 0, 1, 2

// continue
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log("Loop dengan continue:", i);
}
  // Output: 0, 1, 2, 4  