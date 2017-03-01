class Greeter {
  name: string;
  message: string;
  
  public constructor(name: string, msg: string) {
    this.name = name;
    this.message = msg;
  }

  public getGreetingMessage(): string {
    return `[${this.name}] ${this.message}`
  }
}

const greeter = new Greeter("main.ts", "Hello, from main.ts!")

console.log(greeter.getGreetingMessage())