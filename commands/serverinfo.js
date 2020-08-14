const Discord = require('discord.js');
const invite = require('./invite');

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
            `**Created on: ** ${message.guild.createdAt}`,
            `**Invite link: **${invite}`,
            `**Guild ID: **${message.guild.id}`,
            `**Server owner: **${message.guild.owner.user.tag}`,
            `**Server region: **${message.guild.region}`
        ])


        .addField('Members', [

            {name: "Number of members:", value: `${message.guild.memberCount}`},
            {name: "Online: ", value: `${message.guild.region}`}
        ])





        
        message.channel.send(serverInfoEmbed);
          }




        

        serverinfo()
    }
}