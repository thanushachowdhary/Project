function move(direction) {
    console.log("Moving ".concat(direction));
}
move("up");
move("down");
move("left");
move("right");
function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(Math.round(value));
    }
}
formatValue("hello");
formatValue(12.7);
formatValue(3.14);
