const { Database } = require("../../Structures/config.json");
const { Client } = require("discord.js")
const mongoose = require("mongoose");

module.exports = {
  name: "ready",
  once: true,
  /**
 * @param {Client} client
 */
  execute(client) {
    console.log("The client is now ready!")
    client.user.setActivity("Tickets", {type: "WATCHING"})

    if(!Database) return; 
    mongoose.connect(Database, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("The client is now connected to the Database!")
    }).catch((err) => {
      console.log(err)
    })
  }
}