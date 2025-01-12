class User{
    constructor(username){
        this.username=username
    }
    Logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,pass){
        super(username)
        this.email=email
        this.pass=pass
    }
    addcourse(){
        console.log(`new couser add by ${this.username}`)
    }
}
//const ret= Teacher("kapoor","kapoor2q@gmail.com",123) no call without new
const ret=new Teacher("kapoor","kapoor2q@gmail.com",123)
ret.addcourse()
ret.Logme()


const ret1=new User("new Kapoor")
ret1.Logme()

console.log(ret instanceof Teacher)


console.log(ret instanceof User)