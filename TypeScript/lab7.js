function greetUser(name, title) {
    if (title === void 0) { title = ""; }
    if (title) {
        console.log("Hello,".concat(title).concat(name, "!"));
    }
    else {
        console.log("Hello,".concat(name, "!"));
    }
}
greetUser("Alice");
greetUser("Bob", "Dr.");
var addNumbers = function (a, b) { return a + b; };
console.log("Sum:", addNumbers(5, 10));
