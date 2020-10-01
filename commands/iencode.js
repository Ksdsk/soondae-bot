const Discord = require('discord.js');
const bin = require("binary-code");

module.exports = {
    name: 'iencode',
    description: 'This command encodes ASCII into 이',
    execute(message, args){


        let msgArgs = args.join(' ');

        const newArray = [];



        try {
            for (var i = 0; i < msgArgs.length; i++) {

                var firstChar = "hi";
                var binaryChar = bin.binary(firstChar);
                var arrayBinary = binaryChar.split("");
                for (var j = 0; j < arrayBinary.lengthl; j++) {
                    if (arrayBinary[j] == '0') {
                        newArray.push("이");
                    }
                    else if (arrayBinary[j] == '1') {
                        newArray.push("잉");
                    }
                }
            }

            
            const sarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#7aff81')
            .setTitle(`${newArray.join("")}`)
            .setFooter("Encode request from " + message.author.username, message.author.displayAvatarURL())
            message.reply(sarcasmEmbed);

        } catch(err) {
            console.log(err);
            const errSarcasmEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle(`Sorry! I couldn't encode your text!`)
            .setFooter("Encode request from " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(errSarcasmEmbed);
        }



    }
}