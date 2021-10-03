const Discord = require("discord.js");


exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  

let member = args[0]
let guild = message.guild;
let nrcCode = '776784024558895114'

if(!member) return message.channel.send("Banlanan kişinin ID sini girmelisin!")





guild.members.unban(member)

const nrc = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Bağışlanan kullanıcı`,`<@${member}>`)
.addField(`Bağışlayan yetkili`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
client.channels.cache.get(nrcCode).send(nrc)


};
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};
exports.help = {
  name: 'unban', 
  description: 'Kullanıcıya Ban Atar',
  usage: '-ban ' 
};