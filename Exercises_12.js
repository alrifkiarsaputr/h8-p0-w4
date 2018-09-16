/*
1. jika uang yang dimiliki krg dari 50rb, maka uang tidak cukup.
2. Jika uang yg dimiliki >= sepatuStacattu, maka push ke array list purchase; 'Sepatu Stacattu'.
    Lalu sisa uangnya(money-sepatuStacattu), mau dibelikan lagi, lanjut step 2.a
    2.a Jika sisa >=bajuZoro, maka push ke array list purchase; 'Baju Zoro'.
        Lalu sisa uangnya(sisa-bajuZoro). lanjut step 2.b
    2.b Jika sisa>=bajuHdanN, maka push ke array list purchase; 'Baju H&N'.
    2.c jika tidak, maka Jika sisa>=sweaterUniklooh, maka push ke array list purchase; 'Sweater Uniklooh'.
        Lalu sisa uangnya(sisa-sweaterUniklooh)
        Jika tidak, maka Jika sisa>=caseHp, maka push ke array list purchase; 'Case HP'.
        Lalu sisa uangnya(sisa-caseHp)
         

    Jika tidak, maka lanjut step 3.
3. Jika uang yg dimiliki >=bajuZoro, maka push ke array list purchase; 'Baju Zoro'.
   Jika tidak, maka lanjt step 4.
4. Jika uang yg dimiliki >= bajuHdanN, maka push ke array list purchase; 'Baju H&N'.
    Jika tidak, maka lanjut step 5.
5. Jika uang yg dimiliki >= sweaterUniklooh, maka push ke array list purchase; 'Sweater Uniklooh'.
    Jika tidak, maka lanjut ke step 6.
6. Push ke array list purchase; 'Case HP'.

    
*/

function shoppingTime(memberId, money) {

    var myObj = {}
    var sepatuStacattu = 1500000//1.500.000 1.
    var bajuZoro = 500000//500.000 2.
    var bajuHdanN = 250000//250.000 3.
    var sweaterUniklooh = 175000//175.000 4.
    var caseHp = 50000//50.000 5.
    var listBeli = []
    // var memberId='alrifkiarsaputr'
    // var money=750000


    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }

    else {
        if (money < 50000) {
            return 'Mohon maaf, uang tidak cukup'
        }
        else {
            myObj.memberId = memberId
            myObj.money = money

            if (money >= sepatuStacattu) {
                listBeli.push('Sepatu Stacattu')
                money = money - sepatuStacattu
            }
            if (money >= bajuZoro) {
                listBeli.push('Baju Zoro')
                money = money - bajuZoro
            }
            if (money >= bajuHdanN) {
                listBeli.push('Baju H&N')
                money = money - bajuHdanN
            }
            if (money >= sweaterUniklooh) {
                listBeli.push('Sweater Uniklooh')
                money = money - sweaterUniklooh
            }
            if (money >= caseHp) {
                listBeli.push('Casing Handphone')
                money = money - caseHp
            }
            myObj.listPurchased = listBeli
            myObj.changeMoney = money
        }
    }

    return myObj
}

console.log(shoppingTime('alrifkiarsaputr',2002000))
console.log(shoppingTime('1820RzKrnWn08', 2475000))
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja