module.exports = {
    name: 'ping',
    description: 'This command sends a "pong" back to the user',
    execute(message, args){
        message.channel.send("Pong!");
    }
}