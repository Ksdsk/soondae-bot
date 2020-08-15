const Discord = require('discord.js');
const money = require('../money.json');
const fs = require('fs');
const ms = require('parse-ms')
const cooldowns = require('../cooldowns.json');

module.exports = {
    name: 'daily',
    description: "This command adds 300 soondites to the user for every 24 hours!",
    execute(message, args){
        
        let timeout = 86400000;
        let dailyAmount = 300;

        if(!money[message.author.id]) {
            money[message.author.id] = {
                name: message.author.tag,
                money: dailyAmount
            }
            fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                if(err) console.log(err)
            });

            if(!cooldowns[message.author.id]) {
                cooldowns[message.author.id] = {
                    name: message.author.tag,
                    daily: Date.now()
                }
                fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                    if(err) console.log(err)
                });
            } else {
                cooldowns[message.author.id].daily = Date.now();
                fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                    if(err) console.log(err)
                });
            }

            try {
                const balanceEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#7aff81')
                .setTitle(`Here's your ${dailyAmount} soondites!`)
                .setDescription(`Your current amount of soondites: ${money[message.author.id].money}`)
                .setFooter("Daily claimed by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(balanceEmbed);
            } catch(err) {
                const balErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. There was an error checking your balance!")
                .setFooter("Daily requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(balErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            }


        } else {

            if(!cooldowns[message.author.id]) {
                cooldowns[message.author.id] = {
                    name: message.author.tag,
                    daily: Date.now()
                }
                fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                    if(err) console.log(err)
                });

                money[message.author.id].money += dailyAmount;
                fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                    if(err) console.log(err)
                });

                const balanceEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#7aff81')
                .setTitle(`Here's your ${dailyAmount} soondites!`)
                .setDescription(`Your current amount of soondites: ${money[message.author.id].money}`)
                .setFooter("Daily claimed by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(balanceEmbed);



            } else {
                if(timeout - (Date.now() - cooldowns[message.author.id]) > 0) {
                    
                    let time = ms(timeout - (Date.now() - cooldowns[message.author.id].daily));
                    console.log("Error has occured: " + err.stack);
                    const ErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Daily already claimed!")
                        .setDescription(`Collect it again in **${time.hours}hr ${time.minutes}min ${time.seconds}sec**!`)
                        .setFooter("Daily requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(ErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                } else {
                    money[message.author.id].money += dailyAmount;
                    fs.writeFile('./money.json', JSON.stringify(money), (err) => {
                        if(err) console.log(err)
                    });

                    cooldowns[message.author.id].daily = Date.now();
                    fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                        if(err) console.log(err)
                    });

                    const balanceEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#7aff81')
                    .setTitle(`Here's your ${dailyAmount} soondites!`)
                    .setDescription(`Your current amount of soondites: ${money[message.author.id].money}`)
                    .setFooter("Daily claimed by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(balanceEmbed);
    
                }
            }

        }


    }
}