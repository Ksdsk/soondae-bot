const Discord = require("discord.js");
const guild = new Discord.Guild;

module.exports = {
    name: 'invite',
    description: 'This command sends an invite code for this channel',
    execute(message, args){
        let msgArray = message.content.split(' ');
        if (!msgArray[2]) {
            var time = 86400
        }
        else if (msgArray[2]) {
            var time = msgArray[2]
        }
    message.channel.createInvite({
            "maxAge": time
        }).then(invite => message.channel.send({
            "embed": {
                'color': '#7aff81',
                'title': `Invite link for ${message.channel.name}`,
                'description': `https://discord.gg/invite/${invite.code}`
            }
        })).catch(console.error);
    }
}