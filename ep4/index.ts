function test(dayOfWeek: number) { // สร้างฟังชั่น test เก็บ dayOfWeek เป็น number
    if (dayOfWeek === 1) { // ถ้าเป็นวันที่ 1
        console.log('Hello Sunday') // พิม Hello Sunday
    } else if (dayOfWeek === 2) { // ถ้าเป็นวันที่ 2
        console.log('Hello Monday') // พิม Hello Monday
    } else if (dayOfWeek === 3) { // ถ้าเป็นวันที่ 3
        console.log('Hello Tuesday') // พิม Hello Tuesday
    } else if (dayOfWeek === 4) { // ถ้าเป็นวันที่ 4
        console.log('Hello Wednesday') // พิม Hello Wednesday
    } else if (dayOfWeek === 5) { // ถ้าเป็นวันที่ 5
        console.log('Hello Thursday') // พิม Hello Thursday
    } else if (dayOfWeek === 6) { // ถ้าเป็นวันที่ 6
        console.log('Hello Friday') // พิม Hello Friday
    } else if (dayOfWeek === 7) { // ถ้าเป็นวันที่ 7
        console.log('Hello Saturday') // พิม Hello Saturday
    }
}



function test2(dayOfWeek: number) { // สร้างฟังชั่น test2 เก็บ dayOfWeek เป็น number
    switch (dayOfWeek) { // กำหนด switch ให้ dayOfWeek
        case 1: // dayOfWeek = 1
            console.log('Hello Sunday') // พิม 'Hello Sunday'
            break // จบ
        case 2: // dayOfWeek = 2
            console.log('Hello Monday') // พิม 'Hello Monday'
            break // จบ
        case 3: // dayOfWeek = 3
            console.log('Hello Tuesday') // พิม 'Hello Tuesday'
            break // จบ 
        case 4: // dayOfWeek = 4
            console.log('Hello Wednesday') // พิม 'Hello Wednesday'
            break // จบ
        case 5: // dayOfWeek = 5
            console.log('Hello Thursday') // พิม 'Hello Thursday'
            break // จบ
        case 6: // dayOfWeek = 6
            console.log('Hello Friday') // พิม 'Hello Friday'
            break // จบ
        case 7: // dayOfWeek = 7
            console.log('Hello Saturday') // พิม 'Hello Saturday'
            break // จบ
        default: // ตั้งค่า default เผื่อคำตอบไม่ตรงกับเงื่อนไข
            console.log('Error') // พิม 'Error'
            break // จบ
    }
} 



function Shirt(size: string) { // สร้างฟังชั่น Shirt เก็บ size เป็น string
    switch (size) { // กำหนด switch ให้ size
        case ('s'): // size = 's'
            console.log('ผอม') // พิม 'ผอม'
            break // จบ
        case ('m'): // size = 'm'
            console.log('ผอม') // พิม 'ผอม'
            break // จบ
        case ('l'): // size = 'l'
            console.log('ท้วม') // พิม 'ท้วม'
            break // จบ
        case ('xl'): // size = 'xl'
            console.log('อ้วน') // พิม 'อ้วน'
            break // จบ
        case ('2xl'): // size = '2xl'
            console.log('อ้วน') // พิม 'อ้วน'
            break // จบ
        default: // ตั้งค่า default เผื่อคำตอบไม่ตรงกับเงื่อนไข
            console.log('error') // พิม 'Error'
            break // จบ
    }
} 



function calc(num: number , digit: number) { // สร้างฟังชั่น calc เก็บ num เป็น number , digit เป็น number
    const x = num.toFixed(digit) // กำหนดค่าคงที่ให้ x แสดง num ออกมาพร้อมจำนวนจุดทศนิยมตามที่ใส่ค่า
    return x // แสดงค่า x
}

console.log(calc(10 , 5))



function calc(num: number) { // สร้างฟังชั่น calc เก็บ num เป็น number 
    const x = num.toLocaleString() // กำหนดค่าคงที่ให้ x แสดง num ออกมาพร้อมใส่ comma คั่นตัวเลข
    return x // แสดงค่า x
}

console.log(calc(9895654494))



const str: string = "Hello" // กำหนดค่าคงที่ str เป็น string 

console.log(str.charAt(0)) // แสดงตัวอักษรตำแหน่งที่ 0



function checkStringLength(str: string) { // สร้างฟังชั่น checkStringLength เก็บ str เป็น string
    console.log(str.length) // แสดงความยาวของตัวอักษร
}

checkStringLength('sdadada')



function test(t: string , n: number) { // สร้างฟังชั่น test เก็บ t เป็น string , n เป็น number
    console.log(t.charAt(n)) // แสดงตัวอักษรตำแหน่งที่เราให้ค้นหา
}

test('hello' , 0)



function test2(t: string , n: number) { // สร้างฟังชั่น test2 เก็บ t เป็น string , n เป็น number
    return t.charAt(n) // แสดงตัวอักษรตำแหน่งที่เราให้ค้นหา
}

test('hello' , 0)



const str: string = 'อยากกลับบ้าน' // กำหนดค่าคงที่ str เป็น string

console.log(str.includes('กลับ')) // ตรวจสอบว่ามีคำที่เราให้ค้นหาหรือไม่



function test(msg: string , search: string) { // สร้างฟังชั่น test เก็บ msg เป็น string , search เป็น string
    if (msg.includes(search) === true) { // ถ้า msg มีข้อความที่เราใส่
        console.log(msg.indexOf(search)) // พิมตำแหน่งของข้อความ
    } else {console.log('ไม่พบคำที่ค้นหา') // ถ้าไม่มีพิม 'ไม่พบคำที่ค้นหา
    }
}

test('กลับบ้าน' , 'sasa')