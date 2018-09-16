var str = 'hello'//ehllo

var kamus = 'abcdefghijklmnopqrstuvwxyz'

/*
1. lihat str ke 0, lalu jika sama dg kamus ke j, 
    maka simpan posisi huruf sebagai j, lalu simpan
    kedalam arrayKosong
2. lihat str ke 1, lalu jika sama dg kamus ke j,
    maka simpan posisi huruf sebagai j,dst
3. Bandingkan isi di dalam arrayKosong. Jika 
    index ke 0 lebih 
*/

var arrayKosong = []
var arrayBerurut = []
var arrayAbjad = []
for (var i = 0; i < str.length; i++) {
    var urutanHuruf = 0
    for (var j = 0; j < kamus.length; j++) {
        if (str[i] === kamus[j]) {
            urutanHuruf = j
            arrayKosong.push(urutanHuruf)
        }
    }
    // arrayAbjad.push(str[i])
}
//[7,4,11,11,14]->[4,7,11,11,14]

for (var k = 0; k < arrayKosong.length; k++) {
    if (arrayKosong[k] < arrayKosong[k + 1]) {
        arrayBerurut.push(arrayKosong[k])
    }
    else if(arrayKosong > arrayKosong[k+1]){
        arrayBerurut.push(arrayKosong[k+1])
    }
}
console.log(arrayBerurut);
// console.log(arrayAbjad);

//var array=[7,2,5,4,11]


