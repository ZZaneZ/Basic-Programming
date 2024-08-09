const fName: string = 'นายภูวนาถ ไชยวิเศษ'

console.log(fName.slice(fName.indexOf('ไชยวิเศษ'), fName.indexOf('ไชยวิเศษ') + 'ไชยวิเศษ'.length ))



const fName: string = "นายภูวนาถ ไชยวิเศษ"

console.log(fName.split(" "))



const fName: string = 'test message test'

console.log(fName.replace('test', 'null'))



const fName: string = 'test message test'

console.log(fName.replaceAll('test', 'null'))



function getPrefix(Name: string) {
    if (Name.includes('นาย')) {
        return 'นาย'
    } else if (Name.includes('นางสาว')) {
        return 'นางสาว'
    } else {
        return 'null'
    }
}

console.log(getPrefix('นายภูวนาถ ไชยวิเศษ'))