const chalk = require("chalk");

module.exports = (client, id, replayedEvents) => {
    console.log(chalk.yellow(`KRONIX | [${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Resumed`))
}
