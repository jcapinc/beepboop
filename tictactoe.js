class Game{
	constructor(){
		this.setupRows();
		this.setSep();
	}

	setSep(){
		this.sep = "------";
	}

	startupRows(){
		this.rows = [
			[1,2,3],
			[4,5,6],
			[7,8,9]
		];
	}

	move(position, player){
		position --
		const row = Math.floor( position / 3);
		const column = position - (row * 3);
		this.setCell(row,column,player);
	}

	setCell(row,column,value){
		this.rows[row][column] = value;
	}

	render(){
		return `${this.renderRow(this.rows[0])}\r\n${this.sep}\r\n${this.renderRow(this.rows[1])}\r\n${this.sep}\r\n${this.renderRow(this.rows[2])}`;
	}

	renderRow(row){
		return `${this.renderCell(row[0])}|${this.renderCell(row[1])}|${this.renderCell(row[2])}`;
	}

	renderCell(cell){
		return cell;
	}
}

class DiscordGame extends Game{
	setCell(row,column,value){
		this.rows[row][column] = `:${value.toLowerCase()}:`;
	}
	
	setupRows(){
		this.rows = [
			[":one:",":two:",":three:"],
			[":four:",":five:",":six:"],
			[":seven:",":eight:",":nine:"]
		];
	}

	renderRow(row){
		return this.renderCell(row[0])+this.renderCell(row[1])+this.renderCell(row[2]);
	}
}
module.exports = {DiscordGame,Game};