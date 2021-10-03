const Discord = require('discord.js');
const data = require('wio.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.yttw`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__6__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 6000}));
data.set(`${message.author.id}.zaman.yttw`, Date.now()+ms('6h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} **Özelden gönderdim __Youtube/Twitch sunucunu__ gönderdim bakar mısın.**`));
message.author.send(`> **1 adet __Youtube/Twitch__ sunucu kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/XEwqET45MVNH`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['t-yt-twitch'],
  permLevel: 0
}

exports.help = {
  name: 'youtube-twitch-tema'
};