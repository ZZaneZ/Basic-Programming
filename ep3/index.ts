function helloWorld() {
    console.log('Hello World')
}

helloWorld() // ไม่มี Input และ Output



function helloName(name: string) {
    console.log(name)
}

helloName('Zane') // มี Input ไม่มี Output



function getPie() {
    return 3.14
}

console.log(getPie()) // ไม่มี Input มี Output



function st(fname:string , sname:string) {
    if (fname === 'mix' && sname === 'zane') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('mix', 'zane')



function st(fname:string , sname:string , tname:string) {
    if ((fname === 'mix' || sname === 'zane') && tname === 'forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อมเรียน')
    }
}

st('mix', 'zane' , 'forth')



function st(gender:string , height:number , weight:number) {
    if (gender === 'ชาย' && (height > 170 || (weight > 50 && weight <= 110)  )) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}

st('ชาย', 169, 112)



function st(age: number , salary: number, deposit: number) {
    if (age >=  16 && salary < 70000 && deposit < 500000) {
        console.log('รับ 10000 บาท')
    } else {
        console.log('อด....')
    }
}

st(17, 69999, 499999)



function h(height: number) {
    console.log(height)
}

h1((200))

function w(weight: number) {
    console.log(weight)
}
console

let height2: number = (height: number * height: number)

let bmi: number = (weight: number * height: number)

function calculate(weight: number * height: number) { // ฟังชั่น grade เก็บข้อมูลตัวเลข 3 ตัว
    let score: number = homework + midterm + final // กำหนดตัวแปร score ให้เก็บข้อมูลตัวเลข 3 ตัว

    if(score < 50) { 
        return 'grade F' 
    } else if (score < 60) { 
        return 'grade D' 
    } else if (score < 70) { 
        return 'grade C' 
    } else if (score < 80) { 
        return 'grade B' 
    } else { 
        return 'grade A' 
    }
}