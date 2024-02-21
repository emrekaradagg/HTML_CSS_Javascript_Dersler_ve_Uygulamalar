//Map -----> key(anahtar) value(değer)

const map1 = new Map();

let value;

map1.set(34,"İstanbul")
map1.set(35,"İzmr")
map1.set(06,"Ankara")
map1.set(25,"Erzurum")
map1.set(44,"Malatya")


//GET

// console.log(map1.get(6))
// console.log(map1.get(34))
// console.log(map1.get(25))

//SİZE

// value =map1.size

//DELETE

// value = map1.delete(44)
// console.log(map1.size)
// console.log(value)


//HAS (sahip mi)

// console.log(map1.has(44))

//For of

// for(let [key,value] of map1){
//     console.log(key,value)
// }

// let array = [25,'Erzurum'];
// let [a,b] = array;
// console.log(a,b)

// const keys = Array.from(map1.keys())
// console.log(keys)

// keys.forEach((key)=>{
//     console.log(key, map1.get(key))
// })


// for(let key of map1.keys()){
//     console.log(key)
// }

//Değerleri yazdırma

// for(let value of map1.values()){
//     console.log(value)
// }

// const array = Array.from(map1);

// array.forEach((value)=>{
//     console.log(value[0])
// })