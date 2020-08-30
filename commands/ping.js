module.exports = {
	name: 'ping',
	description: 'Replies With Bot Latency',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`\`\`\`Latency : ${timeTaken}ms\`\`\``);
	},
};