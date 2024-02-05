// Mükemmel sayı uygulaması

// 6      28     496

//6   = 1 2 3 6 =12  = 6*2
//28  =1 2 4 7 14 28 =56 = 28*2

let sayi =Number(prompt("Lütfen bir sayı giriniz."));

isPerfectNumber(sayi)

function isPerfectNumber(sayi) {
    let toplam = 0;
    for(let i=2; i<=sayi/2; i++) {
        if(sayi%i==0) {
            toplam+=i;
        }
    }
    toplam+=1+sayi;


    if(toplam==sayi*2) {
        alert("Girilen sayı mükemmel sayıdır");
    }else {
        alert("Girilen sayı mükemmel sayı değildir");
    }

}