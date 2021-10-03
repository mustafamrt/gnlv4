const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const koduğum = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "  amına koduğum")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780020422271041536/amnakodugum.gif`)
    return message.channel.send(koduğum);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'amınakoduğum',
  description: 'Amınakoduğum Gifi atar',
  usage: 'amınakoduğum'
};
