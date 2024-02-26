//!STATİC

//? Static olarak tanımlanmamışsa Nesne üzerinden erişilir
//? Static ise Class ismi üzerinden erişilir

class Matematik{
  
 static topla(a,b){
    console.log(a+b)
  }
  cikar(a,b){
    console.log(a-b)
  }
  carp(a,b){
    console.log(a*b)
  }
  bol(a,b){
    console.log(a/b)
  }
}


// const matematik = new Matematik();
// matematik.topla(10,5)

// Matematik.topla(6,4);


class Insan{

  static languageCount = 10;

  constructor(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
  writeInfo(){
    console.log(this.firstName,this.lastName,this.salary,this.languageCount)
  }
}

const insan1 = new Insan("Emre","Karadag","10000");
insan1.writeInfo()

console.log(Insan.languageCount)