const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'This command is a help thread.',
    execute(message, args){
        message.channel.send({
            "embed": {
              "title": "Help Page",
              "description": "You can also do snd help {command} for more info!",
              "color": '#4af3ff',
              "timestamp": new Date(),
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": "Help requested by " + String(message.author.username)
              },
              "author": {
                "name": "Soondae Bot Commands",
                "icon_url": "https://imgur.com/zDiQLn1.png"
              },
              "fields": [
                {
                  "name": "Prefix",
                  "value": "The prefix is hardcoded as `snd`. Please be aware!"
                },
                {
                  "name": "🔨 | Tools",
                  "value": "```avatar``````help``````invite``````poll```"
                },
                {
                  "name": "😜 | Fun Stuff",
                  "value": "```babe``````ping```"
                },
                {
                    "name": "💥 | GIFs",
                    "value": "```chica``````chico``````ohayo``````oof``````uwu```"
                },
                {
                    "name": "🦾 | Moderation",
                    "value": "```kick``````ban``````unban```"
                },
                {
                    "name": "🌀 | Other",
                    "value": "```invitebot```"
                }
              ]
            }
          });
    }
}