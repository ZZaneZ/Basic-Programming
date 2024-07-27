function minus(a: number, b: number) { // ฟังชั่น minus เก็บข้อมูลตัวเลข 2 ตัว
    return a - b // นำข้อมูลตัวเลขมาลบกัน 
}

function multiply(a: number, b: number, c: number, d: number) { // ฟังชั่น multiply เก็บข้อมูลตัวเลข 4 ตัว
    return a * b * c * d // นำข้อมูลตัวเลขมาคูณกัน
}

console.log(minus(2, 5)) // แสดงผลของ minus

console.log(multiply(1, 2, 3, 4)) // แสดงผลของ multiply



function grade(homework: number, midterm: number, final: number) { // ฟังชั่น grade เก็บข้อมูลตัวเลข 3 ตัว
    let score: number = homework + midterm + final // กำหนดตัวแปร score ให้เก็บข้อมูลตัวเลข 3 ตัว

    if(score >= 50) { // ถ้าคะแนนมากกว่า หรือ เท่ากับ 50
        return 'pass' // ให้ผ่าน
    } else {
        return 'fail' // ให้ไม่ผ่าน
    }
}

console.log(grade(10, 20, 20)) // แสดงผล grade ออกมาเป็น ผ่าน หรือ ไม่ผ่าน




function grade(homework: number, midterm: number, final: number) { // ฟังชั่น grade เก็บข้อมูลตัวเลข 3 ตัว
    let score: number = homework + midterm + final // กำหนดตัวแปร score ให้เก็บข้อมูลตัวเลข 3 ตัว

    if(score < 50) { // ถ้าคะแนนน้อยกว่า 50
        return 'grade F' // ให้เกรด F
    } else if (score < 60) { // ถ้าคะแนนน้อยกว่า 60
        return 'grade D' // ให้เกรด D
    } else if (score < 70) { // ถ้าคะแนนน้อยกว่า 70
        return 'grade C' // ให้เกรด B
    } else if (score < 80) { // ถ้าคะแนนน้อยกว่า 80
        return 'grade B' // ให้เกรด B
    } else { // ถ้าไม่ตรงตามเงื่อนไข
        return 'grade A' // ให้เกรด A
    }
}

console.log(grade(10, 20, 50)) // แสดงผล grade ออกมาเป็น F, D, C, B, A ตามคะแนนที่ได้ 