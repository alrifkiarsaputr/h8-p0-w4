function checkAB(str){

  var a=str.indexOf('a')
  var b=str.indexOf('b')
  var a1=str.lastIndexOf('a')
  var b1=str.lastIndexOf('b')
  var jarak=0


// return 
  if(a>b){
    jarak=a-b
  }
  else if(a<b){
    jarak=b-a
  }

  if(jarak===4){
    return true
  }
  else{
    return false
  }

  if(a1>b1){
    jarak=a1-b1
  }
  else if(a1<b1){
    jarak=b1-a1
  }
  if(jarak===4){
    return true
  }
  else{
    return false
  }

}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false