//singleton   trow constructer
//Object.create

//object literals
const mySym=Symbol("Key1")
const Jsuser={
    name:"Kapoor",
    "Full Name":"Kapoor Kumar",
    //mySym:"My Key1",
    [mySym]:"My Key1",
    age:18,
    location:"delhi",
    email:"kapoor2q.google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full Name"]);

// console.log(Jsuser["mySym"]);
// console.log(typeof Jsuser["mySym"]);
// console.log(Jsuser[mySym]);

Jsuser.email="Kapoor@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email="Kapoor@googlet.com"
// console.log(Jsuser.email);
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js Users");
    

}
Jsuser.greetingtwo=function(){
    console.log(`Hello Js Users, ${this.name}`);
    

}
// console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());