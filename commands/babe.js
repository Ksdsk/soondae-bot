var { jStat } = require('jstat');

module.exports = {
    name: 'babe',
    description: 'This command measures a random babe',
    execute(message, args){

        const babeMeter = Math.floor(jStat.beta.sample(2,2)*101);
        const extraRandom = Math.floor(Math.random() * 26);
        if (babeMeter <= 25) {
            message.channel.send({
                "embed": {
                    'color': '#000000',
                    'title': "Terrible." ,
                    'description': message.author.username + ", you are " + String(extraRandom) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 50) {
            message.channel.send({
                "embed": {
                    'color': '#fffc4a',
                    'title': "Not good enough.",
                    'description': message.author.username + ", you are " + String(extraRandom+25) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 75) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'title': "Decent!",
                    'description': message.author.username + ", you are " + String(extraRandom+50) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 101) {
            message.channel.send({
                "embed": {
                    'color': '#e97dff',
                    'title': "Stunning!",
                    'description': message.author.username + ", you are " + String(extraRandom+75) + "% babe!"
                }
            });
        }
        
    }
}