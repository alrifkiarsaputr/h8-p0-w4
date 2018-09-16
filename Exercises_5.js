function ubahHuruf(kata){

//var kata='developer'//efwfmpqfs
var kamus='abcdefghijklmnopqrstuvwxyz'

var i=0
var huruf=''
while(i<kata.length){
    var j=0
    while(j<kamus.length){
        if(kata[i]===kamus[j]){
            huruf=huruf+kamus[j+1]
            
        }
        j++  
    }
    i++
}
return huruf
}

console.log(ubahHuruf('wow'));// xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

