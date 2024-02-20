

let names = ["Emre", "Ali", "Ahmet", "Mehmet"];

// names.forEach(function(name){
//     console.log(name);
// })

// names.forEach (name => console.log(name))

//?For in döngüsü index numarasını verir

// for (let name in names){
// console.log(name, names[name])
// }

//? For of döngüsü 

for (let isim of names){
    console.log(isim, names.indexOf(isim))
}


