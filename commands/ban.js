module.exports = {
	name: 'ban',
	description: 'Bans User Mention - Syntax : ban @USER reason',
	execute(message, args, addons) {

		try {

		    const ops = addons[4];
		    const mod_ch = addons[6];
		    const guild_id = addons[7];
		    const client = addons[3];
		    const ls = ops.includes(message.author.tag);
		    const ban_mem = args[0];
		    args.shift();
            var ban_reason;

		    if (!!args) {
		        var ban_reason = "No Reason Given";
		    } else {
		        var ban_reason = args.join(' ');
            }
		    if (ls === true) {
                if (ban_mem == undefined) {
                    message.channel.send('Please mention a user');
                } else {
                    const is_men = ban_mem.startsWith('<@!');
                    if (is_men === true) {

                            const ban_mem_id = ban_mem.replace(/[\\<>@#&!]/g, "");
                            const ban_mem_name = message.guild.members.cache.get(ban_mem_id).username;

                            const avatar = client.guilds.resolve(guild_id).members.resolve(ban_mem_id).user.displayAvatarURL({ format: 'png', dynamic: false, size: 1024 });

                            const ban_embed = {
                                color: 0xd10700,
                                title: `${ban_mem_name} Was Banned`,
                                thumbnail: avatar,
                                fields: [
                                    {
                                        name: 'Ban Reason',
                                        value: `${ban_reason}`,
                                        inline: true,
                                    }
                                ],
                                timestamp: new Date()
                            };

                            client.channels.cache.get(mod_ch).send({ embed: ban_embed });

                            member.ban(ban_reason);

                    } else {
                        message.channel.send('Please mention a user');
                    }
                }
            } else {
            	message.channel.send('You Lack The Permissions To Use This Command');
            }
		} catch (error) {
			console.log(`[WARNING] : Problem Banning Member : ${error}`.yellow.bold);
		}
	},
};