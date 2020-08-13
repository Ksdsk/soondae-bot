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
            if(!msgArray[2]) {
                client.commands.get('help').execute(message, args);
            }

            // -----------------------------------------------------------------------------------------------------------------------

            // TOOLS HELP

            // HELP HELP

            else if(msgArray[2] == "help") {
                const helpHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'help' command")
                    .setDescription("**snd help** is used to list out all the available commands. It is also useful for finding the details of a single command.")
                    .addFields(
                        {name: 'Syntax', value: '```snd help <command>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(helpHelpEmbed);
            }

            // AVATAR HELP

            else if(msgArray[2] == 'avatar') {
                const avatarHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'avatar' command")
                    .setDescription("**snd avatar** is used to grab the user's avatar. If the <user> is empty, it will automatically bring the sender's avatar.")
                    .addFields(
                        {name: 'Syntax', value: '```snd avatar <user>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(avatarHelpEmbed);
            }

            // INVITE HELP

            else if(msgArray[2] == 'invite') {
                const inviteHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'invite' command")
                    .setDescription("**snd invite** automatically creates an invite link for this channel, defaulted to 24 hours, but with additional inpput, you may extend or shorten the availabilty of the invite link.")
                    .addFields(
                        {name: 'Syntax', value: '```snd invite <optional time in seconds>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(inviteHelpEmbed);
            }
            
            // POLL HELP

            else if(msgArray[2] == 'poll') {
                const oofHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'poll' command")
                    .setDescription("**snd poll** automatically creates a poll with two options: 👍 or 👎.")
                    .addFields(
                        {name: 'Syntax', value: '```snd poll <poll>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(oofHelpEmbed);
            }

            // -----------------------------------------------------------------------------------------------------------------------

            // FUN HELP

            // PING HELP

            else if(msgArray[2] == 'ping') {
                const pingHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'ping' command")
                    .setDescription("**snd ping** is used to pong at the bot! If it pongs back, the bot is working!")
                    .addFields(
                        {name: 'Syntax', value: '```snd ping```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(pingHelpEmbed);
            }

            // BABE HELP

            else if(msgArray[2] == 'babe') {
                const oofHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'babe' command")
                    .setDescription("**snd babe** measures your babeness!")
                    .addFields(
                        {name: 'Syntax', value: '```snd babe```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(oofHelpEmbed);
            }

            // -----------------------------------------------------------------------------------------------------------------------

            // GIF HELP

            // OHAYO HELP

            else if(msgArray[2] == 'ohayo') {
                const ohayoHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'ohayo' command")
                    .setDescription("**snd ohayo** spits out a random GIF file about ohayo!")
                    .addFields(
                        {name: 'Syntax', value: '```snd ohayo```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(ohayoHelpEmbed);
            }

            // UWU HELP

            else if(msgArray[2] == 'uwu') {
                const uwuHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'uwu' command")
                    .setDescription("**snd uwu** spits out a random GIF file about uwu!")
                    .addFields(
                        {name: 'Syntax', value: '```snd uwu```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(uwuHelpEmbed);
            }

            // OOF HELP

            else if(msgArray[2] == 'oof') {
                const oofHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'oof' command")
                    .setDescription("**snd oof** spits out a random GIF file about oof!")
                    .addFields(
                        {name: 'Syntax', value: '```snd oof```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(oofHelpEmbed);
            }

            // CHICA HELP

            else if(msgArray[2] == 'chica') {
                const oofHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'chica' command")
                    .setDescription("**snd chica** spits out a random GIF file about chica!")
                    .addFields(
                        {name: 'Syntax', value: '```snd chica```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(oofHelpEmbed);
            }

            // CHICO HELP

            else if(msgArray[2] == 'chico') {
                const oofHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'chico' command")
                    .setDescription("**snd chico** spits out a random GIF file about chico!")
                    .addFields(
                        {name: 'Syntax', value: '```snd chico```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(oofHelpEmbed);
                    }

            // -----------------------------------------------------------------------------------------------------------------------
            
            // OTHER HELP

            // INVITEBOT HELP

            else if(msgArray[2] == 'invitebot') {
                const inviteHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'invitebot' command")
                    .setDescription("**snd invitebot** is used to send an invite code to invite me to any server in the world!")
                    .addFields(
                        {name: 'Syntax', value: '```snd invitebot```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(inviteHelpEmbed);
            }

            // -----------------------------------------------------------------------------------------------------------------------

            // MODERATIONS

            // KICK

            else if(msgArray[2] == 'kick') {
                const inviteHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'kick' command")
                    .setDescription("**snd kick** is used to kick a member. This command is limited to those who can kick others.")
                    .addFields(
                        {name: 'Syntax', value: '```snd kick <tag member>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(inviteHelpEmbed);
            }

            // BAN

            else if(msgArray[2] == 'ban') {
                const inviteHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'ban' command")
                    .setDescription("**snd ban** is used to ban a member. Optionally, you can set a duration of the ban. This command is limited to those who can ban others.")
                    .addFields(
                        {name: 'Syntax', value: '```snd ban <duration in days> <tag member>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(inviteHelpEmbed);
            }

            // UNBAN

            else if(msgArray[2] == 'unban') {
                const inviteHelpEmbed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setColor('#fffc4a')
                    .setTitle("Help for 'unban' command")
                    .setDescription("**snd unban** is used to unban a member using the unique User ID. This command is limited to those who can ban others.")
                    .addFields(
                        {name: 'Syntax', value: '```snd unban <User ID>```'}
                    )
                    .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(inviteHelpEmbed);
            }


            // -----------------------------------------------------------------------------------------------------------------------

            // EVERYTHING ELSE

            else {
                const errorHelpEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#ff366b')
                .setTitle("Sorry. I didn't understand what you meant!")
                .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(errorHelpEmbed).then(deleteMessage => {
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
        break;

        case 'ban':
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
                .setTitle("Sorry. You do not have permissions to unban a user!")
                .setFooter("Ban requested by " + message.author.username, message.author.displayAvatarURL())
                message.delete().catch(console.error);
                message.channel.send(kickErrorEmbed).then(deleteMessage => {
                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                });
            }
        break;
        
        // UNBAN
        case 'unban':
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
        break;
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


