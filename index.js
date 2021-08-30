const Discord = require('discord.js'); // discord.js here
require('dotenv').config(); // npm install dotenv - install the package
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const token = process.env.TOKEN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  // you can put status and stuff
  });

client.login(process.env.TOKEN);