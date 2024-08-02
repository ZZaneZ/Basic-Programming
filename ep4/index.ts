function test(dayOfWeek: number) {
    if (dayOfWeek === 1) {
        console.log('Hello Sunday')
    } else if (dayOfWeek === 2) {
        console.log('Hello Monday')
    } else if (dayOfWeek === 3) {
        console.log('Hello Tuesday')
    } else if (dayOfWeek === 4) {
        console.log('Hello Wednesday')
    } else if (dayOfWeek === 5) {
        console.log('Hello Thursday')
    } else if (dayOfWeek === 6) {
        console.log('Hello Friday')
    } else if (dayOfWeek === 7) {
        console.log('Hello Saturday')
    }
}



function test2(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('Hello Sunday')
            break
        case 2:
            console.log('Hello Monday')
            break
        case 3:
            console.log('Hello Tuesday')
            break 
        case 4:
            console.log('Hello Wednesday')
            break 
        case 5:
            console.log('Hello Thursday')
            break 
        case 6:
            console.log('Hello Friday')
            break 
        case 7:
            console.log('Hello Saturday')
            break
        default:
            console.log('Error')
            break
    }
} 



function Shirt(size: string) {
    switch (size) {
        case ('s'):
            console.log('ผอม')
            break
        case ('m'):
            console.log('ผอม')
            break
        case ('l'):
            console.log('ท้วม')
            break 
        case ('xl'):
            console.log('อ้วน')
            break 
        case ('2xl'):
            console.log('อ้วน')
            break 
        default:
            console.log('error')
            break
    }
} 



function calc(num: number , digit: number) {
    const x = num.toFixed(digit)
    return x
}

console.log(calc(10 , 5))



function calc(num: number) {
    const x = num.toLocaleString()
    return x
}

console.log(calc(9895654494))



const str: string = "Hello"

console.log(str.charAt(0))



function checkStringLength(str: string) {
    console.log(str.length)
}

checkStringLength('sdadada')



function test(t: string , n: number) {
    console.log(t.charAt(n))
}

test('hello' , 0)



function test2(t: string , n: number) {
    return t.charAt(n)
}

test('hello' , 0)



const str: string = 'อยากกลับบ้าน'

console.log(str.includes('กลับ'))



function test(msg: string , search: string) {
    if (msg.includes(search) === true) {
        console.log(msg.indexOf(search))
    } else {console.log('ไม่พบคำที่ค้นหา')
    }
}

test('กลับบ้าน' , 'sasa')