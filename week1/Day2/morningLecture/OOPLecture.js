// person
class Person {
    constructor(firstName = "Un named", lastName = "un named"){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}
// Teacher 
class Teacher extends Person{
    constructor(firstName, lastName, specialtys = []){
        super(firstName, lastName);
        this.specialtys = specialtys
    }

    fullName(){
        let output = super.fullName();
        output +=  "\n"+ "specialtys: " + "\n";
        for (const specialty of this.specialtys) {
            output += specialty + "\n";
        }
        return output;
    }
}
// Student
class Student extends Person {
    constructor(firstName, lastName, homework = false, lunchMoney = 10){
        super(firstName,lastName);
        this.homework = homework
        this.lunchMoney = lunchMoney
    }
    sendMoney(amount, person){
        this.lunchMoney -= amount;
        person.receiveMoney(amount);
    }

    receiveMoney(amount){
        this.lunchMoney += amount;
    }
}
// lecture
class Lecture {
    constructor(duriation = 45, topic = "coding", teacher = "not chosen yet", students = []){
        this.duriation = duriation;
        this.topic = topic;
        this.teacher = teacher; 
        this.students = students;
    }

    addStudents(students){
        for (const student of students) {
            this.students.push(student)
        }
    }
    createAttendanceList(){
        const fullNames = [];
        for (const student of this.students) {
            fullNames.push(student.fullName());
        }
        return fullNames;
    }
}


// Constructors

const teacher1 = new Teacher("Robert", "Santos", ["python", "Java", "C#"]);
const student1 = new Student("Bee" , "Brower", true)
const student2 = new Student("Abrar" , "Hussain", true)
const lecture1 = new Lecture(60, "MERN", teacher1)

// console.log(teacher1.fullName());
// console.log(student1.fullName());
lecture1.addStudents([student1, student2])
console.log(lecture1.createAttendanceList())