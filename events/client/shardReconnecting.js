const chalk = require("chalk");

module.exports = (client, id) => {
    console.log(chalk.yellowBright(`KRONIX | [${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Reconnecting`))
}
