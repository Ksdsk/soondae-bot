const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


module.exports = {
    name: 'intro',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){

        async function delfirstmsg(){
            await message.channel.messages.fetch({ limit: 1 }).then(messages => { // Fetches the messages
                message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
            )});
        }

        var nameUser = "null"
        var bioUser = "null"
        var instaUser = "null"
        var snapUser = "null"
        var linkedinUser = "null"
        var finalizedAns = "null"
        var errorEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#ff366b')
        .setTitle(`Sorry, there's been an error!`)
        .setDescription("If the problem persists, please refer to **snd help intro**")
        .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())

            async function instaq() {

                var smEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Please type in your name!`)
                .setDescription("You can always type 'cancel' to exit abruptly!")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(smEmbed);
                let filter = m => (m.author.id === message.author.id);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {
                            nameUser = collected.first().content;
                            if (nameUser == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                            }     
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});

                }
                catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }

                var descEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Add a bio of yourself!`)
                .setDescription("You can always type 'cancel' to exit abruptly!")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(descEmbed);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {
                            bioUser = collected.first().content;   
                            if (bioUser == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                            }                 
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                }
                catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }


                var instaEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Enter your instagram username!`)
                .setDescription("You can always type 'cancel' to exit abruptly! If you do not have an account associated with the social media above, please type 'none'")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(instaEmbed);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {
                            instaUser = collected.first().content;  
                            if (instaUser == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                            }                       
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                }
                catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }

                var snapEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Enter your snapchat username!`)
                .setDescription("You can always type 'cancel' to exit abruptly! If you do not have an account associated with the social media above, please type 'none'")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                    message.channel.send(snapEmbed);
                    try {
                        await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                            {
                                snapUser = collected.first().content;     
                                if (snapUser == "cancel") {
                                    var cancelEmbed = new Discord.MessageEmbed()
                                    .setTimestamp()
                                    .setColor('#7aff81')
                                    .setTitle(`Successfully quit!`)
                                    .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                    message.channel.send(cancelEmbed).then(deleteMessage => {
                                        deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                    });;
                                    throw "exit";
                                }                    
                            });
                            await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                                message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                            )});
                    }
                    catch(ex) {
                        if(ex == "exit") {
                            await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                                message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                            )});
                            return;
                        }
                        else {
                            message.channel.send(errorEmbed)
                        }
                        return;
                    }
                

                var housepartyEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Enter your Houseparty username!`)
                .setDescription("You can always type 'cancel' to exit abruptly! If you do not have an account associated with the social media above, please type 'none'")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(housepartyEmbed);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {
                            housepartyUser = collected.first().content;   
                            if (housepartyUser == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                            }                      
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                }
                catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                        
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }

                var linkedinEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Enter your LinkedIn username!`)
                .setDescription("You can always type 'cancel' to exit abruptly! If you do not have an account associated with the social media above, please type 'none'")
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(linkedinEmbed);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {
                            linkedinUser = collected.first().content;  
                            if (linkedinUser == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                            }                       
                        });
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                }
                catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }

                var qfinalEmbed = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#fffc4a')
                .setTitle(`Finalize your info`)
                .setDescription("Does this information seem correct? If so, type 'yes'. If not, type 'cancel'.")
                .addFields(
                    { name: "Name", value: nameUser},
                    { name: "Bio", value: bioUser},
                    { name: "Instagram", value: instaUser},
                    { name: "Snapchat", value: snapUser},
                    { name: "Houseparty", value: housepartyUser},
                    { name: "LinkedIn", value: linkedinUser}
                  )
                .setFooter("Intro setup by " + message.author.username, message.author.displayAvatarURL())
                message.channel.send(qfinalEmbed);
                try {
                    await message.channel.awaitMessages(filter, { max: 1, errors: ['cancel'] }).then(collected =>
                        {   
                            if (instaUser == "none") {
                                instaUser = "N/A"
                            }
                            if (snapUser == "none") {
                                snapUser = "N/A"
                            }
                            if (linkedinUser == "none") {
                                linkedinUser = "N/A"
                            }
                            if(housepartyUser == "none") {
                                housepartyUser = "N/A"
                            }
                            finalizedAns = collected.first().content;   
                            if (finalizedAns.toLowerCase() == "cancel") {
                                var cancelEmbed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setColor('#7aff81')
                                .setTitle(`Successfully quit!`)
                                .setFooter("Intro halted by " + message.author.username, message.author.displayAvatarURL())
                                message.channel.send(cancelEmbed).then(deleteMessage => {
                                    deleteMessage.delete({ timeout: 5000}).catch(console.error)
                                });;
                                throw "exit";
                                
                            }

                        });
    


                }catch(ex) {
                    if(ex == "exit") {
                        await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                            message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                        )});
                        return;
                    }
                    else {
                        message.channel.send(errorEmbed)
                    }
                    return;
                }
                await message.channel.messages.fetch({ limit: 2 }).then(messages => { // Fetches the messages
                    message.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
                )});         
                if (finalizedAns.toLowerCase() == "yes") {

                    try {
                        var finalEmbed = new Discord.MessageEmbed()
                        .setTimestamp()
                        .setColor('#4af3ff')
                        .setTitle(`${message.author.username}'s Bio!`)
                        .setDescription(bioUser)
                        .addFields(
                            { name: "Name", value: nameUser},
                            { name: "Instagram", value: instaUser},
                            { name: "Snapchat", value: snapUser},
                            { name: "Houseparty", value: housepartyUser},
                            { name: "LinkedIn", value: linkedinUser}
                            )
                        .setFooter("Bio of " + message.author.username, message.author.displayAvatarURL())
                        message.channel.send(finalEmbed)
                    } catch(ex) {
                        if(ex == "exit") {
                            return;
                        }
                        else {
                            message.channel.send(errorEmbed)
                        }
                        return;
                    }
                }

            


        }
        delfirstmsg();
        instaq();
    }
}
