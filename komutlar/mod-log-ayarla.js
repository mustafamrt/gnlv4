const Discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`));
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`narcosmodlog{message.guild.id}`)
if (args[0] === "sıfırla" || args[0] === "kapat") {
if(!logkanal) return message.channel.send(new Discord.MessageEmbed()                                          
  .addField("Hata",`Mod-Log Ayarlı Değil`)
  .setColor("RED")
  .setFooter("Narcos Code"));
db.delete(`narcosmodlog_${message.guild.id}`)
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Mod-Log Başarılı Bir Şekilde Sıfırlandı`)
  .setColor("RED")
  .setFooter("Narcos Code"));
return
}
if (!logk) return message.channel.send(new Discord.MessageEmbed()
  .addField("Hata",`Mod-Log Kanalı Belirt`)
  .setColor("RED")
  .setFooter("Narcos Code"));
db.set(`narcosmodlog_${message.guild.id}`, logk.id)
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Mod-Log Kanalı ${logk} Olarak Ayarlandı`)
  .setColor("RED")
  .setFooter('Narcos Code'));
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 
};

exports.help = {
    name: 'mod-log',
    description: 'Moderasyon Loglarınızı Kayıt Eder',
    usage: 'mod-log'
};