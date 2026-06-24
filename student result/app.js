const students = [];
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n===== Student Result Management System =====");
    console.log("1. Add Student");
    console.log("2. Remove Last Student");
    console.log("3. Admit Emergency Student");
    console.log("4. Process First Student");
    console.log("5. Show All Students");
    console.log("6. Exit");

    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                addStudent();
                break;

            case "2":
                removeLastStudent();
                break;

            case "3":
                admitEmergencyStudent();
                break;

            case "4":
                processFirstStudent();
                break;

            case "5":
                showAllStudents();
                break;

            case "6":
                console.log("Exiting Program...");
                rl.close();
                break;

            default:
                console.log("Invalid Choice!");
                showMenu();
        }
    });
}

function addStudent() {
    rl.question("Enter Student Name: ", (name) => {
        rl.question("Enter Marks: ", (marks) => {
            students.push({ name, marks: Number(marks) });
            console.log("Student Added Successfully!");
            showMenu();
        });
    });
}

function removeLastStudent() {
    if (students.length > 0) {
        const removed = students.pop();
        console.log(`Removed: ${removed.name}`);
    } else {
        console.log("No students available!");
    }
    showMenu();
}

function admitEmergencyStudent() {
    rl.question("Enter Emergency Student Name: ", (name) => {
        rl.question("Enter Marks: ", (marks) => {
            students.unshift({ name, marks: Number(marks) });
            console.log("Emergency Student Admitted!");
            showMenu();
        });
    });
}

function processFirstStudent() {
    if (students.length > 0) {
        const student = students.shift();
        console.log(
            `Processing Student: ${student.name} | Marks: ${student.marks}`
        );
    } else {
        console.log("No students available!");
    }
    showMenu();
}

function showAllStudents() {
    if (students.length === 0) {
        console.log("No students in the system.");
    } else {
        console.log("\nStudent List:");
        students.forEach((student, index) => {
            console.log(
                `${index + 1}. Name: ${student.name}, Marks: ${student.marks}`
            );
        });
    }
    showMenu();
}

showMenu();