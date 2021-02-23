const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'This command is a help thread.',
    execute(message, args){

      let msgArray = message.content.split(' ');

        if(!msgArray[2]) {

          const helpReplyEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#4af3ff')
          .setTitle(`Help Page`)
          .setDescription("You can also do snd help <command> for more info!")
          .setAuthor('Soondae Bot Commands', 'https://imgur.com/zDiQLn1.png')
          .addFields(
            { name: "Prefix", value: "The prefix is hardcoded as `snd`. Please be aware!"},
            { name: "🔨 | Tools", value: "```avatar``````help``````invite``````poll``````serverinfo``````userinfo```"},
            { name: "😜 | Fun Stuff", value: "```babe``````ping``````magic``````sarcasm``````bubblewrap``````clap```"},
            { name: "💥 | GIFs", value: "```chica``````chico``````ohayo``````oof``````uwu``````tea``````dito```"},
            { name: "🦾 | Moderation", value: "```kick``````ban``````unban``````voice```"},
            { name: "🌀 | Other", value: "```invitebot``````therapy```"}
          )
          .setFooter("Sent a care package to " + message.author.username, message.author.displayAvatarURL())
          message.author.send(helpReplyEmbed);


        const dmHelpReplyEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#7aff81')
        .setTitle(`Sent one to your DM!`)
        .setFooter("Sent a care package to " + message.author.username, message.author.displayAvatarURL())
        message.reply(dmHelpReplyEmbed);

      }

      // -----------------------------------------------------------------------------------------------------------------------

      // TOOLS HELP

      // HELP HELP

      else if(msgArray[2] == "help") {
          const helpHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'help' command")
              .setDescription("**snd help** is used to list out all the available commands. It is also useful for finding the details of a single command.")
              .addFields(
                  {name: 'Syntax', value: '```snd help <command>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(helpHelpEmbed);
      }

      // AVATAR HELP

      else if(msgArray[2] == 'avatar') {
          const avatarHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'avatar' command")
              .setDescription("**snd avatar** is used to grab the user's avatar. If the <user> is empty, it will automatically bring the sender's avatar.")
              .addFields(
                  {name: 'Syntax', value: '```snd avatar <user>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(avatarHelpEmbed);
      }

      // INVITE HELP

      else if(msgArray[2] == 'invite') {
          const inviteHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'invite' command")
              .setDescription("**snd invite** automatically creates an invite link for this channel, defaulted to 24 hours, but with additional inpput, you may extend or shorten the availabilty of the invite link. This command is limited to users with CREATE_INSTANT_INVITE permissions.")
              .addFields(
                  {name: 'Syntax', value: '```snd invite <optional time in seconds>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(inviteHelpEmbed);
      }
      
      // POLL HELP

      else if(msgArray[2] == 'poll') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'poll' command")
              .setDescription("**snd poll** automatically creates a poll with two options: 👍 or 👎.")
              .addFields(
                  {name: 'Syntax', value: '```snd poll <poll>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // SERVERINFO

      else if(msgArray[2] == 'serverinfo') {
        const oofHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'serverinfo' command")
            .setDescription("**snd serverinfo** sends a detailed info about this server. This command is limited to Administrators.")
            .addFields(
                {name: 'Syntax', value: '```snd serverinfo```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(oofHelpEmbed);
    }

    // USERINFO

    else if(msgArray[2] == 'userinfo') {
        const oofHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'userinfo' command")
            .setDescription("**snd userinfo** sends a detailed info about a user in the server.")
            .addFields(
                {name: 'Syntax', value: '```snd userinfo <tagged member>```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(oofHelpEmbed);
    }

    // INTRO
    else if(msgArray[2] == 'intro') {
        const oofHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'intro' command")
            .setDescription("**snd intro** will take in your inputs and upload an Embed compiled of your data! Warning: Please do not enter **snd intro** during the intro set-up. If you would like to restart, please type in 'cancel' first, THEN re-type **snd intro**. **PLEASE USE THIS COMMAND ONE PERSON AT A TIME**!")
            .addFields(
                {name: 'Syntax', value: '```snd intro```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(oofHelpEmbed);
    }
      // -----------------------------------------------------------------------------------------------------------------------

      // FUN HELP
      // BUBBLEWRAP HELP

      else if(msgArray[2] == 'bubblewrap') {
        const pingHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'bubblewrap' command")
            .setDescription("**snd bubblewrap** created a bubble wrap!")
            .addFields(
                {name: 'Syntax', value: '```snd bubblewrap```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(pingHelpEmbed);
    }
      // CLAP HELP

      else if(msgArray[2] == 'clap') {
        const pingHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'clap' command")
            .setDescription("**snd clap** claps👏you👏!")
            .addFields(
                {name: 'Syntax', value: '```snd clap <sentence>```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(pingHelpEmbed);
    }

        // OP HELP

        else if(msgArray[2] == 'op') {
        const pingHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'op' command")
            .setDescription("**snd op** is used to generate a ominously positive quote!")
            .addFields(
                {name: 'Syntax', value: '```snd op```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(pingHelpEmbed);
    }

      // PING HELP

      else if(msgArray[2] == 'ping') {
          const pingHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'ping' command")
              .setDescription("**snd ping** is used to pong at the bot! If it pongs back, the bot is working!")
              .addFields(
                  {name: 'Syntax', value: '```snd ping```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(pingHelpEmbed);
      }

      // BABE HELP

      else if(msgArray[2] == 'babe') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'babe' command")
              .setDescription("**snd babe** measures your babeness!")
              .addFields(
                  {name: 'Syntax', value: '```snd babe```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // MAGIC HELP

      else if(msgArray[2] == 'magic') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'magic' command")
              .setDescription("**snd magic** returns an answer from the glorious Soondae!")
              .addFields(
                  {name: 'Syntax', value: '```snd magic <Any questions>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // SARCASM HELP

      else if(msgArray[2] == 'sarcasm') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'sarcasm' command")
              .setDescription("**snd sarcasm** mAkEs eVErYtHIng LoOK lIKe tHis!")
              .addFields(
                  {name: 'Syntax', value: '```snd sarcasm <Sentence>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // -----------------------------------------------------------------------------------------------------------------------

      // GIF HELP

      // OHAYO HELP

      else if(msgArray[2] == 'ohayo') {
          const ohayoHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'ohayo' command")
              .setDescription("**snd ohayo** spits out a random GIF file about ohayo!")
              .addFields(
                  {name: 'Syntax', value: '```snd ohayo```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(ohayoHelpEmbed);
      }

      // UWU HELP

      else if(msgArray[2] == 'uwu') {
          const uwuHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'uwu' command")
              .setDescription("**snd uwu** spits out a random GIF file about uwu!")
              .addFields(
                  {name: 'Syntax', value: '```snd uwu```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(uwuHelpEmbed);
      }

      // OOF HELP

      else if(msgArray[2] == 'oof') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'oof' command")
              .setDescription("**snd oof** spits out a random GIF file about oof!")
              .addFields(
                  {name: 'Syntax', value: '```snd oof```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // CHICA HELP

      else if(msgArray[2] == 'chica') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'chica' command")
              .setDescription("**snd chica** spits out a random GIF file about chica!")
              .addFields(
                  {name: 'Syntax', value: '```snd chica```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
      }

      // CHICO HELP

      else if(msgArray[2] == 'chico') {
          const oofHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'chico' command")
              .setDescription("**snd chico** spits out a random GIF file about chico!")
              .addFields(
                  {name: 'Syntax', value: '```snd chico```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(oofHelpEmbed);
              }

                    // DITO HELP

      else if(msgArray[2] == 'dito') {
        const oofHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'dito' command")
            .setDescription("**snd dito** spits out a random GIF file about dito!")
            .addFields(
                {name: 'Syntax', value: '```snd dito```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(oofHelpEmbed);
            }
      // -----------------------------------------------------------------------------------------------------------------------
      
      // OTHER HELP

      // INVITEBOT HELP

      else if(msgArray[2] == 'invitebot') {
          const inviteHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'invitebot' command")
              .setDescription("**snd invitebot** is used to send an invite code to invite me to any server in the world!")
              .addFields(
                  {name: 'Syntax', value: '```snd invitebot```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(inviteHelpEmbed);
      }

      // INVITEBOT HELP

      else if(msgArray[2] == 'therapy') {
        const inviteHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'therapy' command")
            .setDescription("**snd therapy** is used for therapy sessions for 3 messages.")
            .addFields(
                {name: 'Syntax', value: '```snd therapy```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(inviteHelpEmbed);
    }

      // -----------------------------------------------------------------------------------------------------------------------

      // MODERATIONS

      // KICK

      else if(msgArray[2] == 'kick') {
          const inviteHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'kick' command")
              .setDescription("**snd kick** is used to kick a member. This command is limited to those who can kick others.")
              .addFields(
                  {name: 'Syntax', value: '```snd kick <tag member>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(inviteHelpEmbed);
      }

      // BAN

      else if(msgArray[2] == 'ban') {
          const inviteHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'ban' command")
              .setDescription("**snd ban** is used to ban a member. Optionally, you can set a duration of the ban. This command is limited to those who can ban others.")
              .addFields(
                  {name: 'Syntax', value: '```snd ban <duration in days> <tag member>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(inviteHelpEmbed);
      }

      // UNBAN

      else if(msgArray[2] == 'unban') {
          const inviteHelpEmbed = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor('#fffc4a')
              .setTitle("Help for 'unban' command")
              .setDescription("**snd unban** is used to unban a member using the unique User ID. This command is limited to those who can ban others.")
              .addFields(
                  {name: 'Syntax', value: '```snd unban <User ID>```'}
              )
              .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(inviteHelpEmbed);
      }

      // VOICE NONE

      else if(msgArray[2] == 'voice' && !msgArray[3]) {
        const inviteHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'voice' command")
            .setDescription("**snd voice** is used to search voice commands! Leave <voice commands> empty to show the list of available voice commands.")
            .addFields(
                {name: 'Syntax', value: '```snd voice <voice commands>```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(inviteHelpEmbed);
    }

      // VOICE MUTE

      else if(msgArray[2] == 'voice' && msgArray[3] == 'mute') {
        const inviteHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'voice mute' command")
            .setDescription("**snd voice mute** is used to mute a member in a voice channel. This command is limited to members with permissions to mute other members!")
            .addFields(
                {name: 'Syntax', value: '```snd voice mute <member>```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(inviteHelpEmbed);
    }   
    
      // VOICE UNMUTE

      else if(msgArray[2] == 'voice' && msgArray[3] == 'unmute') {
        const inviteHelpEmbed = new Discord.MessageEmbed()
            .setTimestamp()
            .setColor('#fffc4a')
            .setTitle("Help for 'voice unmute' command")
            .setDescription("**snd voice unmute** is used to mute a member in a voice channel. This command is limited to members with permissions to mute other members!")
            .addFields(
                {name: 'Syntax', value: '```snd voice unmute <member>```'}
            )
            .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(inviteHelpEmbed);
    }

    // VOICE DEAFEN

    else if(msgArray[2] == 'voice' && msgArray[3] == 'deafen') {
      const inviteHelpEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#fffc4a')
          .setTitle("Help for 'voice deafen' command")
          .setDescription("**snd voice deafen** is used to deafen a member in a voice channel. This command is limited to members with permissions to deafen other members!")
          .addFields(
              {name: 'Syntax', value: '```snd voice deafen <member>```'}
          )
          .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
      message.channel.send(inviteHelpEmbed);
  }   

    // VOICE UNDEAFEN

    else if(msgArray[2] == 'voice' && msgArray[3] == 'undeafen') {
      const inviteHelpEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#fffc4a')
          .setTitle("Help for 'voice undeafen' command")
          .setDescription("**snd voice undeafen** is used to undeafen a member in a voice channel. This command is limited to members with permissions to deafen other members!")
          .addFields(
              {name: 'Syntax', value: '```snd voice undeafen <member>```'}
          )
          .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
      message.channel.send(inviteHelpEmbed);
  }   
      // -----------------------------------------------------------------------------------------------------------------------

      // EVERYTHING ELSE

      else {
          const errorHelpEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#ff366b')
          .setTitle("Sorry. I didn't understand what you meant!")
          .setFooter("Help requested by " + message.author.username, message.author.displayAvatarURL())
          message.channel.send(errorHelpEmbed).then(deleteMessage => {
              deleteMessage.delete({ timeout: 5000}).catch(console.error)
          });
          message.delete().catch(console.error);
      }
    }
}