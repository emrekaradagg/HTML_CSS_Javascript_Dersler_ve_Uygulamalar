

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
    
        console.log(this);
    }
    Soru.prototype.cevabiKontrolEt = function(cevap) {
        return cevap === this.dogruCevap
    


}


let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?",{ a: "Node.js", b:"Nuget", c:"Npm"},"b");


//Hepsini tek dizede yazmak için
let sorular =[
    new Soru("Hangisi javascript paket yönetim uygulamasıdır?", {a:"Node.js", b:"Typescript", c:"Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?",{ a: "Node.js", b:"Nuget", c:"Npm"},"b")
]


console.log(soru1.cevabiKontrolEt("c"));