const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Ban yetkili rolü ayarlanmamış veya <@&' + rol + '> Rolüne sahip değilsin.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(' ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(' ``Kendini Banlayamazsın``')
     if(user.id === client.user.id) return message.channel.send(' ``Botu Banlayamazsın``')
  if(user.id === message.guild.ownerID) return message.channel.send(' ``Sunucu sahibini Banlayamazsın Zaten Yetkim Yetmez :)``')
    if (!message.guild.member(user).bannable) return message.reply(' ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle Banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Biri Ban Yedi')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan Kişi', user)
    .addField('Sebep', sebep)
    client.channel.send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama İşlemi İptal Edildi')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}