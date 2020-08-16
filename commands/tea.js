module.exports = {
    name: 'tea',
    description: 'This command sends a random gif',
    execute(message, args) {

        const randomInt = Math.floor(Math.random() * 10);

        if(randomInt == 0){
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/6b8740fcdddf6aa5f4fb0808ec6d6eea/tenor.gif?itemid=14843686.gif'
                    }
                }
            });
        }
        else if (randomInt == 1) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': 'https://media1.tenor.com/images/d5d6fb978659f8ec3ef6f02be69259c9/tenor.gif?itemid=13293519.gif'
                    }
                }
            });
        }
        else if (randomInt == 2) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/d5d6fb978659f8ec3ef6f02be69259c9/tenor.gif?itemid=13293519.gif"
                    }
                }
            });
        }        
        else if (randomInt == 3) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/f34a98e96f567fc128506a9a0d2e8318/tenor.gif?itemid=15474224.gif"
                    }
                }
            });
        }
        else if (randomInt == 4) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/878e3de6bb4f613371009b04d5acf3be/tenor.gif?itemid=16356460.gif"
                    }
                }
            });
        }
        else if (randomInt == 5) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/e168da5098d538ea606d06c6c9355243/tenor.gif?itemid=14830903.gif"
                    }
                }
            });
        }
        else if (randomInt == 6) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/0ca57952561ff3d06c8d7e0088c7513b/tenor.gif?itemid=4214652.gif"
                    }
                }
            });
        }
        else if (randomInt == 7) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/3d85f227f53deeb369c8f546d0bb0c80/tenor.gif?itemid=15696417.gif"
                    }
                }
            });
        }
        else if (randomInt == 8) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/8653790f44d422a3f9793ebca681e31e/tenor.gif?itemid=18094784.gif"
                    }
                }
            });
        }
        else if (randomInt == 9) {
            message.channel.send({
                "embed": {
                    'color': '#7aff81',
                    'image': {
                        'url': "https://media1.tenor.com/images/dd7f3d5fdf51932f9f033cccab0ebabe/tenor.gif?itemid=14057304.gif"
                    }
                }
            });
        }

    }
}