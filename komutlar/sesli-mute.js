const Discord = require('discord.js');
const db = require('wio.db')

exports.run = async (client, message, args) => {
  
 if(!message.member.hasPermission('ADMINISTRATOR') ) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')

  let member = message.mentions.members.first();

  if(args[0] === 'sustur') {
  if (!member) return message.channel.send("Bir Kullanıcı Belirt")  
  member.voice.setMute(true);  
message.channel.send("Kullanıcı Başarıyla Seslide Susturuldu")
}

  if(args[0] === 'aç') {
  if (!member) return message.channel.send("Bir Kullanıcı Belirt")  
  member.voice.setMute(false);  
message.channel.send("Kullanıcın Sesli Susuturması Başarıyla Kaldırıldı")
}
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['seslimute'],
  permLevel: 0
}
exports.help = {
  name: 'sesli-mute',
  description: "",
  usage: ''
};