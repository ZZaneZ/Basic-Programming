const score = [10, 23, 26, 30, 33] 
let total: number = 0

for (let i = 0; i < score.length; i++) {
    total = total + score[i]
}

let total2 = total / score.length

console.log(total)
console.log(total2)



const myStudents: string = "เซน, แทน, เวฟ, รุ้ง, แทค, สร"

const myStudentsArray: string[] = myStudents.split(',')

console.log(myStudents)
console.log(myStudentsArray)



const name1: string = 'สุดสวย สวยสุด' // Exam

console.log(name1.split(' ')[1])

console.log(name1.slice(0, name1.indexOf(' ')))



const animal: string = 'ม้าโพนี่*มังกร*มด*แองกี้เบิร์ด'

const animalToArray: string[] = animal.split('*')

animalToArray.shift() // เอาตัวหน้าออก

animalToArray.unshift('ประวิทย์') // เอามาต่อหน้า

animalToArray.pop() // เอาตัวท้ายออก

animalToArray.push('ลุงตู่') // เอามาต่อท้าย

console.log(animalToArray)



const fruit = ["Banana", "Apple", "Mango", "Grape"]

fruit.sort() // เรียง a - z

fruit.reverse() // เรียง z - a

fruit.slice(0, 2)

console.log(fruit)



const fname:string = 'กุ๋ย,ด้อก,แต้ก,ดั้ก'

const fnameArray: string[] = fname.split(',')

fnameArray.sort()
console.log(fnameArray)

fnameArray.reverse()
console.log(fnameArray) 