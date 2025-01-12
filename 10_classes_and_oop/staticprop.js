class User{
    constructor(username){
        this.username=username
    }
    logigme(){
        console.log(`Username:${this.username}`)
    }
   static createid(){
        return `123`
    }
}

const kapoor=new User("kapoor")
console.log(kapoor.createid());