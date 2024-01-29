// MANTIKSAL OPERATÖRLER

/* 
    && : VE
    || : VEYA
    !  : DEĞİL

*/

// Yaşınız 18'den büykse VE 3000 tl para olmaı VE sağlığıınız yerinde ise

// && : VE
let yas1 = 20;
let para1 = 3500;
let saglikliMi1 = false;

console.log(yas1>18 && para1>3000 && saglikliMi1==true);


// || : VEYA
let yas2 = 20;
let para2 = 3500;
let saglikliMi2 = false;

console.log(yas2>18 && para2>3000 || saglikliMi2==true);

// !: DEĞİL

console.log(!5>3);