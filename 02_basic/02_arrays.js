const Family=["kapoor","KUmar","Uttam","Kumar"]
const dc_family=["KUnall","arayan","akash"]

//Family.push(dc_family)
//console.log(Family);

// const otherFamily=Family.concat(dc_family)
// console.log(otherFamily);

const all_family=[...Family,...dc_family]

// console.log(all_family);

const another_array=[1,2,3,[4,5,6],7,[6,7,[8,9]]]

const reat_another_array=another_array.flat(Infinity)

// console.log(reat_another_array);

// console.log(Array.isArray("Kapoor"));
// console.log(Array.from("Kapoor"));

console.log(Array.from({name:"kapoor"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,));
