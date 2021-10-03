const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("wio.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`));
  message.react("✅");
  let kayıt = db.fetch(`kayıt_${message.guild.id}`)
    if(args[0] === "sıfırla") {
    if(!kayıt) {
           const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Ayarlanmayan Şeyi Sıfırlayamazsın.')
      message.channel.send(hataembed)
      return
    }
    
    
    db.delete(`kayıt_${message.guild.id}`)
               const ok = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kayıt Rolü Başarıyla Sıfırlandı.')
    message.channel.send(ok)
    return
  }
  let kayıtrol = message.mentions.roles.first()
        const error = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Kayıt Rolü Ayarlamam İçin Bir Rol Yaz')
  if (!kayıtrol) return message.channel.send(error);
    db.set(`kayıt_${message.guild.id}`, kayıtrol.id)
            const ok = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', `Kayıt Rolü Başarıyla ${kayıtrol} Olarak Ayarlandı`)
    message.channel.send(ok)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kayıtrol',
  description: '',
  usage: 'kayıtrol'
};