// function declaration
// bentuk umum
function namaFunction(parameter1, parameter2) {
    // kode yang akan dijalankan
}

// contoh
function tambah(a, b) {
    return a + b;
}

console.log(tambah(5, 3)); // Output: 8


// function expression
// bentuk umum
const namaFunction = function(parameter1, parameter2) {
    // kode yang akan dijalankan
};

// contoh
const kali = function(a, b) {
    return a * b;
};

console.log(kali(4, 5)); // Output: 20


// arrow function
// bentuk umum
const namaFunction = (parameter1, parameter2) => {
    // kode yang akan dijalankan
};

// contoh
const bagi = (a, b) => a / b;

console.log(bagi(10, 2)); // Output: 5


// anonymous function
// contoh
setTimeout(function() {
    console.log("Halo setelah 2 detik!");
}, 2000);

// parameter dan argument dalam function
// contoh
function salam(nama) {
    return `Halo, ${nama}!`;
}

console.log(salam("Anggi")); // Output: Halo, Anggi!  