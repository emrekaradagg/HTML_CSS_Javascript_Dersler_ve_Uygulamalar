
// let langs = ["C#", "C++", "JavaScript", "Python"]
// let lang1, lang2, lang3, lang4


// [lang1, lang2, lang3, lang4] = langs

// console.log(langs);


// const hesapla = (a,b)=>{
//     const topla = a+b
//     const cikar = a-b
//     const carp = a*b
//     const bol = a/b

//     const dizi = [topla,cikar,carp,bol]
//     return dizi
// }

// let [a,b,c,d] = hesapla(10,2)
// console.log(a,b,c,d)

const person = {
    firstName : "Emre",
    lastName : "Karadağ",
    salary : 10000,
    age : 28
}

// let isim, soyisim, maas, yas

// isim = person.firstName
// soyisim = person.lastName
// maas = person.salary
// yas = person.age

let {firstName:isim, lastName:soyisim, salary:maas, age:yas} = person


console.log(isim, soyisim, maas, yas);