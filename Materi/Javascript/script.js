document.getElementById("myButton").addEventListener("click", function() {
    alert("Hello from External JavaScript!");
});

function nilaiSaya(nilai) {
    if (nilai >= 80) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else if (nilai >= 50) {
        return "D";
    } else {
        return "E";
    }
}

document.write(nilaiSaya(80));

function hitungRataRata(a, b, c) {
    let total = a + b + c;
    return total / 3;
}

document.write("<br>" + "Rata-rata: " + hitungRataRata(10, 20, 30) + "<br>"); // Output: Rata-rata: 20
document.write("Rata-rata: " + hitungRataRata(5, 10, 15) + "<br>");   // Output: Rata-rata: 10

function sapa() {
    return "Selamat siang, ";
}

function wellcome() {
    let nama = "Anggi Maulana";
    let menyapa = sapa();
    alert(menyapa + " " + nama + "!" );
}

wellcome();