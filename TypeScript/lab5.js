function greetUserOptional(name, title) {
    if (title) {
        console.log("Hello,".concat(title, " ").concat(name, "!"));
    }
    else {
        console.log("Hello,".concat(name, "!"));
    }
}
greetUserOptional("Alice");
greetUserOptional("Bob", "Dr.");
var add = function (a, b) { return a + b; };
var multiply = function (a, b) { return a * b; };
console.log("Sum:", add(5, 10));
console.log("Product:", multiply(5, 10));
