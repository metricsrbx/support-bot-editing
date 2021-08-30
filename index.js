const Discord = require('discord.js'); // discord.js here
require('dotenv').config(); // npm install dotenv - install the package
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const prefix = process.env.PREFIX;
const token = process.env.TOKEN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  // you can put status and stuff
  });

client.login(process.env.TOKEN);
