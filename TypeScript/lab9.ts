function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction}`);
}
move("up");  
move("down"); 
move("left");  
move("right");
function formatValue(value:string|number):void{
  if (typeof value==="string"){
    console.log(value.toUpperCase());
  } else if (typeof value ==="number"){
    console.log(Math.round(value));
  }
}
formatValue("hello"); 
formatValue(12.7);    
formatValue(3.14); 