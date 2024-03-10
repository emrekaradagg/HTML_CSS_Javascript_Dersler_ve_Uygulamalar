

class Person {
    constructor(firstName, lastName, salary){
        this.isim = firstName ;
        this.soyisim = lastName ;
        this.maas = salary ;
    }
    writeInfo(){
        console.log(this.isim , this.soyisim , this.maas)
    }
}

const person1 = new Person("Göknur", "Kaya", 15000);
person1.writeInfo();

class Student extends Person {
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary);
    }

    writeInfo1(){
        super.writeInfo();
    }
}

const student1 = new Student("Emre", "Karadağ", 10000);
student1.writeInfo1();

class Engineer extends Person {
    constructor(firstName, lastName, salary){
        super(firstName,lastName,salary)
    }

    writeInfo2(){
        super.writeInfo();
    }
}

const engineer1 = new Engineer("Yaprak", "Karadağ", 20000)
engineer1.writeInfo2();