const Discord = require('discord.js')
const db = require('wio.db')
const ayarlar = require('../egehanss-narcos.js')
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu kullanabilmek için **yönetici** yetkisine sahip olmalısın.")
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()

      
  if(args[0] !== "ayarla" && args[0] !== "sıfırla") return message.channel.send("Yanlış Kullanım Lütfen **ayarla** veya **sıfırla** yaz.")
    if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`**Ayarlanmayan şeyi sıfırlayamazsın.**`)
return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`**Sayaç başarıyla sıfırlandı.**`)
    return
  }
  
  if(args[0] === "ayarla") {
  if(isNaN(args[1])) {
    message.channel.send(`**Bir sayı yazmalısın.**`)
    return
  }
  
  if(!sayackanal) {
   await message.channel.send(`**Sayaç kanalını etiketlemelisin.**`)
  return
  }
  
  

  

 
        if(args[1] <= message.guild.memberCount) {
                message.channel.send(`**Sunucudaki kullanıcı sayısından** (${message.guild.memberCount}) **daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[1])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`**Sayaç** \`${args[1]}\`, **sayaç kanalı** ${sayackanal} **olarak ayarlandı.**`)
}
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 0
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}