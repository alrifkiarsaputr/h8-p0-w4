/*
1. Terdapat inputan siapa yg membeli, produk apa yg dibeli, dan brp jumlah yg dibeli.
2. Ditentukan listBarang apa saja yg dijual oleh toko, harga, serta stok barang.

lakukan deklarasi var array kosong.

lakukan deklarasi var obj kosong.
lakukan deklarasi var sisa stok=0.
lakukan var deklarasi jumlahBarang=0
[
  
isi object kosong dg:
- list default produk yg dijual oleh toko.
1. lakukan dulu perulangan dari i=0 hingga i<listBarang.length untuk value, baru push keyname.
dg keyname 'product', lalu valuenya adalah perulangan dari listBarang[i][0].
- siapa pembeli barang toko, diambil dari inputan.
ambil dr keyname nama dr inputan.
cek dulu pake if. Jika name yg pertama amount nya <= listBarangg[i][2], maka push nama ke object shoppers. 
lalu sisa stok=listBarang[i][2]-amount dr name yg pertama.
Jika name yg kedua beli produk ini lg, maka cek dulu stoknya.
jika amount dr name yg kedua<= sisaStok, maka push namenya.
sisaStok=sisaStok-amount dr name yg kedua. dst

- Pada product pertama, maka leftOver adalah sisaStok.
Jgn lupa simpan juga variabel total jumlah barang dr produk pertama yg dibeli.
jumlahBarang=listBarang[i][2]-leftOver

- totalProfit merupakan jumlahBarang dikalikan dengan listBarang[i][1]

]*akhir dr looping

*lakukan juga untuk kedua barang toko lainnya

selesaikan dulu untuk ketiga produk, baru push ke dalam array kosong objectnya.
4. Tampilkan hasilnya dalam bentuk array of object
*/

function countProfit(shoppers) {

  let listBarang = [['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]]

  var arrayFinal = []
  var objFinal = {}

  for (var i = 0; i < listBarang.length; i++) {
    var totalProfit = 0
    var jumlahBarang = 0
    var sisaStok = 0
    var arrayShoppers = []

    objFinal.product = listBarang[i][0]

    sisaStok = listBarang[i][2]

    for (var j = 0; j < shoppers.length; j++) {
      if (shoppers[j].amount <= listBarang[i][2]) {
        arrayShoppers.push(shoppers[j].name)
        objFinal.shoppers = arrayShoppers
        sisaStok = sisaStok - shoppers[j].amount
      }
    }

    jumlahBarang = listBarang[i][2] - sisaStok

    objFinal.leftOver = sisaStok

    totalProfit = jumlahBarang * listBarang[i][1]

    objFinal.totalProfit = totalProfit


    console.log(objFinal)
  }
}

console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 8 }]))


