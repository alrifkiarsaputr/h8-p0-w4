function changeMe(arr) {
  var myObj = {}
  var age = 0
  var tahunSekarang = 2018

  for (var i = 0; i < arr.length; i++) {
    myObj.firstName = arr[i][0]
    myObj.lastName = arr[i][1]
    myObj.gender = arr[i][2]
    var birthYear = arr[i][3]
    age = tahunSekarang - birthYear
    if (birthYear === undefined|| birthYear > tahunSekarang) {
      myObj.age = 'Invalid Birth Year'
    }
    else {
      myObj.age = age
    }
    console.log(myObj)
  }
}

changeMe([['Platinum', 'Fox', 'female',1995], ['John', 'Doe', 'male', 2000]])
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
