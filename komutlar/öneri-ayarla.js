
const Discord = require('discord.js');
const db = require('wio.db')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:uzgunn1: Üzgünüm bu komudu kullanmak için `Kanalları Yönet` yetkisine sahip olman gerek.**");
let reason = args.slice(1).join(' ')
 
var kanal = message.mentions.channels.first() 


if (args[0] == "sıfırla") {
  db.delete(`önerikanal_${message.guild.id}`)
  return message.channel.send(":kopke: **Önerilerin gönderileceği kanal sıfırlandı.**")
} else if (!kanal) {
  return message.channel.send(":loading: **Lütfen bir kanal etiketleyiniz.**")
} else {
  db.set(`önerikanal_${message.guild.id}`, kanal.id)
  return message.channel.send(`:beyaztik: **Önerilerin gönderileceği başarıyla ${kanal} olarak ayarlandı.** \n :developer: \`\`Sıfırlamak için !!öneri-ayarla sıfırla\`\` `)
}

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["istek-ayarla","öneri-kanal"],
 permLevel: 4
}
exports.help = {
 name: 'öneri-ayarla',
 description: 'ö',
 usage: 'ö'
};
