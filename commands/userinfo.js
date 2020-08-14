const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Lv. 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Lv. 2',
    HYPESQUAD_EVENTS: 'Hypesquad Events',
    HOUSE_BRAVERY: 'Bravery',
    HOUSE_BRILLIANCE: 'Brilliance',
    HOUSE_BALANCE: 'Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Developer'
}

const Discord = require('discord.js');
const invite = require('./invite');
const moment = require('moment');
const Util = require('util');

module.exports = {
    name: 'userinfo',
    description: 'This command sends all information about this user.',
    execute(message, args){
        this.utils = new Util(this);
        async function userinfo() {
          
            const roles = message.guild.roles.cache.sort((a,b) => b.position - a.position).map(role => role.toString()).slice(0, -1);
            const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
            const userFlags = member.user.flags.toArray();

          const userInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${member.user.username}`)
        .setColor('#4af3ff')
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .addField('User', [
            `**Username: **${member.user.tag}`,
            `**ID: **${member.id}`,
            `**Flags: **${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
            `**Avatar: **[Link to Avatar]${member.user.displayAvatarURL({dynamic: true})}`,
            `**Time Created: **${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
            `**Status: **${member.user.presence.status}`,
            `**Game: **${member.user.presence.game || 'Not Playing a Game'}`
        ])
        .addField('Member', [
            `**Highest Role: **${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
            `**Server Joined in: **${moment(member.joinedAt).format('LL LTS')}`,
            `**Hoist Role: **${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
            //`**Roles: **[${roles.length}]: ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.utils.trimArray(roles) : 'None'}`
        ])

        .setTimestamp()
        .setFooter("User Info requested by " + message.author.username, message.author.displayAvatarURL())
        
        message.author.send(userInfoEmbed);
          }

          const dmHelpReplyEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#7aff81')
          .setTitle(`Sent one to your DM!`)
          .setFooter("User Info requested by " + message.author.username, message.author.displayAvatarURL())
          message.reply(dmHelpReplyEmbed);

        userinfo()
    }
}