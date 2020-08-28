module.exports = {
	name: 'ban',
	description: 'Replies With Bot Latency',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`Latency : ${timeTaken}ms`);
	},
};