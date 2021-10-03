const Discord = require("discord.js");


exports.run = async (client, message, args) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const Crewistatistikler = new Discord.MessageEmbed()
  .addField(`:desktop: **İstatistikler**`,)
  .addField(`:traffic_light: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:technologist: » Yapımcım :registered: ` ,`<@754730560009797723>`,true)
  .addField(`:globe_with_meridians: » Node.js`, `${process.version}`, true)
 .addField(`:open_file_folder: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`:boy: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true) 
.addField(`:signal_strength: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField('<a:books:742698007262396426> Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
.addField(`<a:books:742698007262396426> Kütüphanesi;`, `Discord.js`, true)
.addField(`<a:books:742698007262396426> Discord.js sürümü:`, Discord.version)
.addField('Versiyon ', '**V2**')  
 .addField('En son güncelleme ', '**4.12.2020**')
.addField(' Botun Yapılmaya Başlandığı Tarih ', '**15.10.2020**')
.addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/XTsKVQSgpG) **|** [YouTube](https://www.youtube.com/channel/UCFWkgTpLpQAsvaEi-YwpPig)`, true)
  message.channel.send(Crewistatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik','BotBilgi','botbilgi','bot-bilgi','Bot-Bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: '',
  usage: ''
}; 