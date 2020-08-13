module.exports = {
    name: 'oof',
    description: 'This command sends a random gif',
    execute(message, args) {

        const randomInt = Math.floor(Math.random() * 10);

        if(randomInt == 0){
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/9a7a22da61792860b363cf2b8feab269/tenor.gif?itemid=14031953.gif'
                    }
                }
            });
        }
        else if (randomInt == 1) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/bb38a490697b508f7ff423ad7dcb545a/tenor.gif?itemid=15532766.gif'
                    }
                }
            });
        }
        else if (randomInt == 2) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/432261184122de5c0142153dbeac3387/tenor.gif?itemid=13602646.gif"
                    }
                }
            });
        }        
        else if (randomInt == 3) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ef068d82ff5aca9ccf20757b0eee895a/tenor.gif?itemid=13512312.gif"
                    }
                }
            });
        }
        else if (randomInt == 4) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ebae311bd403ff06760f542ea8ba3edd/tenor.gif?itemid=17513670.gif"
                    }
                }
            });
        }
        else if (randomInt == 5) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/2177938bf50998d2356965de54318952/tenor.gif?itemid=17571191.gif"
                    }
                }
            });
        }
        else if (randomInt == 6) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/886a79f2abed7e2d68e88ac44a2dfdba/tenor.gif?itemid=15230929.gif"
                    }
                }
            });
        }
        else if (randomInt == 7) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ea380a3a8e119935fdc9d52a77bc037b/tenor.gif?itemid=12694673.gif"
                    }
                }
            });
        }
        else if (randomInt == 8) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/66cf8ea326db942e2a5a882640676c1c/tenor.gif?itemid=9171940.gif"
                    }
                }
            });
        }
        else if (randomInt == 9) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/5d39ca808eeb8c305de813bd100d9d5e/tenor.gif?itemid=13223109.gif"
                    }
                }
            });
        }

    }
}