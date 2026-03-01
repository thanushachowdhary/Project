enum Direction{
  Up,
  Down,
  Left,
  Right
}
enum Status{
  PENDING="PENDING",
  SUCCESS="SUCCESS",
  FAILED="FAILED"
}
function printStatusOrDirection(value:Direction|Status):void{
  console.log(value);
}
const dir:Direction=Direction.Up;
const stat:Status=Status.SUCCESS;
printStatusOrDirection(dir);
printStatusOrDirection(stat);    