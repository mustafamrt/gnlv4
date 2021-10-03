const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("wio.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bu Komutu Kullanabilmek İçin "\`Üyeleri Yönet\`" Yetkisine Sahip Olmalısın.`));

  message.react("✅");
 let rol= db.fetch(`kayıt_${message.guild.id}`)
  const kisi =
    message.mentions.members.first() ||
    message.guild.members.cache.find(a => a.id == args[0]) ||
    message.guild.members.cache.find(a => a.user.username == args[0]);
  let username = args.slice(1).join(" ");
       const hataembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Kayıt rolü bulunamadı, ayarlamak için **b!kayıtrol <rol>**')
            const hata = new Discord.MessageEmbed()
    .setColor("RED")
    .setTimestamp()
    .addField('HATA:', 'Lütfen kayıt etmem için bir kişi etiketleyin.')
  if (!rol) return message.reply(hataembed)
  if (!kisi) return message.reply(hata)
  let de
    if (username) {
    message.guild.members.cache.get(kisi.id).setNickname(`${username}`);
  };
  if (!username) de = "Hayır";
  if (username) de = "Evet";
  
    kisi.roles.add(rol)
      const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', '**Kayıt**')
    .addField('Kullanıcı:', `${kisi} (${kisi.id})`)
    .addField('Yetkili:', `${message.author} (${message.author.id})`)
    .addField('Kullanıcı Adı Değiştirildi Mi?', de)
  if (username) embed.addField('Yeni Kullanıcı Adı:', kisi.username);
    message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtet','kayıt-et'],
  permLevel: 2
};

exports.help = {
  name: 'kayıt',
  description: '',
  usage: 'kayıt'
};