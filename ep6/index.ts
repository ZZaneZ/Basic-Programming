for (let i = 0; i <= 20; i++) {
    console.log(i)
} // for loop



let bottle: number = 0
for (let i = 1; i <= 365; i++) {
    bottle = bottle + i
} 

console.log(bottle) // for loop



let sum: number = 0
let i: number = 1

while (i <= 31) {
    sum = sum + i
    i++
} 

console.log(sum) // while loop



let sum: number = 0
let i: number = 1

do {
    sum = sum + i
    i++
} while (i <= 31) 

console.log(sum) // do while loop



let age: number = 0

for (let i = 1; i <= 20; i++) {
    console.log('ฉันอายุ', i, 'ปี')
}

console.log(age)  // for loop



let age: number = 0
let i: number = 1

while (i <= 31) {
    console.log('ฉันอายุ', i, 'ปี')
    i++
} 

console.log(age) // while loop



let age: number = 0
let i: number = 1

do {
    console.log('ฉันอายุ', i, 'ปี')
    i++
} while (i <= 20) 

console.log(age) // do while loop 



let car1: string = 'Toyota'
let car2: string = 'Honda'
let car3: string = 'Mitsubishi'
let car4: string = 'Mazda'
let car5: string = 'Hiroshima'

const cars: string[] = ['Toyota', 'Honda', 'Mitsubishi', 'Mazda', 'Hiroshima']
const num: number[] = [1, 2, 3, 4, 5]
const bool: boolean[] = [true, false, true, false]

for (let i = 0; i < cars.length; i++) [
    console.log(cars[i])
] // for loop



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

for (let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ยังไง')
    }
} // for loop รถ



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

let i: number = 0

while (i <= cars.length) {
     if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ยังไง')
    }
    i++
} // while loop รถ



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']

let i: number = 0

do {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
    i++
} while (i <= cars.length) // do while loop รถ



const friend: string[] = ['สมศรี', 'สมสัก', 'สมถุย', 'สมชาย', 'สมหญิง']

for (let i = 0; i < friend.length; i++) {
    if (friend[i] === 'สมถุย') {
        console.log('ไปกินหมูกระทะกัน ไอสมถุย')
    }
} // for loop หมุกระทะ



const friend: string[] = ['สมศรี', 'สมสัก', 'สมถุย', 'สมชาย', 'สมหญิง']

let i: number = 0

while (i <= friend.length) {
     if (friend[i] === 'สมถุย') {
        console.log('ไปกินหมูกระทะกัน ไอสมถุย')
    }
    i++
} // while loop หมูกระทะ



const friend: string[] = ['สมศรี', 'สมสัก', 'สมถุย', 'สมชาย', 'สมหญิง']

let i: number = 0

do {
    if (friend[i] === 'สมถุย') {
        console.log('ไปกินหมูกระทะกัน ไอสมถุย')
    }
    i++
} while (i <= friend.length) // do while loop หมูกระทะ




const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < test.length; i++) {
    if (test[i] === 3 || test[i] === 5 || test[i] === 7) {
        test[i] = 0
    }
}

console.log(test) // for loop 3 5 7



const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i: number = 0

while (i <= test.length) {
     if (test[i] === 3 || test[i] === 5 || test[i] === 7) {
        test[i] = 0
    }
    i++
}

console.log(test) // while loop 3 5 7




const test: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i: number = 0

do {
    if (test[i] === 3 || test[i] === 5 || test[i] === 7) {
        test[i] = 0
    }
    i++
} while (i < test.length) 

console.log(test) // do while loop 3 5 7