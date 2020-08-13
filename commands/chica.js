module.exports = {
    name: 'chica',
    description: 'This command sends a random gif',
    execute(message, args) {

        const randomInt = Math.floor(Math.random() * 10);

        if(randomInt == 0){
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/1ed6c7083111f7b4221fefc1d211503d/tenor.gif?itemid=13630948.gif'
                    }
                }
            });
        }
        else if (randomInt == 1) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif?itemid=12535134.gif'
                    }
                }
            });
        }
        else if (randomInt == 2) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/3264bcc47ee47ebbdd441f9f1d203542/tenor.gif?itemid=12498539.gif"
                    }
                }
            });
        }        
        else if (randomInt == 3) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/b1189e353db0bed3521885bec284264b/tenor.gif?itemid=11453877.gif"
                    }
                }
            });
        }
        else if (randomInt == 4) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/1ee8cdbcf1df3320695e7b4220c3d014/tenor.gif?itemid=18058702.gif"
                    }
                }
            });
        }
        else if (randomInt == 5) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/1dc3fcce5f6b3c57276e7f29d871bd46/tenor.gif?itemid=9246757.gif"
                    }
                }
            });
        }
        else if (randomInt == 6) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/4679919e2bf5f59169f1f168638dd324/tenor.gif?itemid=5553426.gif"
                    }
                }
            });
        }
        else if (randomInt == 7) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/f51131bf1c5e617b12856bdd47a03eae/tenor.gif?itemid=11455736.gif"
                    }
                }
            });
        }
        else if (randomInt == 8) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/ac6230dad613bf19fea0f8809a98ed6e/tenor.gif?itemid=8794347.gif"
                    }
                }
            });
        }
        else if (randomInt == 9) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/71865fbf51a1c90a74ea1f95342000e8/tenor.gif?itemid=12496012.gif"
                    }
                }
            });
        }

    }
}