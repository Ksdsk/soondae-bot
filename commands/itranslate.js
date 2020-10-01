const Discord = require('discord.js');
const bin = require("binary-code");

module.exports = {
    name: 'ii',
    description: 'This command mAkEs eVErYtHInG a sArCAsM',
    execute(message, args){


        let msgArgs = args.join(' ');

        const newSarcasmArray = [];

        try {
            for (var i = 0; i < msgArgs.length; i++) {

                const randomInt = Math.floor(Math.random() * 2);
                if (msgArgs.charAt(i) != " ") {
                    if (randomInt == 0) {
                        newSarcasmArray.push(msgArgs.charAt(i).toLowerCase())
                    } else {
                        newSarcasmArray.push(msgArgs.charAt(i).toUpperCase())
                    }
                } else {
                    newSarcasmArray.push(msgArgs.charAt(i))
                }
    
            }

            const sarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#7aff81')
            .setTitle(`${newSarcasmArray.join("")}`)
            .setFooter("Sarcasm from " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(sarcasmEmbed);

        } catch(err) {
            console.log(err);
            const errSarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle(`Sorry! i cOuLDn'T sARcAsM tHAt!`)
            .setFooter("Sarcasm from " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(errSarcasmEmbed);
        }



    }
}