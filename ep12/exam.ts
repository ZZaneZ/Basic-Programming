const number = [1, 2, 3, 4, 5]

// hard
function convertToArrayString(array: number[]) {
    const result: string[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i].toString())
    }
    return result
}

//easy
function convertToArrayStringMap(array: number[]) {
    return array.map(function(element, index) {
        return element.toString()
    })
}



const peoples = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 18},
    {name: 'CHarlie', age: 35},
];

const people: {
    name: string;
    age: number;
}[] = [];

for (let i = 0; i < peoples.length; i++) {
    if(peoples[i].age > 18) {
        people.push(peoples[i])
    }
}



const names = ["John Doe", "Jane Smith", "Jack Brown"]

function cutNameMap(array: string[]) {
    return array.map(function(element, index) {
        const cutName = element.split(" ")
        return {
            firstName: cutName[0],
            lastName: cutName[1]
        }
    })
}



const inventory = {
    name: "Laptop",
    quantity : 5,
    isAvailable: function() {
        return this.quantity > 0
    }
}

console.log(inventory.isAvailable())



const account = {
    name: 'bank',
    balance: 0,
    deposit: function(amount: number) {
        if (amount < 0) {
            console.log('Number cant be 0')
            return
        }
        this.balance = this.balance + amount
        console.log('Deposit'+ amount + 'completed,' + 'current' + this.balance)
    },
    withdraw: function(amount: number) {
        if (amount > this.balance) {
            console.log('Not enough money,' + 'you only have' + this.balance)
            return
        }
        this.balance = this.balance - amount
        console.log('Withdraw' + amount + 'completed,' + 'current' + this.balance)
    }
}

account.deposit(500)
account.withdraw(400)



const productsData = [
    {price: 100},
    {price: 200},
    {price: 150},
    {price: 300},
    {price: 250},
];
//hard
function updatePriceWithForLoop(
    products: {
        price: number;
    }[]
) {
    const m: {
        price: number;
    }[] = [];
    for(let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i])
        }
    }
    for(let i = 0; i < m.length; i++) {
        m[i].price = m[i].price * 1.1;
    }
    return m;
}
//easy??
function updatedPrice(products1 : {
    price: number;
}[]) {
    return products1.filter(function(element, index) {
        return element.price > 150
    }).map(function(element, index) {
        return ({
            price: element.price * 1.1,
        })
    })
}

console.log(updatePriceWithForLoop(productsData))
console.log(updatedPrice(productsData))