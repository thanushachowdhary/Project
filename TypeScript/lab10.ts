interface User{
  readonly id:number;
  name:string;
  age?:number;
}
const user:User={
  id:527,
  name:"G.Thanusha",
  age:19
};
console.log(user.id);
console.log(user.name);
console.log(user.age);

interface Calculator {
  add(a:number,b:number):number;
  multiply(a:number,b:number):number;
}
const calculator:Calculator={
  add(a:number,b:number):number{
    return a+b;
  },
  multiply(a:number,b:number):number{
    return a*b;
  }
};
console.log(calculator.add(5,3)); 
console.log(calculator.multiply(4,6)); 