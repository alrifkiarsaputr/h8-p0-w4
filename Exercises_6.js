function hitungHuruf(kata) {
    var pisah = kata.split(' ');
    var kataPerulangan = []; //Tampung total perulangan di setiap kata
    var ulangHuruf = [];
    // return pisah
    for(var i = 0; i < pisah.length; i++){
      var pisahHuruf = pisah[i].split(''); //bikin array dari 1 kata
      // return pisahHuruf
      var hurufPerulangan = 0; //Tampung total ulang di setiap huru dalam 1 kata
      for(var j = 0; j < pisah[i].length -1; j++){
        for(var k = j; k < pisahHuruf.length; k++){
          
          if(j !== k && pisah[i][j] === pisahHuruf[k]){
            hurufPerulangan += 1;//identifikasi huruf yang sama, klo sama kasih point 1
            var splice = pisahHuruf.splice(k, 1);
            
          }
          
        }
      }
      kataPerulangan.push(hurufPerulangan);
    }
    
    var perulanganTerbesar = Math.max.apply(null, kataPerulangan); //Cari angka yang paling gede
    var lokasiPerulanganTerbesar = kataPerulangan.indexOf(perulanganTerbesar);//Cari lokasi array dari array kata yang udah di split
    if(lokasiPerulanganTerbesar !== 0){
      return pisah[lokasiPerulanganTerbesar];
    }else{
      return -1;
    }
  }
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau