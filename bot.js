const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'site') {
    	message.channel.send('https://retro-rp.com');
  	}
});

client.on('message', message => {
    if (message.content === 'credits') {
    	message.reply('Trisha');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
