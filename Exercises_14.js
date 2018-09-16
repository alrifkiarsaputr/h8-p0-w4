function sorting(arrNumber) {

  var len = arrNumber.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arrNumber[j - 1] > arrNumber[j]) {
        var temp = arrNumber[j - 1];
        arrNumber[j - 1] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  
  return arrNumber
}



function getTotal(arrNumber) {
  var angkaTerbesar = arrNumber[arrNumber.length - 1]
  var nilai = 0
  for (var k = 0; k < arrNumber.length; k++) {
    if (arrNumber[k] === angkaTerbesar) {
      nilai = nilai + 1
    }
  }
  return nilai

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber)
  var countHighest = getTotal(listSort)
  var angkaTerbesar = arrNumber[arrNumber.length - 1]

  return 'angka paling besar adalah ' + angkaTerbesar + ' dan jumlah kemunculan sebanyak ' + countHighest + ' kali'
  

}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
