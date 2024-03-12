
const set = new Set();

set.add("Emre")
set.add(true)
set.add(3.14)
set.add(7)
set.add([1,2,3,4])



// const values = Array.from(set);
// console.log(values);

let array = [1,"Enes",true,"Mustafa",[1,2,3,4,5]]

const newSet = new Set(array)
console.log(newSet)