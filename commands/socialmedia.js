const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'socialmedia',
    description: 'This command uploads social media of the user given each argument',
    execute(message, args){

        qDone = false
        qInsta = false 
        qSC = false
        qHouseParty = false
        qTikTok = false
        qLIN = false

        userInsta = "none"
        userSC = "none"
        userHouseParty = "none"
        userTikTok = "none"
        userLIN = "none"

        const filter = m => m.author.id === message.author.id;

        function cQ(userInsta, userSC, userHouseParty, userTikTok, userLIN) {
            const fReq = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#4af3ff')
            .setTitle("Is this the right info?")
            .setDescription(`This will expire in 60 seconds`)
            .addFields(
                {name: "Instagram", value: `${userInsta}`},
                {name: "Snapchat", value: `${userSC}`},
                {name: "Houseparty", value: `${userHouseParty}`},
                {name: "TikTok", value: `${userTikTok}`},
                {name: "LinkedIn", value: `${userLIN}`},
              { name: "True", value: "Type 'true' if the given information is correct!"},
              { name: "False", value: "Type 'false' if the given information is false, and you would like to restart!"}
            )
            .setFooter("Social media requested by: " + message.author.username, message.author.displayAvatarURL())
  
            message.channel.send(fReq);

            message.channnel.awaitMessages(filter, {max: 1, time: 20000, errors: ['cancel']}).then(collected => {
              if (collected == "true") {
                const cancelRq = new Discord.MessageEmbed()
                .setTimestamp()
                .setColor('#4af3ff')
                .setTitle(`Social media of ${message.user.username}`)
                .addFields(
                    {name: "Instagram", value: `${userInsta}`},
                    {name: "Snapchat", value: `${userSC}`},
                    {name: "Houseparty", value: `${userHouseParty}`},
                    {name: "TikTok", value: `${userTikTok}`},
                    {name: "LinkedIn", value: `${userLIN}`}
                    
                    )
                .setFooter("Social media of: " + message.author.username, message.author.displayAvatarURL())

                message.channel.send(cancelRq)
                qDone = true
              } else if (collected == "false") {
                  socialMedia();
              }
            }).catch(err => console.log(err))


        }



        function socialMedia() {
            const instaReq = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#4af3ff')
            .setTitle(`Please enter your username for INSTAGRAM`)
            .setDescription(`This will expire in 20 seconds.`)
            .addFields(
              { name: "Cancel", value: "Type 'cancel' to halt this command!"},
              { name: "Don't have an account for this social media?", value: "Type 'skip' to skip this social media!"}
            )
            .setFooter("Social media requested by: " + message.author.username, message.author.displayAvatarURL())
  
            message.channel.send(instaReq).then(() =>
            
            message.channnel.awaitMessages(filter, {max: 1, time: 20000, errors: ['cancel']}).then(collected => {
                if (collected == "cancel") {
                  const cancelRq = new Discord.MessageEmbed()
                  .setTimestamp()
                  .setColor('#4af3ff')
                  .setTitle(`Successfully cancelled the request!`)
                  .setFooter("Cancel requested by: " + message.author.username, message.author.displayAvatarURL())
                  message.channel.send(cancelRq)
                } else if (collected == "skip") {
                    userInsta = "none"
                }
                else {
                  userInsta = collected
                }
              }).catch(err => console.log(err))
  
            
            );

           

            // SC
            const scReq = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#4af3ff')
            .setTitle(`Please enter your username for SNAPCHAT`)
            .setDescription(`This will expire in 20 seconds.`)
            .addFields(
              { name: "Cancel", value: "Type 'cancel' to halt this command!"},
              { name: "Don't have an account for this social media?", value: "Type 'skip' to skip this social media!"}
            )
            .setFooter("Social media requested by: " + message.author.username, message.author.displayAvatarURL())
  
            message.channel.send(scReq).then(() => {
                message.channnel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
                    if (collected == "cancel") {
                      const cancelRq = new Discord.MessageEmbed()
                      .setTimestamp()
                      .setColor('#4af3ff')
                      .setTitle(`Successfully cancelled the request!`)
                      .setFooter("Cancel requested by: " + message.author.username, message.author.displayAvatarURL())
                      message.channel.send(cancelRq)
                    } else if (collected == "skip") {
                        userSC = "none"
                    }
                    else {
                      userSC = collected
                    }
                  }).catch(err => console.log(err))
            }
            
            );

         

            cQ();
        }

        while(qDone == false) {

            socialMedia();

            
             

        }
    }
}