const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { memory } = require('console');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}
// PREFIX
const prefix = "snd "

client.once('ready', () => {
    console.log('Soondae is ONLINE!')
    client.user.setActivity('snd help', { type: 'STREAMING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let msgArray = message.content.split(' ');

    switch(command){
        
        // THIS IS A HELP THREAD OF THE CODE. UPDATE FREQUENTLY AS NEW COMMANDS ARE ADDED INTO ./COMMANDS/ FOLDER!
        // HELP
        case 'help':
            try {
                client.commands.get('help').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                    const helpErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't help you!")
                        .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(helpErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
            }
        break;

        // COMMANDS BEGIN

        // TOOLS

        // AVATAR

        case 'avatar':
            if(!msgArray[2]) {
                try{
                    var authorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#7aff81')
                    .setTitle(`${message.author.username}'s avatar!`)
                    .setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
                    .setFooter("Avatar requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(authorEmbed);
                } catch(err) {
                    console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't grab that avatar!")
                        .setFooter("Avatar requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                }
            }
            else if(msgArray[2]) {
                try{
                    var user = message.mentions.users.first();
                    const avatarEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#7aff81')
                        .setTitle(`${user.username}'s avatar!`)
                        .setImage(user.displayAvatarURL({ size: 2048, dynamic: true }))
                        .setFooter("Avatar requested by " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(avatarEmbed);
                } catch(err) {
                    console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't grab that avatar!")
                        .setFooter("Avatar requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                }
            }
        break;

        // INVITE

        case 'invite':
            if (message.member.hasPermission('CREATE_INSTANT_INVITE')) {
                try {
                    client.commands.get('invite').execute(message, args);
                } catch(err) {
                    console.log("Error has occured: " + err.stack);
                        const avatarErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#ff366b')
                            .setTitle("Sorry. I couldn't make an invite link!")
                            .setFooter("Invite link requested by " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                            deleteMessage.delete({ timeout: 5000}).catch(console.error)
                        });
                        message.delete().catch(console.error);
                }
            } else {
                const kickErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. You do not have permissions to create and send an invite link!")
                .setFooter("Invite link requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(kickErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            }
            
        break;

        // POLL
            
        case 'poll':
            let msgArgs = args.join(' ');
            if(message.member.hasPermission('ADMINISTRATOR')) {
                try {
                    const pollEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setFooter('Poll requested by ' + message.author.username, message.author.displayAvatarURL())
                    .setTitle('📋| Poll')
                    .addFields(
                        {name: msgArgs, value: 'React with 👍 or 👎!'}
                    )
                    message.channel.send(pollEmbed).then(messageReaction => {
                        messageReaction.react('👍')
                        messageReaction.react('👎')
                        message.delete().catch(console.error);
                    });
                } catch(err) {
                    console.log("Error has occured: " + err.stack);
                    const pollErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't create the poll!")
                        .setFooter("Poll requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(pollErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                }
            }
            else {
                const pollErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. You do not have permissions to create a poll!")
                .setFooter("Poll requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(pollErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            }
        break;

        // SERVERINFO

        case 'serverinfo':
            try {
                if (message.member.hasPermission('ADMINISTRATOR')) {
                    try {
                        client.commands.get('serverinfo').execute(message, args);
                    } catch(err) {
                        console.log("Error has occured: " + err.stack);
                            const avatarErrorEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#ff366b')
                                .setTitle("Sorry. I couldn't send the info!")
                                .setFooter("Server Info requested by " + message.author.username, message.author.displayAvatarURL())
                            message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                                deleteMessage.delete({ timeout: 5000}).catch(console.error)
                            });
                            message.delete().catch(console.error);
                    }
                } else {
                    const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to view the details of this guild!")
                    .setFooter("Server Info requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            } catch(err) {
                console.log(err)
                const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. There's been a fatal error!")
                    .setFooter("Server Info requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
            }
            
        break;
        // FUN STUFF

        // BABE

        case 'babe':
            if(!msgArray[2]) {
                try {
                    client.commands.get('babe').execute(message, args);
                } catch(err) {
                    console.log("Error has occured: " + err.stack);
                    const gifErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't measure your babeness!")
                        .setFooter("Babe meter requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(gifErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                }
            }
        break;

        // PING

        case 'ping':
            try {
                client.commands.get('ping').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const avatarErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I didn't understand!")
                    .setFooter("Avatar requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }

        break;
        
        // MAGIC8 BALL

        case 'magic':
            try {
                client.commands.get('magic').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const avatarErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry! There's an error with this Magic 8 Ball!")
                    .setFooter("Magic 8 Ball requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }

        break;
        
        // SARCASM 

        case 'sarcasm':
            try {
                client.commands.get('sarcasm').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const sarcasmErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry! There's an error turning your message into a sarcasm!")
                    .setFooter("Sarcasm requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(sarcasmErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // GIFs
        // CHICA 

        case 'chica':
            try {
                client.commands.get('chica').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const gifErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't show you the GIF!")
                    .setFooter("GIF requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(gifErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // CHICO

        case 'chico':
            try {
                client.commands.get('chico').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const gifErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't show you the GIF!")
                    .setFooter("GIF requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(gifErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // OHAYO

        case 'ohayo':
            try {
                client.commands.get('ohayo').execute(message, args); 
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const gifErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't show you the GIF!")
                    .setFooter("GIF requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(gifErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // OOF

        case 'oof':
            try {
                client.commands.get('oof').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const gifErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't show you the GIF!")
                    .setFooter("GIF requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(gifErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // UWU

        case 'uwu':
            try {
                client.commands.get('uwu').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const gifErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't show you the GIF!")
                    .setFooter("GIF requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(gifErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
        break;

        // OTHER STUFF

        // INVITEBOT

        case 'invitebot':
            try {
                const avatarErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#4af3ff')
                .setDescription("https://discord.com/oauth2/authorize?client_id=742083245339836476&scope=bot&permissions=2146958847")
                .setTitle("Use this link to invite me!")
                .setFooter("Invite requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(avatarErrorEmbed);
                message.delete().catch(console.error);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
                const avatarErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. I couldn't send the invite for this bot!")
                    .setFooter("Invite requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
                message.delete().catch(console.error);
            }
            
        break;

        // MODERATION

        // KICK

        case 'kick':
            try {
                if(message.member.hasPermission('KICK_MEMBERS')) {
                    try {
                        client.commands.get('kick').execute(message, args);
                    } catch(err) {
                        console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't kick that user!")
                        .setFooter("Kick requested by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                    }
                }
                else {
                    const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to kick a user!")
                    .setFooter("Kick requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                } 
            } catch(err) {
                const kickErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. There's been a fatal error!")
                .setFooter("Kick requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(kickErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            }
            
        break;

        case 'ban':
            try {
                if(message.member.hasPermission('BAN_MEMBERS')) {
                    try {
                        client.commands.get('ban').execute(message, args);
                    } catch(err) {
                        console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't ban that user!")
                        .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                    }
                }
                else {
                    const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to ban a user!")
                    .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            } catch(err) {
                const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to ban a user!")
                    .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            
        break;
        
        // UNBAN
        case 'unban':
            try {
                if(message.member.hasPermission('BAN_MEMBERS')) {
                    try {
                        if (!msgArray[2]) {
    
                            const unbanErrorEmbed = new Discord.MessageEmbed()
                            .setTimestamp()
                            .setColor('#ff366b')
                            .setTitle("Sorry. Please enter the user ID of the user you wish to unban!")
                            .setFooter("Unban requested by " + message.author.username, message.author.displayAvatarURL())
                            message.delete().catch(console.error);
                            message.channel.send(unbanErrorEmbed).then(deleteMessage => {
                                deleteMessage.delete({ timeout: 5000}).catch(console.error)
                            });
                        }
                        async function check() {
                            try {
                
                                var banFetch = client.users.fetch(msgArray[2])
                                console.log(await banFetch);
                                message.guild.members.unban(msgArray[2])
                
                
                                const avatarEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully unbanned ${msgArray[2]}`)
                                    .setFooter("Unbanned by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(avatarEmbed);
                            } catch(err) {
                                console.log(err)
                                const unbanErrorEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#ff366b')
                                    .setTitle("Sorry. There's been an error...")
                                    .setDescription("This error is usually due to attempting to ban an invalid user ID, or the user ID has never been banned from the server!")
                                    .setFooter("Unban requested by " + message.author.username, message.author.displayAvatarURL())
                                    message.delete().catch(console.error);
                                    message.channel.send(unbanErrorEmbed).then(deleteMessage => {
                                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                    });
                            }
                        }
                            
                        check();
                    } catch(err) {
                        console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't unban that user!")
                        .setFooter("Unban requested by " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                    }
                }
                else {
                    const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to unban a user!")
                    .setFooter("Unban requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            } catch(err) {
                const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. There's been a fatal error!")
                    .setFooter("Unban requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
            }
            
        break;
        
        // VOICE COMMANDS

        case 'voice':
            try {
                client.commands.get('mute').execute(message, args);
            } catch(err) {
                console.log("Error has occured: " + err.stack);
            const voiceErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. A fatal error has occured!")
                .setFooter("Voice moderation requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(voiceErrorEmbed).then(deleteMessage => {
                deleteMessage.delete({ timeout: 5000}).catch(console.error)
            });
            message.delete().catch(console.error);
        }
            
        break;
        case 'mute':
            try {
                if(message.member.hasPermission('MUTE_MEMBERS')) {
                    try {
                        client.commands.get('mute').execute(message, args);
                    } catch(err) {
                        console.log("Error has occured: " + err.stack);
                    const avatarErrorEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#ff366b')
                        .setTitle("Sorry. I couldn't mute that user!")
                        .setFooter("Mute requested by " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(avatarErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                    message.delete().catch(console.error);
                    }
                }
                else {
                    const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to mute a user!")
                    .setFooter("Mute requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            } catch(err) {
                const kickErrorEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#ff366b')
                    .setTitle("Sorry. You do not have permissions to mute a user!")
                    .setFooter("Mute requested by " + message.author.username, message.author.displayAvatarURL())
                    message.delete().catch(console.error);
                    message.channel.send(kickErrorEmbed).then(deleteMessage => {
                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                    });
                }
            
        break;
    
        // DEAFEN


        // SUPER SECRET COMMANDS

        // SOONDAE

        case 'soondae':
            client.commands.get('soondae').execute(message, args);
        break;
        
        // MSNFKDIGNROGNENTOEMY

        case 'msnfkdignrognentoemy':
            message.author.send("Msnfkdignrognentoemy means 'good' in Greek. You're welcome, and have a msnfkdignrognentoemy day!")
        break;

        //DEFAULT 
        default:
            console.log("Error has occured. (Most likely syntax)");
            const defaultErrorEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Invalid command.")
                .setDescription("Please refer to **snd help**!")
                .setFooter("Invalid request by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(defaultErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            message.delete().catch(console.error);
    }
});

client.login(process.env.token);


