const Discord = require('discord.js');
const invite = require('./invite');

module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){



        function invite() {
            message.channel.createInvite({
                "maxAge": 86400
            }).then(invite => {
                console.log(invite.code)
                var invCode = `https://discord.gg/invite/${invite.code}`;
                return invCode;
            }
            );
        }

        


        const serverInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setDescription(`Guild description: ${message.guild.description}`)
        .addFields(
            {name: "Created on:", value: `${message.guild.createdAt}`},
            {name: "Invite link: ", value: `https://discord.gg/invite${invite()}`},
            {name: "Guild ID: ", value: `${message.guild.id}`},
            {name: "Server owner: ", value: `${message.guild.owner}`},
            {name: "Region: ", value: `${message.guild.region}`},
            {name: "Number of members:", value: `${message.guild.memberCount}`}
        )


        message.channel.send(serverInfoEmbed);
    }
}