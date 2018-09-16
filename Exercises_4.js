function cariModus(arr) {
    var arraySama = []
    var angkaModus = 0
    var penampung = 0
    var angka1 = arr[0]
    // 77757
    // for (var h = 0; h < arr.length; h++) {
    //     if (angka1 === arr[h]) {
    //         angkaModus = -1
    //     }
    //     else {
    //         angkaModus = 0
    //         break
    //     }
    // }
    // // beda, 
    if (angkaModus === -1) {
        return angkaModus
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            var tampung = 0
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    tampung = tampung + 1
                }
            }
            arraySama.push(tampung)
        } //jhbkbkbk
        var ki = 'sama' //ada beda        
        for (var n = 0; n < arraySama.length; n++) {
            for (var m = 0; m < arraySama.length; m++) {
                if (arraySama[n] !== arraySama[m]) {
                    ki = 'beda'
                }
            }
        }
        if (ki === 'sama') {
            return -1
        }
        // return arraySama
        for (var k = 0; k < arraySama.length; k++) {
            if (arraySama[k] > penampung) {
                penampung = arraySama[k]
                angkaModus = arr[k]
            }
        }

        return angkaModus

    }
}


console.log(cariModus([10, 4, 5, 2, 4]))//4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1