module.exports = {
	name: 'help',
	description: 'A Nice Help Menu',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`Latency : ${timeTaken}ms`);
	},
};