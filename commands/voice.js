const Discord = require("discord.js");

module.exports = {
    name: 'voice',
    description: 'Hub for all voice-related moderations.',
    execute(message, args){
        var user = message.mentions.users.first();
        var member = message.guild.member(user);
        let msgArray = message.content.split(' ');

        if (!msgArray[2]) {
            const voiceErrorEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#4af3ff')
            .setTitle("Voice moderation list")
            .addFields(
                {name: "🔊 | Voice", value: "```mute``````unmute``````deafen``````undeafen```"}
            )
            .setFooter("Voice Moderation List requested by " + message.author.username, message.author.displayAvatarURL())
            message.channel.send(voiceErrorEmbed)
        
        } else {
            switch(msgArray[2]) {


                // MUTE
    
                case "mute":
                    async function muteMember() {
                        if (message.member.hasPermission('MUTE_MEMBERS')) {
                            try {
                                if (member.voice.channel) {
                        
                                    await user.setMute(true)
                                    const muteEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully muted ${user.username}!`)
                                    .setFooter("Muted by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(muteEmbed);
                        
                        
                                } else {
                                    const muteErrorEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#ff366b')
                                    .setTitle("Sorry. This user is not in a voice channel!")
                                    .setFooter("Mute requested by " + message.author.username, message.author.displayAvatarURL())
                                    message.delete().catch(console.error);
                                    message.channel.send(muteErrorEmbed).then(deleteMessage => {
                                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                    });
                                }
                            } catch(err) {
                                console.log(err.stack)
                                const muteErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle("Sorry. I couldn't mute the user!")
                                .setFooter("Mute requested by " + message.author.username, message.author.displayAvatarURL())
                                message.delete().catch(console.error);
                                message.channel.send(muteErrorEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                            
                                })
                            }
        
                        }
                    }
                    muteMember()
                break;
    
                // UNMUTE
    
                case "unmute":
                    if (message.member.hasPermission('MUTE_MEMBERS')) {
                        try {
                            if (member.voice.channel) {
                    
                                member.setMute(false)
                                const unmuteEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully unmuted ${user.username}!`)
                                .setFooter("Unmuted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(unmuteEmbed);
                    
                    
                            } else {
                                const unmuteErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle("Sorry. This user is not in a voice channel!")
                                .setFooter("Unmute requested by " + message.author.username, message.author.displayAvatarURL())
                                message.delete().catch(console.error);
                                message.channel.send(unmuteErrorEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });
                            }
                        } catch(err) {
                            console.log(err.stack)
                            const unmuteErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#ff366b')
                            .setTitle("Sorry. I couldn't unmute the user!")
                            .setFooter("Unmute requested by " + message.author.username, message.author.displayAvatarURL())
                            message.delete().catch(console.error);
                            message.channel.send(unmuteErrorEmbed).then(deleteMessage => {
                                deleteMessage.delete({ timeout: 5000}).catch(console.error)
                        
                            })
                        }
    
                }
                break;
    
                // DEAFEN
                
                case "deafen":
                    if (message.member.hasPermission('DEAFEN_MEMBERS')) {
                        try {
                            if (member.voice.channel) {
                    
                                member.setDeaf(true)
                                const deafenEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully deafened ${user.username}!`)
                                .setFooter("Deafened by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(deafenEmbed);
                    
                    
                            } else {
                                const deafenErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle("Sorry. This user is not in a voice channel!")
                                .setFooter("Deafen requested by " + message.author.username, message.author.displayAvatarURL())
                                message.delete().catch(console.error);
                                message.channel.send(deafenErrorEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });
                            }
                        } catch(err) {
                            console.log(err.stack)
                            const deafenErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#ff366b')
                            .setTitle("Sorry. I couldn't deafen the user!")
                            .setFooter("Deafen requested by " + message.author.username, message.author.displayAvatarURL())
                            message.delete().catch(console.error);
                            message.channel.send(deafenErrorEmbed).then(deleteMessage => {
                                deleteMessage.delete({ timeout: 5000}).catch(console.error)
                        
                            })
                        }
    
                }
                break;
    
                case "undeafen":
                    if (message.member.hasPermission('DEAFEN_MEMBERS')) {
                        try {
                            if (member.voice.channel) {
                    
                                member.setDeaf(false)
                                const undeafenEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully undeafened ${user.username}!`)
                                .setFooter("Undeafened by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(undeafenEmbed);
                    
                    
                            } else {
                                const undeafenErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle("Sorry. This user is not in a voice channel!")
                                .setFooter("Undeafen requested by " + message.author.username, message.author.displayAvatarURL())
                                message.delete().catch(console.error);
                                message.channel.send(undeafenErrorEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });
                            }
                        } catch(err) {
                            console.log(err.stack)
                            const undeafenErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#ff366b')
                            .setTitle("Sorry. I couldn't undeafen the user!")
                            .setFooter("Deafen requested by " + message.author.username, message.author.displayAvatarURL())
                            message.delete().catch(console.error);
                            message.channel.send(undeafenErrorEmbed).then(deleteMessage => {
                                deleteMessage.delete({ timeout: 5000}).catch(console.error)
                        
                            })
                        }
    
                }
                break;
                default:
                    const voiceErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#4af3ff')
                            .setTitle("Voice moderation list")
                            .addFields(
                                {name: "🔊 | Voice", value: "```mute``````unmute``````deafen``````undeafen```"}
                            )
                            .setFooter("Voice Moderation List requested by " + message.author.username, message.author.displayAvatarURL())
                            message.channel.send(voiceErrorEmbed)
                break;
            }
        }
        
    }
}