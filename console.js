const tictactoe = require("./tictactoe");
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout
});

var game = new tictactoe.Game();
let ct = 0;
function input(){
	process.stdout.write("\r\n" + game.render() + "\r\n\r\n");
	readline.question(` :: `, value => {
		value = parseInt(value);
		if(isNaN(value)){
			game = new tictactoe.Game();
			ct = 0;
		} else {
			game.move(value, ((ct++ % 2) == 0) ? "O" : "X");
		}
		input();
	});
}

input();