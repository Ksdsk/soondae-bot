const Discord = require('discord.js');

module.exports = {
    name: 'sarcasm',
    description: 'This command mAkEs eVErYtHInG a sArCAsM',
    execute(message, args){


        let msgArgs = args.join(' ');

        const makeSarcasmArray = msgArgs.split("");

        const newSarcasmArray = [];

        try {
            for (const arrayLength in makeSarcasmArray) {

                const randomInt = Math.floor(Math.random() * 2);
                if (arrayLength != " ") {
                    if (randomInt == 0) {
                        newSarcasmArray.push(makeSarcasmArray.toLowerCase())
                    } else {
                        newSarcasmArray.push(makeSarcasmArray.toUpperCase())
                    }
                } else {
                    newSarcasmArray.push(makeSarcasmArray.toLowerCase())
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