/* 1. Join
Berfungsi untuk menggabungkan elemen array menjadi sebuah string.
Sebuah argumen bisa diinputkan kedalam method ini yang akan
berfungsi sebagai karakter pembatas untuk menyatukan array.*/
// let gabung = [1,2,3,4,5,"a","b","c"]
// console.log(gabung.join("-"))

/* 2. Reverse
Digunakan untuk membalikkan urutan dari elemen di dalam array.
Method ini akan mengubah array asal menjadi array baru.*/
// let balik = [5,4,3,2,1]
// console.log(balik.reverse())

/* 3. Sort
Digunakan untuk mengurutkan elemen dari array.
Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad.
Jika elemen di dalam array bukan huruf, maka akan dikonversi sementara menjadi string,
baru kemudian dilakukan proses pengurutan. Jika ditemukan elemen dengan nilai null atau undefined,
akan di tempatkan pada urutan akhir.*/
// let urut = ["e","d","a","c","b"],
//     urut1 = [60,400,3000,90,7]
// console.log(urut1.sort())

/* 4. Concat
Berfungsi untuk penyambungan array.
Hasil akhir dari pemanggilan fungsi ini adalah array baru dengan penambahan dari method concat().
Elemen yang ditambahkan diinput sebagai argumen dari method concat().*/
// let sambung = [1,2,3,4],
//     sambung2 = sambung.concat(1,2)
// console.log(sambung2)

/* 5. Slice
Digunakan untuk memotong array menjadi array baru, atau menjadi ’sub-array’ dari array asal.
Method ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.
Jika hanya diberikan 1 argumen, maka method ini akan mengembalikan array baru dimulai
dari posisi argumen sampai dengan akhir array. Jika argumen bernilai negatif,
maka perhitungan akan dimulai dari akhir array.*/
// let potong = [1,"a",2,"b",3,"c",4,"d",5,"e"],
//     string = "aku dan dia"
//     potong1 = (potong.slice(0,4))
//     string1 = (string.slice(-5))
// console.log(string1)

/* 6. Push
Method push akan menambahkan elemen array pada akhir dari array*/
// let tambah = [1,2,3,4,5]
//     tambah.push(2)
// console.log(tambah)

/* 7. Pop
Method pop akan menghapus elemen array pada akhir dari array*/
// let hapus = ["a","b","c","d"]
//     hapus.pop()
// console.log(hapus)

/* 8. UnShift
Method unshift akan menambahkan elemen baru diawal array,
dan menggeser seluruh eleman yang ada.*/
// let tambahawal = [20,30,40,50]
//     tambahawal.unshift(10)
// console.log(tambahawal)

/* 9. Shift
Method shift akan menghapus elemen paling awal array,
dan menggeser ke bawah seluruh elemen lain di dalam Array.*/
// let tambahakhir = [10,20,30,40,50]
//     tambahakhir.shift()
// console.log(tambahakhir)

/* 10. ToString
Method ini mengkonversi array menjadi string.*/
let konversi = [1,2,3,"a","b","c"]
console.log(konversi.toString())