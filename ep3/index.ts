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



function bmi(height: number, weight: number) { 
    let score: number = weight / (height * height)

    if(score < 18.50) { 
        return 'น้ำหนักน้อย' 
    } else if (score < 22.90) { 
        return 'ปกติ' 
    } else if (score < 24.90) { 
        return 'ท้วม' 
    } else if (score < 29.90) { 
        return 'อ้วน' 
    } else { 
        return 'อ้วนมาก' 
    }
}

console.log(bmi(1.7, 90)) // การบ้าน (เทสแล้วผ่านทุกเงื่อนไข)