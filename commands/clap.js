const Discord = require('discord.js');

module.exports = {
    name: 'clap',
    description: 'This command claps!',
    execute(message, args){


        let msgArgs = args.join(' ');

        try {
            
            var finalArgs = msgArgs.replace(" ", "👏");

            const clapEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#7aff81')
            .setTitle(`${finalArgs}`)
            .setFooter("Clapped by " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(clapEmbed);

        } catch(err) {
            console.log(err);
            const errSarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle(`Sorry! I couldn't make you into a Karen!`)
            .setFooter("Clap from " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(errSarcasmEmbed);
        }



    }
}