# Discord-Bot 

[![LatestRelease](https://img.shields.io/badge/Latest%20Release-v2.0.1-green)](https://github.com/EchoHackCmd/Atom-Client-Releases/releases/latest) ![License](https://img.shields.io/badge/license-MIT-green) ![Node](https://img.shields.io/badge/node-%3E%3D%2012.0.0-green) [![Latest](https://img.shields.io/github/last-commit/kittypickles9982/Discord-Bot?color=green)](https://github.com/kittypickles9982/Discord-Bot)

A custom Discord bot written in javascript

## Libraries

[Discord.js](https://www.npmjs.com/package/discord.js)

## Help

All settings are changed in config.json

Prefix : changes the prefix

Token : your bot token

watchList : an array of strings that it will chose from at startup or with the play command to show as "playing"

watchCount : how many strings there are in watchList

repair : disables the bot - values : 0 off, 1 on

cmd_kill : allows the bot to be killed with the kill command by an op - values : 0 no, 1 yes.

ops : an array of strings with users allowed to kill the bot

## Commands

User : returns the users ID and full name

Kill : kills the bot if cmd_kill is set to 1

play : chooses a random string from watchList to set as playing, add a number argument from 0 - watchCount to manually choose

ops : shows the list of ops in config.json

## License

[MIT License](https://github.com/kittypickles9982/Discord-Bot/blob/master/LICENSE)
