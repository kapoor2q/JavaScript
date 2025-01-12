// let myName="kapoor     ";
// console.log(myName.length)
// console.log(myName.truelength())




////////////////////////how to brif upper code/////////////////

let myhereos=["krish","thor"]

let herepower={
    thor:"hamer",
    krish:"fly",
    getSpiderPower:function(){
        console.log(`krish power is ${this.krish}`)
    }
}
Object.prototype.kapoor=function(){
console.log(`kapoor is present in all object`);
}

Array.prototype.heykapoor=function(){
    console.log("kapoor array all")
}
//myhereos.kapoor();

//myhereos.heykapoor();
//herepower.heykapoor(); boject not power to heykapoor

//inheritance
const Users={
    name:"kapoorkumar",
    email:"kapoor@gmail.com"
}
const Teacher={
    makevideo:true
}
const teacherSupport={
    usAvailable:false
}
const TaSupport={
    makeAssignment:'JS Assignment',
    fulltime:true,
    __proto__:teacherSupport
}
Teacher.__proto__=Users
////modern structure
Object.setPrototypeOf(teacherSupport,Teacher);


let anotherUsername="kapoor        "
String.prototype.trueLength=function(){
    //console.log(`${this}`)
   // console.log(`True length is : ${this.trim().length}`)

    return this.trim().length
}
anotherUsername.trueLength()
console.log("kapoor kumar"+anotherUsername.trueLength())