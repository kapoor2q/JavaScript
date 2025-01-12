function SetUserName(username){
    //complex BD calls
    this.username=username
    console.log(this.username)

}
function createuser(username,email,pass){
    SetUserName.call(this,username)//pass current execution context
    this.email=email
    this.pass=pass
}
//without .call SetUserName funtion remove from stack
const chai=new createuser("Kapoor","kapoor2q@gmail.com",123)
console.log(chai)