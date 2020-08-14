module.exports = {
    name: 'mute',
    description: 'This command server mutes a user.',
    execute(message, args){
        var user = message.mentions.users.first();
        var member = message.guild.member(user);

        if (member.voice.channel) {
            message.channel.send("the person is in the voice channel")
        } else {
            message.channel.send("Not in the channel.")
        }
        
    }
}