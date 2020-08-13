module.exports = {
    name: 'uwu',
    description: 'This command sends a random gif',
    execute(message, args) {

        const randomInt = Math.floor(Math.random() * 10);

        if(randomInt == 0){
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/6231bc1c62f1898a24b9f15dc4ec555a/tenor.gif?itemid=15090789.gif'
                    }
                }
            });
        }
        else if (randomInt == 1) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/c73ceb08db2db08f1711e2ed5a55fc2a/tenor.gif?itemid=14444240.gif'
                    }
                }
            });
        }
        else if (randomInt == 2) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/b9ee278c57ad53283535860de5f48b4a/tenor.gif?itemid=16391139.gif'
                    }
                }
            });
        }        
        else if (randomInt == 3) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/0043e845ea243c0b420b255c24fce45c/tenor.gif?itemid=14811290.gif"
                    }
                }
            });
        }
        else if (randomInt == 4) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/203ee66b44de45f6119a9984de37b4e1/tenor.gif?itemid=12887287.gif"
                    }
                }
            });
        }
        else if (randomInt == 5) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/2969533eb9c0d9e8dbef18e8b747ca8f/tenor.gif?itemid=11907326.gif"
                    }
                }   
            });
        }
        else if (randomInt == 6) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/49da5c8edffda477b30df3f6174c0eee/tenor.gif?itemid=16996405.gif"
                    }
                }
            });
        }
        else if (randomInt == 7) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ba1d6114e653d7bd4fa6d1b8e0ac08d1/tenor.gif?itemid=13566033.gif"
                    }
                }
            });
        }
        else if (randomInt == 8) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/4996506492d54b2424b5763936511ba7/tenor.gif?itemid=14133882.gif"
                    }
                }
            });
        }
        else if (randomInt == 9) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/c05a4c88320d01df93c049368d2c4c5a/tenor.gif?itemid=13798021.gif"
                    }
                }
            });
        }

    }
}