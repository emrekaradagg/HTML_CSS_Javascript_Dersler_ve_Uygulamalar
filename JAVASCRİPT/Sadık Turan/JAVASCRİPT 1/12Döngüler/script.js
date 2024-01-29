
/*let toplam = 0;

for( i = 1; i <= 10; i++){
    toplam +=i; 
    
}
console.log(toplam); */

let sayilar = [4,8,5,3,6,2,9,7];

//console.log(sayilar[0] + sayilar[1] + sayilar[2] + sayilar[3] + sayilar[4] + sayilar[5]);

let toplam = 0;

/*for (let i=0; i<sayilar.length; i++) {
    toplam += sayilar[i];
}*/



/*for(let i in sayilar){
    toplam += sayilar[i];
}*/

for(let sayi of sayilar){
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name":"Emre Karadağ",
    "username":"Emre",
    "password":"1234",
};

for (let key in user){
    console.log(key);
    console.log(user[key]);
}

