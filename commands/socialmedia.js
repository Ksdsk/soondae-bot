const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


module.exports = {
    name: 'socialmedia',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){

            var instaUser = "none";
            var scUser = "none";
            var linkedinUser = "none";
            var hpUser = "none";
            var tiktokUser = "none";
            var YouTubeUser = "none";
            var instaf = true
            var scf = false
            var linkedinf = false
            var hpf = false
            var tiktokf = false
            var youtubef = false
            var finalizing = false

            async function instaq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            instaUser = collected.first().content;
                            
                            scf = true;
                            instaf = false;
                            
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }


            

            while (instaf == true) {
                instaq();
            }

        }
}