function minus(a: number, b: number) {
    return a - b 
}

function multiply(a: number, b: number, c: number, d: number) {
    return a * b * c * d
}

console.log(minus(2, 5))

console.log(multiply(1, 2, 3, 4))



function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if(score<50) {
        return 'pass'
    } else {
        return 'fail'
    }
}

console.log(grade(10, 20, 20))




function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

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

console.log(grade(10, 20, 50))