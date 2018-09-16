function kaliTerusRekursif(angka) {

  if (angka < 10) {
    return angka
  }

  else {
    var angka2 = angka.toString()
    angka=angka2[0]
    for(var i=1; i<angka2.length; i++){
    angka = angka * angka2[i]

    }
    return kaliTerusRekursif(angka)

  }

}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6


