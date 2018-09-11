/*
1. masukkan input array angka
2. lakukan proses penghitungan median??
2.a Jika jumlahArray tidak habis dibagi 2,
    maka median adalah nilai tengah dari array angka.
    nilai tengah adalah index array ke (jumlah array-1 dibagi 2 
    lalu ditambah 1)
    
2.b Jika jumlahArray habis dibagi 2, maka median
    adalah rata-rata dari dari array
    angka.
    rata-rata adalah (index array ke jumlah array/2 + index array ke
    jumlah array/2 +1) dibagi 2

3. tampilkan nilai median
*/

function cariMedian(arr) {
    var median = 0
    var angka1 = 0
    var angka2 = 0
    if (arr.length % 2 === 0) {
        angka1 = (arr.length / 2) //4/2=2
        angka2 = (arr.length / 2) + 1 //4/2 +1 =3
        median = (arr[angka1 - 1] + arr[angka2 - 1]) / 2 //(arr[1]+arr[2])/2
    }
    else {
        angka1 = ((arr.length - 1) / 2) + 1
        median = arr[angka1 - 1]
    }
    return median
}

console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5