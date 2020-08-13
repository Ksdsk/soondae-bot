const Discord = require("discord.js");

module.exports = {
    name: 'magic',
    description: 'MAGIC 8 BALL',
    execute(message, args){

        const randomInt = Math.floor(Math.random() * 20);

        if(randomInt == 0) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`As I see it, yes.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 1) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Ask again later.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 2) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Better not tell you now.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 3) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Cannot predict now.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 4) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Concentrate and ask again.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 5) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Don’t count on it.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 6) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`It is certain.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 7) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`It is decidedly so.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 8) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Most likely.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 9) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`My reply is no.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 10) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`My sources say no.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 11) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Outlook not so good.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 12) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Outlook good.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 13) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Reply hazy, try again.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 14) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Signs point to yes.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 15) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Very doubtful.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 16) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Without a doubt.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 17) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Yes.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed); 
        }
        if(randomInt == 18) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`Yes – definitely.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }
        if(randomInt == 19) {
            const magic8Embed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#744aff')
            .setTitle(`You may rely on it.`)
            .setFooter("Fortune for " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(magic8Embed);
        }







    }
}