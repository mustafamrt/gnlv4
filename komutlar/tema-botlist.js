const Discord = require('discord.js');
const data = require('wio.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.botlist`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.botlist`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden gönderdim __Bot List sunucunu__ gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Bot List__ sunucusu kurmak için tema geldi.

> Güle güle kullan 😇

https://discord.new/`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['t-botlist'],
  permLevel: 0
}

exports.help = {
  name: 'botlist-tema'
};