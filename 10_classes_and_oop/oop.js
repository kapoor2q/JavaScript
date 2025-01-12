const user={
    username:"Kapoor",
    logincount:8,
    signIn:true,

getUserDetails:function(){
    //console.log("Got User details from database");
    //console.log(`Username: ${this.username}`)
    console.log(this)
}

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)
function User(username,logincount,isLoggedin){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedin=isLoggedin;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    return this
}
//empty object new keyword called instence
//new keyword call  constructer function
//this keyword rap on this
const userOne=new User("kapoor",5,true)
const usertwo=new User("kumar",11,false)
//console.log(userOne)
console.log(userOne.constructor)
//console.log(usertwo)
//console.log(usertwo.greeting())



 