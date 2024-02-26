//super : Üst sınıfı gösterir
//super()

class Person{
 
  constructor(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
 
  writeInfo(){
    console.log(this.firstName , this.lastName , this.salary)
  }
  
}

class Student extends Person{

 constructor(firstName,lastName,salary){
  super(firstName,lastName,salary);
 }

 writeInfo(){
  super.writeInfo()
 }
}

class Engineer extends Person{
  constructor(firstName,lastName,salary){
    super(firstName,lastName,salary);
  }

  writeInfo(){
    super.writeInfo();
  }

}

const student1 = new Student("Emre", "Karadag", 10000)
const engineer1 = new Engineer("Aysun","Çınar",15000)

student1.writeInfo();
engineer1.writeInfo();