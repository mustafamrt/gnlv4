const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle('Sosyal medyalar')
  .setDescription("**Takip et =**[__ Mustafa_bey2717__](https://www.instagram.com/mustafa_bey2717/?hl=tr) \n ** Takip et = **[__esmer1780__](https://www.instagram.com/_esmer1780/?hl=tr)")
 .addField('``Code by Manyak*#9999``')  
message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'medya',
  description: '',
  usage: ''
};