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
            var finalizing

            async function instaq() {

                message.channel.send("Enter your name");
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: '10000', errors: ['time'] }).then(collected =>
                        {
                            instaUser = collected.first().content;
                            
                            scf = true;
                            
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
                            scUser = collected.first().content;
                            linkedinf = true;
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
                            tiktokf = true
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
                            youtubef = true

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
                            hpf = true
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
                            finalizing = true
                        });

                }
                catch(ex) {
                    message.channel.send("You did not specify your username on time");
                }
            }
            var instaf = false
            var scf = false
            while (instaf === false) {
                instaq();

            } 

            scq();
            tiktokq();
            ytq();
            housepartyq();
            linkedinq();

            if (instaf == true) {
                instaq();
            }
            if (scf == true) {
                scq();
            }
            if (linkedinf == true) {
                linkedinq();
            }
            if (tiktokf == true) {
                tiktokq();
            }
            if (hpf == true) {
                housepartyq();
            }
            if (youtubef == true) {
                ytq();
            }
            
            if (finalizing == true) {
                message.channel.send(instaUser + scUser + linkedinUser + tiktokUser + hpUser + YouTubeUser);
            }
        }
}