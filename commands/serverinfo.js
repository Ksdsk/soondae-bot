const Discord = require('discord.js');
const invite = require('./invite');
const moment = require('moment');
module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){

        async function serverinfo() {
            let invite = await message.channel.createInvite(
            {
              maxAge: 86400,
              maxUses: 1 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag}`
          )
          .catch(console.log);
          
            const roles = message.guild.roles.cache.sort((a,b) => b.position - a.position).map(role => role.toString());
            const members = message.guild.members.cache;
            const channels = message.guild.channels.cache;
            const emojis = message.guild.emojis.cache;




          const serverInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setColor('#4af3ff')
        .setThumbnail(message.guild.iconURL({dynamic: true}))


        .addField('General', [
            `**Created on: ** ${moment(message.guild.createdAt).format('LT')} ${moment(message.guild.createdAt).format('LL')} ${moment(message.guild.createdAt).fromNow()}\n`,
            `**Invite Link: **${invite}\n`,
            `**Guild ID: **${message.guild.id}\n`,
            `**Server Owner: **${message.guild.owner.user.tag}\n`,
            `**Server Region: **${message.guild.region}\n`,
            `**Boost Tier : **${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : "None"}\n`,
            `**Explicit Filter: **${message.guild.explicitContentFilter}\n`,
            `**Verification level: **${message.guild.verificationLevel}\n`,
            `**Server region: **${message.guild.region}\n`,

        ])


        .addField('Members', [
            `**Total: **${message.guild.memberCount}\n`,
            `**Online: **${members.filter(member => member.presence.status === 'online')}\n`,
            `**Away: **${members.filter(member => member.presence.status === 'idle')}\n`,
            `**Do Not Disturb: **${members.filter(member => member.presence.status === 'dnd')}\n`,
            `**Offline: **${members.filter(member => member.presence.status === 'offline')}\n`,
            `**Humans: **${members.filter(member => !member.user.bot).size}\n`,
            `**Bots: **${members.filter(member => member.user.bot).size}\n`,
        ])



        .addField('Numbers', [
            `**Number of Roles: **${roles.length}\n`,
            `**Number of All Emojis: **${emojis.size}\n`
            `**Number of Regular Emojis: **${emojis.filter(emoji => !emoji.animated).size}\n`,
            `**Number of Animated Emojis: **${emojis.filter(emoji => emoji.animated).size}\n`,
            //`**Number of Text Channels: **${channels.filter(channel => channel.type === 'text').size}\n`,
            //`**Number of Text Channels: **${channels.filter(channel => channel.type === 'voice').size}\n`,
            `**Number of Boosts : **${message.guild.premiumSubscriptionCount || '0'}\n`,
        ])

        .addField('Roles', [`${roles.length - 1}`], roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : "None")
        .setTimestamp()

        
        message.channel.send(serverInfoEmbed);
          }




        

        serverinfo()
    }
}