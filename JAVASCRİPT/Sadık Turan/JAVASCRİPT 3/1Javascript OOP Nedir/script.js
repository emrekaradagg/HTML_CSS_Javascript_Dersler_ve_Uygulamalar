let soru = {
    soruMetni:"Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b:"Typescript",
        c:"Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }

}

let soru2 = {
    soruMetni:"Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b:"nuget",
        c:"Npm"
    },
    dogruCevap: "b",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }

}


let soru3 = {
    soruMetni:"Hangisi frontend yazılım bileşenidir?",
    cevapSecenekleri: {
        a:"c++",
        b:"c#",
        c:"javascript"
    },
    dogruCevap:"c",
    cevabiKontrolEt:function(cevap) {
        return cevap=== this.dogruCevap
    }
}

console .log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("c"));
console.log(soru2.cevabiKontrolEt("c"));
console.log(soru3.cevabiKontrolEt("b"));

