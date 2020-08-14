const Discord = require('discord.js');
const invite = require('./invite');

module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){

        async function replyWithInvite(message) {
            let invite = await message.channel.createInvite(
            {
              maxAge: 86400,
              maxUses: 1 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag}`
          )
          .catch(console.log);
          
            message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
          }




        const serverInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setDescription(`Guild description: ${message.guild.description}`)
        .addFields(
            {name: "Created on:", value: `${message.guild.createdAt}`},
            {name: "Invite link: ", value: `invitelink here`},
            {name: "Guild ID: ", value: `${message.guild.id}`},
            {name: "Server owner: ", value: `${message.guild.owner}`},
            {name: "Region: ", value: `${message.guild.region}`},
            {name: "Number of members:", value: `${message.guild.memberCount}`}
        )


        message.channel.send(serverInfoEmbed);
    }
}