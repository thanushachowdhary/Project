class Student{
  public name:string;
  age:number;
  private rollNo:number;
  constructor(name:string,age:number,rollNo:number){
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
  }
  showRollNo():void{
    console.log(this.rollNo);
  }
}
const student1=new Student("Thanusha",19,527);
console.log(student1.name);
console.log(student1.age);
student1.showRollNo(); 