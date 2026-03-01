var students = [
    { name: "Thanusha", marks: 95 },
    { name: "Nandu", marks: 90 },
    { name: "Anu", marks: 78 }
];
students.forEach(function (student) {
    console.log("Name:", student.name);
    console.log("Marks:", student.marks);
});
function printPoint(point) {
    console.log("x:", point.x);
    console.log("y:", point.y);
}
var P1 = { x: 10, y: 20 };
var P2 = { x: 30, y: 40 };
printPoint(P1);
printPoint(P2);
