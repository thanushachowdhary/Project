var Student = /** @class */ (function () {
    function Student(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log(this.rollNo);
    };
    return Student;
}());
var student1 = new Student("Thanusha", 19, 527);
console.log(student1.name);
console.log(student1.age);
student1.showRollNo();
