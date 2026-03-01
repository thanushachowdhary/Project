function greetUser(name:string,title:string=""):void{
  if (title){
    console.log(`Hello,${title}${name}!`);
  } else {
    console.log(`Hello,${name}!`);
  }
}
greetUser("Alice"); 
greetUser("Bob", "Dr.");   
const addNumbers=(a:number,b:number):number=>a+b;
console.log("Sum:",addNumbers(5,10));    