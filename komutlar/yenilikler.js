const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (message.channel.type !== 'dm') {
    const yenilikler = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Bota Yapılan Yenilikler:`)
    .addField(`1-Yetkilerim kısmı yenilendi! \n`,`2-rol ver \n`)
    .addField(`3-extra yardım  \n`, `4-anket  \n`)
    .addField(`4- rol oluştur \n`, `5-sunucu bilgi yenilendi! \n`)
    message.channel.send(yenilikler) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni',],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota Yapılan Yenilikleri Gösterir.',
  usage: 'yenilikler'
};