const fs = require("fs")
const chalk = require("chalk")
const buffer = fs.readFileSync("./1-json.json")
const myInfo = JSON.parse(buffer.toString())

//Alter the object
myInfo.name = "Ashu"
myInfo.planet = "Mars"
myInfo.age= 8

fs.writeFileSync("./1-json.json", JSON.stringify(myInfo))

console.log(chalk.green("Success!"))