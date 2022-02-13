const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Ready to handle some tickets!! 🤖'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const { Client, Collection } = require("discord.js");
const client = new Client({intents: 32767});
const { Token } = require("./config.json");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");

client.commands = new Collection();

["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

client.login(Token);
