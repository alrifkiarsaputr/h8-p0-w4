function hitungHuruf(kata){
var pecahArray=kata.split(' ')//[ 'rajin', 'pangkal', 'kaya' ]

var i=0
while(i<pecahArray.length){
    var j=0
    while(j<pecahArray[i].length){
        var k=0
        var jumlah=0
        while(k<pecahArray[i].length){
            if(pecahArray[i][j]===pecahArray[i][k]){
                jumlah=jumlah+1
            }
            k++
        }
        
        j++
    }
    i++
    return pecahArray[i]
}

}

console.log(hitungHuruf('rajin pangkal kaya'));
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
