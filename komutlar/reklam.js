const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`-reklam aç\` | Kapatmak İstiyorsanız \`-reklam kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`-reklam aç\` | Kapatmak İstiyorsanız \`-reklam kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(` \`Reklam Filtresi başarıyla ayarlandı.\` `)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(` \`Reklam filtresini açtığına emin misin?.\` `)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(` \`Reklam Filtresini Kapattım.\` `)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['link','reklam'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: '-kanal'
};