interface Student{
  name:string;
  marks:number;
}
interface StudentList extends Array<Student>{}
const students:StudentList=[
  {name:"Thanusha",marks:95},
  {name:"Nandu",marks:90},
  {name:"Anu",marks:78}
];
students.forEach((student)=>{
  console.log("Name:",student.name);
  console.log("Marks:",student.marks);
});
type PointType={
  x:number;
  y:number;
};
interface PointInterface{
  x:number;
  y:number;
}
function printPoint(point:PointType | PointInterface):void{
  console.log("x:",point.x);
  console.log("y:",point.y);
}
const P1:PointType={x:10,y:20};
const P2:PointInterface={x:30,y:40};
printPoint(P1);
printPoint(P2);     