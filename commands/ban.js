const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: 'ban',
    description: 'This command bans a user',
    execute(message, args){

        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        let guildID = message.guild.id;
        let msgArray = message.content.split(' ');

        //let guild = client.guilds.fetch(guildID);
        const checkAT = (msgArray[2].startsWith('<@'));
        if (!checkAT) {
            var day = msgArray[2];
        } else {
            var day = 'Infinite';
        }

        try {
            parseInt(day)
        } catch(err) {
            console.log(err.stack + "Not an integer.");
        }

        if (member) {
            if (!checkAT && (day <= 7)) {
                    member.ban(
                        {
                            days: parseInt(day)
                         }
                    );
            } else if (!checkAT && (day >=7)) {
                const banErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. The optional time must be in between 1 to 7 days!")
                .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(banErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                return;
            } else if (!checkAT && (typeof day === 'string')) {
                const banErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. The optional time must be an integer between 1 to 7 days!")
                .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(banErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                return;
            } else {

                member.ban();
            }

                setTimeout(
                    function() {
                        try {
                            if (!(message.guild.member(member.id)) && (day == 1)) {
                                if (member) {
                                    const avatarEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully banned ${user.username} for ${day} day!`)
                                    .setFooter("Banned by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(avatarEmbed);
                                }
                    
                            }
                            else if (!(message.guild.member(member.id))) {
                                if (member) {
                                    const avatarEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully banned ${user.username} for ${day} days!`)
                                    .setFooter("Banned by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(avatarEmbed);

                                    message.author.send(`In case you wish to revoke the ban of ${user.username}, in `)
                                }
                                
                            }
                            else {
                                const banErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle(`Cannot ban ${user.username}!`)
                                .setDescription('This is most likely due to **soondae.gg** role having a lower role hierarchy. You can fix this by putting soondae.gg in the highest role!')
                                .setFooter("Banned by " + message.author.username, message.author.displayAvatarURL())
                                message.delete().catch(console.error);
                                message.channel.send(banErrorEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });
                            }
                        } catch(err) {
                            console.log(err);
                        }
                            }, 500);  
                        }

        else {
            const banErrorEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle("Sorry. This user does not exist!")
            .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
            message.delete().catch(console.error);
            message.channel.send(banErrorEmbed).then(deleteMessage => {
                deleteMessage.delete({ timeout: 5000}).catch(console.error)
            });
        }
        
    }
}