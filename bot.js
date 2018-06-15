const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'credits') {
    	message.channel.send('Trisha');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.BOT_TOKEN);
