//90
// 1x90
// 2x45
// 3x30
// 5x18
// 6x15
// 9x10

/*
1. input suatu variabel angka
2. cari faktor angka
3. 
*/
//console.log(24%1)

function digitPerkalianMinimum(angka) {

  var array1 = []
  var array2 = []
  var tampung = 0

  for (var i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      array1.push(i)
    }
  }

  for (var j = 0; j < array1.length; j++) {
    array2.push(array1[j] + array1[array1.length - (j + 1)].toString())
  }

  var tampung=array2[0].length
  for (var k = 1; k < array2.length; k++) {
    if (array2[k].length < tampung) {
      tampung = array2[k].length
    }
    else if (array2[k].length > tampung) {
      tampung=tampung
    }
    else {
      tampung = array2[k].length
    }
  }
  return tampung
}

// console.log(tampung)
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2




// console.log(array2)

// console.log(array1)
//console.log(array1)
// for (var j=0; j<array1.length; j++){
//   for (var k=array1.length-1; k>=0; k--){
//     inputan=array1[j]array1[k]

//   }
// }