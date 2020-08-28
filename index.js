const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token, watchList, watchCount, repair, cmd_kill} = require('./config.json');
const curWatch = Math.floor(Math.random() * 6);
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
	
	
}

client.once('ready', () => {
	console.log('Bot Loading...');
	console.log(`Repair Mode : ${repair}`);
	console.log(`Command Kill : ${cmd_kill}`);
	console.log(`Prefix Set : ${prefix}`);
	const curWatch = Math.floor(Math.random() * watchCount);
	const watch = watchList[curWatch];
	console.log(`Bot Activity is : Playing A Game ${watch}`);
	client.user.setActivity(watch);
	console.log('Bot Activity Set');
	console.log('Bot Ready!');
	client.channels.cache.get('673416942983315467').send('Bot Ready!');
	return (console.error);
});

client.on('message', message => {
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
		
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	const timeTaken = Date.now() - message.createdTimestamp;
	const comSend = Date.now();
	
	if (repair === 1) {message.channel.send('Sorry, the bot is down for repairs for the time being, please try again later!');}
	else {
		try {	
			const addons = [cmd_kill, watchList, watchCount, client];
			client.commands.get(command).execute(message, args,addons);
		} catch (error) {
			message.channel.send(`Unknown Command, Try Using ${prefix}help`);
		}
	}	
	const dateObj = new Date(comSend); 
	const hours = dateObj.getUTCHours() - 4; 
	const minutes = dateObj.getUTCMinutes(); 
	const seconds = dateObj.getUTCSeconds(); 
	const comSendForm = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'); 
	const comTaken = Date.now() - comSend;
	console.log(`${comSendForm}  |  Command Sent : ${command}  |  Latency : ${timeTaken}ms  |  Time Taken : ${comTaken}ms`);

});

client.login(token);