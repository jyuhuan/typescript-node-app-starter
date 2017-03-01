var Greeter = (function () {
    function Greeter(name, msg) {
        this.name = name;
        this.message = msg;
    }
    Greeter.prototype.getGreetingMessage = function () {
        return "[" + this.name + "] " + this.message;
    };
    return Greeter;
}());
var greeter = new Greeter("main.ts", "Hello, from main.ts!");
console.log(greeter.getGreetingMessage());
