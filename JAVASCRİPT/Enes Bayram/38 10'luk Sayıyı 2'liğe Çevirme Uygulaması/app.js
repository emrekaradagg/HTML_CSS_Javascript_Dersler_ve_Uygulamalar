// Decimal to Binary Conversion

let sayi =Number(prompt("Lütfen bir sayı giriniz"));

convertDecimalToBinary(sayi);


function convertDecimalToBinary(sayi) {
let binary ="";
while(true){
    binary+=(sayi%2).toString();
    sayi=Math.floor(sayi/2);
    if(sayi==1) {
        binary+=1;
        break;
    }
}
let result = reverse(binary);
alert("Sonuç :"+ result);

}

function reverse(binary) {
    let reverseBinary="";
    for(let i=binary.length-1; i>=0; i--) {
        reverseBinary+=binary.charAt(i);
    }

    return reverseBinary;
}
