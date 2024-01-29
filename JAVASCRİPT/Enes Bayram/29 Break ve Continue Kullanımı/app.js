// break -- continue

// 1 den 10 a kadar olan sayıları yazdıralım 8 e geldiğimizde döngüden çıkalım

// let sayac = 1;
// while(1<=10) {
//     console.log(sayac);
//     if(sayac==8) {
//         break;
//     }
//     sayac++;
// }

let sayac = 0;

while(sayac<=10) {
    sayac++;
    if(sayac>10) {
        break;
    }
    if(sayac==8) {
        continue;
    }
    console.log(sayac);
}