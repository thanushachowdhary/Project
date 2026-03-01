function greetUserOptional(name:string,title?:string):void{
  if(title){
    console.log(`Hello,${title} ${name}!`);
  } 
  else{
    console.log(`Hello,${name}!`);
  }
}
greetUserOptional("Alice");
greetUserOptional("Bob","Dr."); 
type Operation=(a:number,b:number)=>number;
const add:Operation=(a,b)=>a+b;
const multiply:Operation=(a,b)=>a*b;
console.log("Sum:",add(5,10));
console.log("Product:",multiply(5,10)); 