module.exports = {
    name: 'ohayo',
    description: 'This command sends a random gif',
    execute(message, args) {

        const randomInt = Math.floor(Math.random() * 10);

        if(randomInt == 0){
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/4d34072ba510830234ddf6b855238837/tenor.gif?itemid=13911439.gif'
                    }
                }
            });
        }
        else if (randomInt == 1) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/57f2cbff8a6ecce7e1c88f95b0d4383b/tenor.gif?itemid=3561088.gif'
                    }
                }
            });
        }
        else if (randomInt == 2) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/2017a39584794803d0b8deb957973ec1/tenor.gif?itemid=8666347.gif"
                    }
                }
            });
        }        
        else if (randomInt == 3) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/247120989971a3cdbb69f0b44d43702e/tenor.gif?itemid=9435751.gif"
                    }
                }
            });
        }
        else if (randomInt == 4) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ea9df861113fecec5bb17bf1faa0124e/tenor.gif?itemid=3950966.gif"
                    }
                }
            });
        }
        else if (randomInt == 5) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/748b74e67742c6a75f63b18145939a19/tenor.gif?itemid=5859657.gif"
                    }
                }
            });
        }
        else if (randomInt == 6) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/4024a12e035e6b1ecb309521540c94e8/tenor.gif?itemid=9374870.gif"
                    }
                }
            });
        }
        else if (randomInt == 7) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/253698629703cd6caeaa409c9f72ee5b/tenor.gif?itemid=12818286.gif"
                    }
                }
            });
        }
        else if (randomInt == 8) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/f642e623a1b013cde443bb485969d49a/tenor.gif?itemid=14749897.gif"
                    }
                }
            });
        }
        else if (randomInt == 9) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/7c618cd7157e94bc4d5761eff7ddff7c/tenor.gif?itemid=15319463.gif"
                    }
                }
            });
        }

    }
}