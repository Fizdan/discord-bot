require("dotenv").config();

const express = require("express");
const { Client, Intents } = require("discord.js");
const bodyParser = require("body-parser");
const port = 80;
const app = express();

app.use(bodyParser());

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.login(process.env.tokenID);

app.get("/", async (req, res) => {
  res.send("App Working");
});

app.post("/", async (req, res) => {
  const channel = client.channels.cache.get(process.env.channelID);
  channel.send({ content: req.body.message });
  res.send("Message Sent");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
