module.exports = {
	name: 'play',
	description: 'Change the playing message',
	execute(message, args, addons) {
		const watchList = addons[1];
		const watchCount = addons[2];
		const client = addons[3];
		const num = args[0];
		if(num == undefined) {
			const curWatch = Math.floor(Math.random() * watchCount);
			const watch = watchList[curWatch];
			client.user.setActivity(watch);
			console.log(`Bot Activity is : Playing A Game ${watch}`);
			message.channel.send(`Bot Activity is : Playing A Game ${watch}`);
		}
		else if ((num > -1) && (num < watchCount)) {	
			const watch = watchList[num];
			client.user.setActivity(watch);
			message.channel.send(`Bot Activity is : Playing A Game ${watch}`);
		}
		else {
			message.channel.send(`${num} is an invalid argument, it must be a digit from 0 to ${watchCount - 1}, or no arguments for a random selection`);
		}
	},
};