const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'kick',
    description: 'This command kicks a user',
    execute(message, args){

        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        let guildID = message.guild.id;
        //let guild = client.guilds.fetch(guildID);
        
        if (member) {
            member.kick();

                setTimeout(
                    function() {
                        try {
                            if (!(message.guild.member(member.id))) {
                                if (member) {
                                    const avatarEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully kicked ${user.username}!`)
                                    .setFooter("Kicked by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(avatarEmbed);
                                }
                    
                            }
                            else {
                                const avatarEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle(`Cannot kick ${user.username}!`)
                                .setDescription('This is most likely due to **soondae.gg** role having a lower role hierarchy. You can fix this by putting soondae.gg in the highest role!')
                                .setFooter("Kick requested " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(avatarEmbed);
                            }
                        } catch(err) {
                            console.log(err);
                        }
                            }, 500);  
                        }
        
        else {
            const kickErrorEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#ff366b')
            .setTitle("Sorry. This user does not exist!")
            .setFooter("Kick requested by " + message.author.username, message.author.displayAvatarURL())
            message.delete().catch(console.error);
            message.channel.send(kickErrorEmbed).then(deleteMessage => {
                deleteMessage.delete({ timeout: 5000}).catch(console.error)
            });
        }
        
    }
}