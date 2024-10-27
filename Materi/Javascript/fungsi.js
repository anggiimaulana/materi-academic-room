var dataBarang = [];

function showBarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = '<a href="#" onclick="editBarang('+i+')">Edit</a>';
        var btnHapus = '<a href="#" onclick="deleteBarang('+i+')">Hapus</a>';
        
        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+ btnEdit +" | "+ btnHapus +"]</li>";
    }

    console.log(listBarang);
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
    console.log(dataBarang)
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
    console.log(dataBarang)
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
    console.log(dataBarang)
}
