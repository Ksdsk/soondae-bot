const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


module.exports = {
    name: 'therapy',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){

        var errorEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#ff366b')
        .setTitle(`Sorry, there's been an error!`)
        .setDescription("If the problem persists, please refer to **snd help therapy**")
        .setFooter("Treating " + message.author.username, message.author.displayAvatarURL())


        
        let therapyStuff = ["I see...", "It must've been tough...", "I think about that too...", "I know...", "It will be alright...", "It's fine...", "*nods of approval*", "Very hard times... I see", "Just keep going..!", "You're doing good..!", "You will be fine.", "I am proud of you.", "I see... I see", "It often does...", "Yes... definitely", "You will get through this."]

            async function therapyTime() {

                message.reply(`Hey ${message.author.username}, tell me, what's been happening?`);
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['cancel'] }).then(collected =>
                        {
                        });


                }
                catch(ex) {
                        message.channel.send(errorEmbed)
                    return;
                }

                message.channel.send(therapyStuff[Math.floor(Math.random() * 15)]);
                filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['cancel'] }).then(collected =>
                        {
                        });


                }
                catch(ex) {
                        message.channel.send(errorEmbed)
                    return;
                }

                message.channel.send(therapyStuff[Math.floor(Math.random() * 15)]);
                filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['cancel'] }).then(collected =>
                        {
                        });


                }
                catch(ex) {
                        message.channel.send(errorEmbed)
                    return;
                }

                message.channel.send(therapyStuff[Math.floor(Math.random() * 15)]);
                filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['cancel'] }).then(collected =>
                        {
                        });


                }
                catch(ex) {
                        message.channel.send(errorEmbed)
                    return;
                }

                message.channel.send("Everything will be alright. That's a promise from me \:)");

            }

            
            therapyTime();

    }
}
