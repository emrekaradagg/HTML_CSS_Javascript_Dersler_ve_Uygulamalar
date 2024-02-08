//Math Sınıfı Metotları
/*
1-Floor
2-Ceil
3-Round

4-Max
5-Min

6-Random
7-Abs
8-Sqrt
9-Pow
10- PI sayısı
*/

let a = 3.99;
let b = -12;
let c = 9;

//FLOOR : küsüratı atar
// console.log(Math.floor(a));

//CEİL : üst sayıya yuvarlar
// console.log(Math.ceil(a));

//Round : virgül sonrası yakın olan tam sayıya yuvarlar
// console.log(Math.round(a));

//MAX :en büyük değeri yazdırır
// console.log(Math.max(6,8,33,63,89));

//MİN : en küçük değeri yazdırır
// console.log(Math.min(6,8,33,63,89));

//ABS : mutlak değeri yazdırır
// console.log(Math.abs(b));

//SQRT : karekök almak için kullanılır
// console.log(Math.sqrt(c));

 //POW : sayının üssünü alır
//  console.log(Math.pow(2,4));

//PI : pi sayısını alır
// console.log(Math.PI);

//RANDOM : sıfır ile bir arasında değer yazdırır (o sayıyı 100 ile çarparsak ondalıktan kurtarırız math.floor ile küsüratı atarız)
let randomDeger = Math.random();
console.log(randomDeger);
let sonuc= Math.floor(randomDeger*100);
console.log(sonuc);

// console.log(Math.floor (Math.random()*100));
