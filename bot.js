const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'dayz', host: '212.22.93.93', port: '2345'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
const activities_list = [
    { type: 'PLAYING',  message: 'a game'  },
    { type: 'WATCHING', message: 'a video' },
    { type: 'LISTENING', message: 'a music' }
];

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
	    
bot.login(process.env.BOT_TOKEN)
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});
