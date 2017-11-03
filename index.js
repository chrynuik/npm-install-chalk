var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var superCoolStyles = chalk.bold.bgGreenBright.cyanBright("Hello World");

console.log(superCoolStyles);