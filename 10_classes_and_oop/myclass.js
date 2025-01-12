// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     uppercaseuser(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ret=new User("kapoor","kapoor2q@mail.com",123)
// console.log(ret.encryptpassword())
// console.log(ret.uppercaseuser())

/////////with out class//////
function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptpassword=function(){
     return `${this.password}abc`
}
User.prototype.uppercaseuser=function(){
     return `${this.username.toUpperCase()}`
}
const ret=new User("kapoor","kapoor2q@mail.com",123)
console.log(ret.encryptpassword())
console.log(ret.uppercaseuser())
