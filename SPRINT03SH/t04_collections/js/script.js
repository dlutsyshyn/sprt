const coinColection = new Set(['Bitcoin', 'Zcoin', 'Litecoin', 'Zcoin', 'Bitcoin']);
console.log(coinColection)
coinColection.add('T-coin')
console.log(coinColection);
console.log(coinColection.size)


const dishes = [
    ['Pizza', 25],
    ['Gamburger', 50],
    ['Hot-Dog', 10]
]
const menu = new Map(dishes)

console.log(menu)

for (let [key, value] of menu){
    console.log(key, value);
}

const bankVault = new WeakMap()
let pass1 = {deposit: 100000}
let pass2 = {deposit: 2200}
bankVault.set(pass1).set(pass2);

const crackBox = (credentials) => {
    if(bankVault.has(credentials)){
        console.log('Good job, box has been opened, take the money!')
    } else {console.log('Wrong way,sir');}
}
crackBox(pass1);
crackBox(pass2);

const users = [
    {name: 'Viktor'},
    {name: 'Dima'},
    {name: 'Roma'}
]
const guestList = new WeakSet([[users]])

console.log(guestList)


