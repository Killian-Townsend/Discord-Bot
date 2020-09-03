# Discord-Bot 

[![LatestRelease](https://img.shields.io/badge/Latest%20Release-v3.0.0-green)](https://github.com/kittypickles9982/Discord-Bot/) [![Dependency](https://img.shields.io/badge/Discord.JS-12.3.1-green)](https://github.com/discordjs/discord.js) [![Dependency](https://img.shields.io/badge/Colors-1.4.0-green)](https://www.npmjs.com/package/colors) [![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/kittypickles9982/Discord-Bot/blob/master/LICENSE) [![Node](https://img.shields.io/badge/node-%3E%3D%2012.0.0-green)](https://nodejs.org/en/) [![Latest](https://img.shields.io/github/last-commit/kittypickles9982/Discord-Bot?color=green)](https://github.com/kittypickles9982/Discord-Bot)

A custom Discord bot written in javascript

## Notice

This bot is customised for my discord server, so feel free to make the changes you want

## Libraries

[Discord.js](https://www.npmjs.com/package/discord.js)

[Colors](https://www.npmjs.com/package/colors)

Libraries are already included within [node_modules](https://github.com/kittypickles9982/Discord-Bot/tree/master/node_modules)


## Help

All settings are changed in config.json

Prefix : changes the prefix

Token : your bot token

watchList : an array of strings that it will chose from at startup or with the play command to show as "playing"

watchCount : how many strings there are in watchList

repair : disables the bot - values : 0 off, 1 on

cmd_kill : allows the bot to be killed with the kill command by an op - values : 0 no, 1 yes

ops : an array of strings with users allowed to kill the bot

mod_ch : channel id for what channel to post bot updates in - required

cmd_ch : channel for bot commands, leave blank to use on any channel

welcome_ch : if set, will send a welcome/leave message

guild_id : Guild ID for member counting - required
member_cnt_ch : If set, will set channel name to amount of member, updates every message sent

welcome_msg : If set, will DM this message to new user

server_name : Name of server to be used in different situations

#### Warning : Not setting, or setting certain options incorrectly, may result in the bot creating errors, or dying at startup 

## Commands

User : returns the users ID and full name

Kill : kills the bot if cmd_kill is set to 1

play : chooses a random string from watchList to set as playing, add a number argument from 0 - watchCount to manually choose

ops : shows the list of ops in config.json

## License

[MIT License](https://github.com/kittypickles9982/Discord-Bot/blob/master/LICENSE)
