const Discord = require("discord.js");
const tictactoe = require("./tictactoe");
require("dotenv").config();

if(process.env.TOKEN == ""){
	console.log("Token is required, exiting");
	process.exit();
}

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

var game = new tictactoe.DiscordGame();
var ct = 0;
client.on('message', message => {
	if(message.content.startsWith("tic tac")){
		let value = parseInt(message.content.toString().replace("tic tac ",""));
		if(isNaN(value)){
			game = new tictactoe.DiscordGame();
			ct = 0;
		} else {
			game.move(value, ((ct++ % 2) == 0) ? "o" : "x");
		}
		message.channel.sendMessage(game.render());
		console.log("message recieved: "+message.content.toString()+"\r\n"+game.render());
		return;
	}
	console.log("message does not start with tic tac");
});

client.login(process.env.TOKEN);