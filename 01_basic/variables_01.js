const accountId=100
let accountEmail="kapoor2q@gmail.com"
var accountPassword="123";
accountCity="delhi";
let accountState;
//accountId=2; //not allowed
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])