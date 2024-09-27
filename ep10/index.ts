const database = [
    {
        email : 'test@gmail.com',
        password : 'kad46a',
    }
]

function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
        if(password.length > 8 && password.length < 16) {
            const userObject = {
                email : email,
                password : password,
            }
            database.push(userObject)
            alert('Register completed, welcome' + email)
        } else {
            alert('Password must be longer than 8 but less than 16')
        }
    } else {
        alert('Email wrong')
    }
}

register('test@gmail.com', 'kad46a')



// u --> +
// 6 --> *
// 0 --> ^ 

const database3 = [
    {
        email : 'user@gmail.com',
        password : 'loveYou3000',
    },
    {
        email : '+ser@gmail.com',
        password : 'loveYo+3^^^',
    }
]

function decryptPassword(password : string) {
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', '0')
}

function login(email : string, password : string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        //const realPassword = decryptPassword(user[0].password)
        //if (realPassword === password)

        if (decryptPassword(user[0].password) === password) {
            alert('Login complete, welcome')
        } else {
            alert('Wrong password')
        }
    } else {
        alert('User do not found')
    }
}

login('user@gmail.com' , 'loveYou3000')