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

        var examEmbed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#7aff81')
        .setTitle(`Exam information for ` + courseName)
        .setDescription('Fall 2021/2022')
        .setFooter("Exam info for " + courseName + " requested by " + message.author.username, message.author.displayAvatarURL())
      
        for (var i = 0; i < examjson[domain].length; i++) {
            if (examjson[domain][i]["code"] == coursecode) {
                for (var j = 0; j < examjson[domain][i]["section"].length; j++) {
                    const toUnix = new Date(examjson[domain][i]["section"][j]["time"]).getTime();
                    const dateObj = new Date(toUnix);
                    examEmbed.addFields({name: 'Section ' + examjson[domain][i]["section"][j]["number"], value: dateObj.toLocaleString('en-CA', { timeZone: 'UTC' })});
                    // examEmbed.setFooter(toUnix);
                }
                break;
            } 
        }


        message.channel.send(examEmbed);
    }
}