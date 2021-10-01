const Discord = require('discord.js');
const examjson = require('../jsons/fall2021-2022.json')

module.exports = {
    name: 'exam',
    description: 'This command sends info about the exam of a certain course',
    execute(message, args) {
        let courseName = args.join('');
        courseName = courseName.toUpperCase();
        const domain = courseName.substring(0,4);
        const coursecode = parseInt(courseName.substring(4));
        var details = '';
        var timejson;
        for (var i = 0; i < myObj[domain].length; i++) {
            console.log(i);
            if (myObj[domain][i]["code"] == coursecode) {
                for (var j = 0; j < myObj[domain][i]["section"].length; j++) {
                    const toUnix = new Date(myObj[domain][i]["section"][j]["number"] + "', value: '" + myObj[domain][i]["section"][j]["time"]).getTime() - (3600 * 3);
                    const dateObj = new Date(toUnix * 1000);
                    
                    details = details + "{name: 'Section ' + " + dateObj.toLocaleString('en-CA', { timeZone: 'UTC' }) + "'},"
                }
                details = details.substring(0, details.length - 1);
                timejson = JSON.parse(details);
                break;
            }
        }

        const examEmbed = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor('#7aff81')
          .setTitle(`Exam information for ` + courseName)
          .setDescription('Fall 2021/2022')
          .addFields(timejson)
          .setFooter("Exam info for " + courseName + " requested by " + message.author.username, message.author.displayAvatarURL())
        
        message.channel.send(examEmbed);
    }
}