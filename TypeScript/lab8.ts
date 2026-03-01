type Point={
  x:number;
  y:number;
};
function printPoint(point:Point):void{
  console.log(`Point coordinates:x=${point.x},y=${point.y}`);
}
const p1:Point={x:5,y:10};
const p2:Point={x:-3,y:7};
printPoint(p1);
printPoint(p2);  