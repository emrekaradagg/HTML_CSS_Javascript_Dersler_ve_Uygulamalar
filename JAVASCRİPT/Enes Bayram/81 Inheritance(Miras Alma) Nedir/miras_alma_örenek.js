
class Person{
    firstName = "Emre";

    write(){
        console.log("Person write ", this.firstName);
    }
}

class Student extends Person {
    
    write(){
        console.log("Studen write ", this.firstName);
        super.write();
    }
}

const student1 = new Student();
student1.write();