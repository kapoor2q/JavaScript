//const tinderUser=new Object()   //singleton object
const tinderUser=new Object() //Non singleton object

tinderUser.id="1"
tinderUser.Name="kapoor"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    Email:"kapoor2q@gmail.com",
    fullname:{
        userfullname:{
            firstnmae:"kapoor",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstnmae)

const obj1={
    1:"a",
    2:"b",

}
const obj2={
    3:"a",
    4:"b",
    
}

const obj3={obj1,obj2}
// console.log(obj3)

const obj4=Object.assign({},obj1,obj2) //assign to new object
//console.log(obj4)
const obj5=Object.assign(obj1,obj2) //assign to obj1
//console.log(obj5)

const obj6={...obj1,...obj2} ///latest
//console.log(obj6)

const users=[
    {
        id:1,
        emailid:"kapoor3w"
    },
    {
        id:1,
        emailid:"kapoor3w"
    },
    {
        id:1,
        emailid:"kapoor3w"
    },
    {
        id:1,
        emailid:"kapoor3w"
    },
    {
        id:1,
        emailid:"kapoor3w"
    },
]
//console.log(users[1])

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))