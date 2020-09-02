const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


module.exports = {
    name: 'socialmedia',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){

            async function firstSecon() {
                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            message.channel.send("Your name is " + collected.first().content);
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify a name on time.");
                }
            }
            firstSecon();
        }
}