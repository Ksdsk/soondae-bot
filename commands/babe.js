var { jStat } = require('jstat');

module.exports = {
    name: 'babe',
    description: 'This command measures a random babe',
    execute(message, args){

        let babeMeter = jStat.beta(2, 2).sample() * 103;
        babeMeter = Math.floor(babeMeter);

        if (babeMeter <= 25) {
            
            message.channel.send({
                "embed": {
                    'color': '#000000',
                    'title': "Terrible." ,
                    'description': message.author.username + ", you are " + String(babeMeter) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 50) {
            message.channel.send({
                "embed": {
                    'color': '#fffc4a',
                    'title': "Not good enough.",
                    'description': message.author.username + ", you are " + String(babeMeter) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 75) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'title': "Decent!",
                    'description': message.author.username + ", you are " + String(babeMeter) + "% babe!"
                }
            });
        }
        else if (babeMeter <= 100) {
            message.channel.send({
                "embed": {
                    'color': '#e97dff',
                    'title': "Stunning!",
                    'description': message.author.username + ", you are " + String(babeMeter) + "% babe!"
                }
            });
        }
        else if (babeMeter == 101) {
            message.channel.send({
                "embed": {
                    'color': '#fca903',
                    'title': "SPECTACULAR!",
                    'description': message.author.username + ", you are " + String(babeMeter) + "% babe!"
                }
            });
        } else if (babeMeter == 102) {
            message.channel.send({
                "embed": {
                    'color': '#fca903',
                    'title': "🦆",
                    'description': message.author.username + ", you are " + "🦆🦆🦆🦆🦆🦆🦆🦆" + "% babe!"
                }
            });
        }
        
    }
}