const me = {
    firstName : 'Test',
    lastName : 'Test',
    nickName : 'Zane',
    fullName : function() {
        return this.firstName + " " + this.lastName
    }
}

console.log(me.fullName())