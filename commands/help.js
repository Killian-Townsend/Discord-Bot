module.exports = {
	name: 'help',
	description: 'A Nice Help Menu',
	execute(message, args, addons) {
		const prefix = addons[5];
		message.channel.send(`***Force Utilities***\nPrefix : ${prefix}\nPing : Shows Bot Latency\nPlay : give number to choose a message or leave blank for random\nUser : Give Full Name And ID\nOps : Show OP Members\nWarcrime : Add some text after to commit a war crime on it\nEnd : Op Only Command To Kill The Bot`);
	},
};