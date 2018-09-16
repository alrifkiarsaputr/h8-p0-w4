var kamusBiasa = 'abcdefghijklmnopqrstuvwxyz'
var kamusKapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var angka='0123456789'
var simbol='-'

/*
Ketika huruf ke 0 adalah H, maka ubah H menjadi h
Ketika huruf ke 1 adalah e, maka ubah e menjadi E
Ketika huruf ke 2 adalah l, maka ubah l menjadi L
Ketika huruf ke 3 adalah l, maka ubah l menjadi L
Ketika huruf ke 4 adalah o, maka ubah o menjadi O
*/
function tukarBesarKecil(kata) {
    var huruf=''
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < kamusBiasa.length; j++) {
            if (kata[i] === kamusBiasa[j]) {
                huruf = huruf + kamusKapital[j]
            }
            else if (kata[i] === kamusKapital[j]) {
                huruf = huruf + kamusBiasa[j]
            }
            //else if(kata[i]!==kamusBiasa[j]&& kata[i]!==kamusKapital[j])
        }
        if(kata[i]===' '){
            huruf=huruf+' '
        }
        
    }
    return huruf
}

console.log(tukarBesarKecil('Hello World'));
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
