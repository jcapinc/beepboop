const Discord = require("discord.js");
const tictactoe = require("./tictactoe");
require("dotenv").config();

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

var game = new tictactoe.DiscordGame();
var ct = 0;
client.on('message', message => {
	if(message)
	value = parseInt(value);
	if(isNaN(value)){
		game = new tictactoe.DiscordGame();
		ct = 0;
	} else {
		game.move(value, ((ct++ % 2) == 0) ? "o" : "x");
	}
});
// https://discordapp.com/api/oauth2/authorize?response_type=code&client_id=590981518524940288&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Fnicememe.website

client.login(process.env.TOKEN);