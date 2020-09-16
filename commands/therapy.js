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

        let therapyStuff = ["I see...", "It must've been tough...", "I think about that too...", "I know...", "It will be alright...", "It's fine...", "*nods*", "Very hard times... I see", "Just keep going..!", "You're doing good..!", "You will be fine.", "I am proud of you.", "I see... I see", "It often does...", "Yes... definitely", "You will get through this."]

            async function therapyTime() {

                message.channel.send(therapyStuff[Math.floor(Math.random() * 15)]);
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, time: 120000, errors: ['cancel'] }).then(collected =>
                        {
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});

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
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});

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
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});

                }
                catch(ex) {
                        message.channel.send(errorEmbed)
                    return;
                }

                message.channel.send("Everything will be alright. That's a promise from me \:)");

            }

            message.channel.reply("Tell me, what's been happening?");
            therapyTime();

    }
}
