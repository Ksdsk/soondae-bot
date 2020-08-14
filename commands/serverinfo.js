const Discord = require('discord.js');
const invite = require('./invite');
const moment = require('moment');
const Util = require('util');
module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){


        this.utils = new Util(this);
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
            `**Created on: ** ${moment(message.guild.createdAt).format('LT')} ${moment(message.guild.createdAt).format('LL')} ${moment(message.guild.createdAt).fromNow()}`,
            `**Invite Link: **${invite}`,
            `**Guild ID: **${message.guild.id}`,
            `**Server Owner: **${message.guild.owner.user.tag}`,
            `**Server Region: **${message.guild.region}`,
            `**Boost Tier : **${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : "None"}`,
            `**Explicit Filter: **${message.guild.explicitContentFilter}`,
            `**Verification level: **${message.guild.verificationLevel}`,
            `**Server region: **${message.guild.region}`,

        ])


        .addField('Members', [
            `**Total: **${message.guild.memberCount}`,
            `**Online: **${members.filter(member => member.presence.status === 'online').size}`,
            `**Away: **${members.filter(member => member.presence.status === 'idle').size}`,
            `**Do Not Disturb: **${members.filter(member => member.presence.status === 'dnd').size}`,
            `**Offline: **${members.filter(member => member.presence.status === 'offline').size}`,
            `**Humans: **${members.filter(member => !member.user.bot).size}`,
            `**Bots: **${members.filter(member => member.user.bot).size}`,
        ])



        .addField('Numbers', [
            `**Number of Roles: **${roles.length}`,
            `**Number of All Emojis: **${emojis.size}`,
            `**Number of Regular Emojis: **${emojis.filter(emoji => !emoji.animated).size}`,
            `**Number of Animated Emojis: **${emojis.filter(emoji => emoji.animated).size}`,
            `**Number of Text Channels: **${channels.filter(channel => channel.type === 'text').size}`,
            `**Number of Text Channels: **${channels.filter(channel => channel.type === 'voice').size}`,
            `**Number of Boosts : **${message.guild.premiumSubscriptionCount || '0'}`,
        ])

        // Comment if nec
        .addField('Roles', [`${roles.length - 1}`], roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : "None")
        .setTimestamp()
        .setFooter("Server Info requested by " + message.author.username, message.author.displayAvatarURL())
        
        message.author.send(serverInfoEmbed);
          }

          const dmHelpReplyEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#7aff81')
          .setTitle(`Sent one to your DM!`)
          .setFooter("Server Info requested by " + message.author.username, message.author.displayAvatarURL())
          message.reply(dmHelpReplyEmbed);

        serverinfo()
    }
}