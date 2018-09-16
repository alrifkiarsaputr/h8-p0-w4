// /*algoritma
// -akan ada input angka(6)
// -isi fungsi dg kriteria angka prima?
//   -angka prima:jika input%input=0, maka
//   -jika input lbh besar dr 1
//   -jika input%

// -tampilkan true jika input =kriteria angka prima
// -tampilkan false jika input!=kriteria angka prima

// */
// function angkaPrima(angka){
//   if(angka>1){
//   if(angka%angka===0){
//     if(angka)
//   }
// }
// else{
//   return false
// }
// }

/*
2,3,5,7,11,13,17,19
9,15,21,25,27
*/

function angkaPrima(angka){
var prima=true
for (i=2;i<angka;i++){
  if(angka%i===0){
    prima=false
    
  }
   
  
}
return prima
}
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false