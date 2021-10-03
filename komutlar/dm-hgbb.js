const Discord = require('discord.js');
const db = require('wio.db');
 
exports.run = async(client, message, args) => {
  if (!args[0]) return message.channel.send(`Lütfen bir seçenek belirt! (aç/kapat)`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için **MESAJLARI YÖNET** yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`dmhgbb_${message.guild.id}`, 'aktif')
    message.channel.send(`Dm hoşgeldin görüşürüz mesajı açıldı!`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`dmhgbb_${message.guild.id}`, 'deaktif')
    message.channel.send(`dm hoşgeldin görüşürüz mesajı kapatıldı!`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'dm-hgbb'
};