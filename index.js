const fs = require('fs');
const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const {prefix, token, watchList, watchCount, repair, cmd_kill, ops, mod_ch, cmd_ch} = require('./config.json');
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
	console.log('Bot Loading...'.brightMagenta);
	console.log(`Repair Mode : ${repair}`.brightMagenta);
	console.log(`Command Kill : ${cmd_kill}`.brightMagenta);
	console.log(`Prefix Set : ${prefix}`.brightMagenta);
	const curWatch = Math.floor(Math.random() * watchCount);
	const watch = watchList[curWatch];
	console.log(`Bot Activity is : Playing A Game ${watch}`.brightMagenta);
	client.user.setActivity(watch);
	console.log('Bot Activity Set'.brightMagenta);
	console.log(`cmd_ch : ${cmd_ch}`.brightMagenta);
	console.log('Bot Ready!'.brightGreen);
	console.log('‎‎‎‎‎‎‎‎‏‏‎            ‎‏'.black);
	client.channels.cache.get(mod_ch).send('Bot Ready!');
	return (console.error);
	
});	

client.on ("guildMemberAdd", member => {
	
	
	try {
		member.send(`Hello ${member.user.username}! Welcome to **Centripetal Force**! I am <@743834091333484625>, Centripetal Force's custom bot! Written by kittypickles9982! Make sure to read over the quick rules, roles, and punishments to see if this server is right for you! When you've made your decision, go ahead and react to Carl's message. You'll then gain access to the rest of the server! If you have *any* questions, feel free to DM an online mod, we'll probably get back to you soon! Hope to see you inside ${member.user.username}!`);
	} catch (error) {
		console.log(`[ERROR] Unable To DM Member ${member.user.username}!`.red.bold);
	}
	
})

client.on('message', message => {
	
	const members = client.guilds.cache.get('748907767661592596').memberCount;

	message.guild.channels.cache.get('749276654165164073').setName(`Members : ${members}`);
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.channel.type === 'dm') return;
	if (cmd_ch == undefined || message.channel.id === cmd_ch) {

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		
		const timeTaken = Date.now() - message.createdTimestamp;
		const comSend = Date.now();
	
		if (repair === '1') {message.channel.send('Sorry, the bot is down for repairs for the time being, please try again later!');}
			else {
				try {	
					const addons = [cmd_kill, watchList, watchCount, client, ops, prefix];
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
		console.log(`${comSendForm}  |  Command Sent : ${command}  |  Latency : ${timeTaken}ms  |  Time Taken : ${comTaken}ms`.brightCyan);
	} else {
		return;
	}

});

client.login(token);