const Discord = require("discord.js");

module.exports = {
    name: 'op',
    description: 'This command creates an ominously positive text',
    execute(message, args){

        var pos = ["You will be fine.", "You can do it.", "You will succeed.", "Better days are already coming.",
"Everything will turn out fine.", "Follow your dream.", "Go for it.", "Chase your passion.", "You will be safe."]

var omn = ["You have no choice.", "You cannot stop it.", "It is inevitable.", "It is too late now", "They always do", 
"Neverendingly.", "Now come with us"]

        const rpos = Math.floor(Math.random() * pos.length);
        const romn = Math.floor(Math.random() * omn.length);

        try {
            const sarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#000000')
            .setTitle(`${pos[rpos]}`)
            .setFooter(`${omn[romn]}`)
            message.channel.send(sarcasmEmbed);

        } catch(err) {
            console.log(err);
            const errSarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle(`Sorry! I couldn't generate an ominous quote. It is too late now.`)
            .setFooter("Ominous-Positivity from " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(errSarcasmEmbed);
        }
    }
}