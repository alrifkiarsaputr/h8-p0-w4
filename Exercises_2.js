/* 16,12
1.buat fungsi dg inputnya angka1 dan angka2

2.cari fpb dari angka1 dan angka2??
2.aJika angka1>angka2, maka bil.terbesar tidak lebih besar dari angka1.
2.bJika angka2>angka1, maka bil.terbesar tidak lebih besar dari angka2.
2.c lakukan perulangan dari index=2 sampai index kurang dr angka?
2.d Jika angka1 habis dibagi dg bil.terbesar dan angka2 habis dibagi dg bil.tebesar, maka tampilkan bil.terbesar

3.tampilkan fpb
*/

function fpb(angka1,angka2){
  var tampung=0
  var angkaBatas=0
  if(angka1>angka2){
    angkaBatas=angka1
  }
  else if(angka2>angka1){
    angkaBatas=angka2
  }
  for(var i=1;i<angkaBatas;i++){
    if(angka1%i===0 && angka2%i===0){
      tampung=i
    }
  }
  return tampung
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1