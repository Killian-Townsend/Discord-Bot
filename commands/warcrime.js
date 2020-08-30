module.exports = {
	name: 'warcrime',
	description: 'commit a war crime',
	execute(message, args) {
		const place = args.join(' ');
		message.channel.send(`${message.author.username} Commited a war crime on ${place}`);
	},
};