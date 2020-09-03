const fs = require('fs');
const Discord = require('discord.js');
const colors = require('colors');
const client = new Discord.Client();
const {prefix, token, watchList, watchCount, repair, cmd_kill, ops, mod_ch, cmd_ch, welcome_ch, guild_id, member_cnt_ch, welcome_msg} = require('./config.json');
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
	
	try {
		console.log('[SYS] Bot Loading...'.brightMagenta);
		console.log(`[SYS] Repair Mode : ${repair}`.brightMagenta);
		console.log(`[SYS] Command Kill : ${cmd_kill}`.brightMagenta);
		console.log(`[SYS] Prefix Set : ${prefix}`.brightMagenta);
		const curWatch = Math.floor(Math.random() * watchCount);
		const watch = watchList[curWatch];
		console.log(`[SYS] Bot Activity is : Playing A Game ${watch}`.brightMagenta);
		client.user.setActivity(watch);
		console.log('[SYS] Bot Activity Set'.brightMagenta);
		console.log(`[SYS] cmd_ch : ${cmd_ch}`.brightMagenta);
		console.log('[INFO] Bot Ready!'.brightGreen);
		console.log('‎‎‎‎‎‎‎‎‏‏‎‎‏'.black);
		client.channels.cache.get(mod_ch).send('Bot Ready!');
		return (console.error);
	} catch (error) {
		console.log(`[FATAL] Loading Error : ${error}`.black.bgBrightRed);
		console.log(`[FATAL] Bot Will Not Load And Will Close In 10 Seconds`.black.bgBrightRed);
		setTimeout(function(){
			process.exit()
		}, 10000);
		
	}
	
});	

client.on ("guildMemberAdd", member => {
	
	try {
		if (!welcome_msg == undefined) {
			member.send(welcome_msg);
		}
		if (!welcome_ch == undefined) {
			client.channels.cache.get(welcome_ch).send(`Hello **${member.user.username}**! Welcome to ${server_name}`);
		}
	} catch (error) {
		console.log(`[ERROR] An Error Occured While Adding A Member : ${error}`.brightRed.bold);
	}
})

client.on("guildMemberRemove", member => {

	try {
		
		client.channels.cache.get(welcome_ch).send(`Goodbye **${member.user.username}**! Hope to see you again!`);
		
		
	} catch (error) {
	
		console.log(`[ERROR] Member ${member.user.username} Leave Error : ${error}`.brightRed.bold);
	
	}
})

client.on('message', message => {

	if (!member_cnt_ch == undefined) {
	    try {

	        const members = client.guilds.cache.get(guild_id).memberCount - 8;

	        client.channels.cache.get(member_cnt_ch).setName(`Members : ${members}`);

	    } catch (error) {
	    	console.log(`[ERROR] Member Update Error : ${error}`.red.bold);
	    }
	}

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
					const addons = [cmd_kill, watchList, watchCount, client, ops, prefix, mod_ch];
					client.commands.get(command).execute(message, args,addons);
				} catch (error) {
					message.channel.send(`Unknown Command, Try Using ${prefix}help`);
					console.log(`[WARNING] Unknown CMD or Broken CMD : ${error}`.brightYellow.bold);
				}
			}	
		try {
			const dateObj = new Date(comSend); 
			const hours = dateObj.getUTCHours() - 4; 
			const minutes = dateObj.getUTCMinutes(); 
			const seconds = dateObj.getUTCSeconds(); 
			const comSendForm = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0'); 
			const comTaken = Date.now() - comSend;
			console.log(`[CMD] ${comSendForm}  |  Command Sent : ${command}  |  Latency : ${timeTaken}ms`.brightCyan);
		} catch (error) {
			console.log(`[ERROR] Time Function Error : ${error}`.brightRed.bold);
		}
	} else {
		return;
	}

});

client.login(token);
