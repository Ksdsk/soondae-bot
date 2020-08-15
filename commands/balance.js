const Discord = require('discord.js');
const money = require('../money.json');
const fs = require('fs');

module.exports = {
    name: 'balance',
    description: "This command sends the user's balance! ",
    execute(message, args){
        
        if(!money[message.author.id]) {
            money[message.author.id] = {
                name: message.author.username,
                money: 0
            }
            fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                if(err) console.log(err)
            })
        }   

        try {
            const balanceEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#7aff81')
            .setTitle(`${message.author.username} has ${money[message.author.id]} soondites!`)
            .setFooter("Balance of " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(balanceEmbed);
        } catch(err) {
            const balErrorEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle("Sorry. There was an error checking your balance!")
            .setFooter("Balance requested by " + message.author.username, message.author.displayAvatarURL())
            message.delete().catch(console.error);
            message.channel.send(balErrorEmbed).then(deleteMessage => {
                deleteMessage.delete({ timeout: 5000}).catch(console.error)
            });
        }





    }
}