module.exports = {
	name: 'kill',
	description: 'Terminates The Bot - Admin Only',
	execute(message, args, addons) {
		const cmd_kill = addons[0];
		const ops = addons[4];
		if (cmd_kill == 0) {
			message.channel.send('Command Terminating Has Been Disabled In config.json');
		}
		else if (cmd_kill == 1) {
			const ls = ops.includes(message.author.tag);
			
			if (ls === true) {
				message.channel.send('Terminating Bot...');
				console.log('Kill Command Sent, Terminating Bot...');
				setTimeout(function(){
					process.exit();
				}, 750);
			
			} else {
				message.channel.send('You Are Not Allowed To Terminate The Bot');
			}
		}
		else {
			message.channel.send('The Key cmd_kill May Be Incorrectly Set, Check config.json');
		}
	},
};