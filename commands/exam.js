const Discord = require('discord.js');
const examjson = require('../jsons/fall2021-2022.json')
module.exports = {
    name: 'exam',
    description: 'This command sends info about the exam of a certain course',
    execute(message, args) {
        let courseName = args.join(' ');
        courseName = courseName.toUpperCase();
        const domain = courseName.substring(0,4);
        const coursecode = courseName.substring(4);

        for (var section in examjson[domain].code[coursecode]) {
            message.channel.send(section["number"]);
        }

        // examjson[domain].code[coursecode]

        // const examEmbed = new Discord.MessageEmbed()
        //   .setTimestamp()
        //   .setColor('#7aff81')
        //   .setTitle(`Exam information for ` + courseName)
        //   .setDescription('Fall 2021/2022')
        //   .addFields(

        //       { name: 'Section ' + examjson.[domain]., value: ''},
        //   )
        //   .setFooter("Exam info for " + courseName + " requested by " + message.author.username, message.author.displayAvatarURL())
        
    }
}