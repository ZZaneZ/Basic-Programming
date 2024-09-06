const aboutMe = {
    firstName : 'Test',
    lastName : 'Test',
    nickName : 'Test',
    age : 20,
    phoneNumber : 191,
    address : 'Mars',
    postalAddress : 99999,
    email : 'DoNotHackMe@gmail.com',
    bestFriend : {
        bFirstName : 'Robert',
        bLastName : 'Downney Jr',
        bTitle : 'Victor Von Doom',
    }
}

console.log(aboutMe.bestFriend.bTitle)



const myFriends = [{
    firstName : 'Lisa',
    lastName : 'Bp',
    AKA : 'LookChin',
    age : 16,
}, { 
    firstName : 'Rose',
    lastName : 'Bp',
    AKA : 'Chipmunk',
    age : 18,
}, { 
    firstName : 'Jisoo',
    lastName : 'Bp',
    AKA : 'Angel',
    age : 20,
}, {  
    firstName : 'Jennie',
    lastName : 'Bp',
    AKA : 'Solo',
    age : 22,
}]

const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        name: element.firstName,
        title: element.AKA,
    })
})

const myFriendsMoreThan = myFriends.filter(function(element, index) {
    return element.age > 19 && element.lastName == 'Bp'
})

console.log(myFriendsMoreThan)
