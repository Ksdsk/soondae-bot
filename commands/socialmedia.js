const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


module.exports = {
    name: 'socialmedia',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){



            var instaUser;
            var scUser;
            var linkedinUser;
            var hpUser;
            var tiktokUser;
            var YouTubeUser;

            async function instaq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            instaUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }


            async function scq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            scUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }
            async function linkedinq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            linkedinUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }
            async function housepartyq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            hpUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }

            async function tiktokq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            tiktokUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }

            async function ytq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            YouTubeUser = collected.first().content
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }
            instaq();
            scq();
            tiktokq();
            ytq();
            housepartyq();
            linkedinq();

        }
}