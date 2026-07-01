class studentDb {
    students
    constructor() {
        this.students = []
    }
    add(student) {
        this.students.push(student);
    }
}
class student {
    constructor(name, mobile, age, address, password) {
        this.name;
        this.mobile;
        this.age;
        this.address;
        this.password;
    }
    login(mobile, password) {
        // check if mobile and password exists or not
    }
    register(name, mobile, age, address, password) {
        let newStudent = new student(name, mobile, age, address, password);
        // exercise- array me same mobile hai already,log an error and dont register
        console.log(newStudent);
        
        
    }
}
let studentOne=new student("John Doe", "1234567890", 20, "123 Main St", "password123");
console.log(student);

