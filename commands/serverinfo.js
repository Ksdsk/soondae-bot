const Discord = require('discord.js');
const invite = require('./invite');

module.exports = {
    name: 'serverinfo',
    description: 'This command sends all information about this server.',
    execute(message, args){

        async function getInv(message) {
            let invite = await message.channel.createInvite(
            {
              maxAge: 86400
            },
          )
          .catch(console.log);
            console.log(invite)
            return invite
          }

          console.log(getInv())

        function inviter() {
            message.channel.createInvite({
                "maxAge": 86400
            })
                async function invite() {

                console.log(invite.code)
                return invite.code;
            }
            return invite()
        }

        console.log(inviter())


        const serverInfoEmbed = new Discord.MessageEmbed()
        .setTitle(`Information for ${message.guild.name}`)
        .setDescription(`Guild description: ${message.guild.description}`)
        .addFields(
            {name: "Created on:", value: `${message.guild.createdAt}`},
            {name: "Invite link: ", value: `${inviter()}`},
            {name: "Guild ID: ", value: `${message.guild.id}`},
            {name: "Server owner: ", value: `${message.guild.owner}`},
            {name: "Region: ", value: `${message.guild.region}`},
            {name: "Number of members:", value: `${message.guild.memberCount}`}
        )


        message.channel.send(serverInfoEmbed);
    }
}