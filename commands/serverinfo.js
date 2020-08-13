const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){

        message.channel.createInvite({
            "maxAge": time
        }).then(invite => message.channel.send({
            "embed": {
                'color': '#7aff81',
                'title': `Invite link for ${message.channel.name}`,
                'description': `https://discord.gg/invite/${invite.code}`
            }
        })).catch(console.error);

        const serverInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setDescription(`Guild description: ${message.guild.description}`)
        .addFields(
            {name: "Created on:", value: `${message.guild.createdAt}`, inline: true},
            {name: "Invite link: ", value: `https://discord.gg/invite${message.channel.createInvite().code}`, inline: true},
            {name: "Guild ID: ", value: `${message.guild.id}`, inline: true},
            {name: "Server owner: ", value: `${message.guild.owner}`, inline: true},
            {name: "Region: ", value: `${message.guild.region}`, inline: true},
            {name: "Number of members:", value: `${message.guild.memberCount}`},
        )


        message.channel.send(serverInfoEmbed);
    }
}