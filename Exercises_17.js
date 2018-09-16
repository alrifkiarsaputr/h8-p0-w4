/*
1. Ada inputan angka
2. Jika angka kurang dr 10 digit, maka langsung return angka
3. Jika angka lbh dr 1 digit, maka lakukan perhitungan sampai angka tinggal 1 digit??
4. tampilkan fungsinya


*/
//512
function totalDigitRekursif(angka) {

  if (angka < 10) {
    return angka
  }

  else {

    angka = angka.toString()

    return Number(angka.slice(0,1)) + (totalDigitRekursif(Number(angka.slice(1))))

  }

}
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5