const Discord = require('discord.js');

const CrewSoygun = [
  "52 ABD Doları Soydun",
  "31 ABD Doları Soydun",
  "tüühh be polis geldi gaç!",
  "6 BAD Doları  Soydun",
  "436 ABD Doları  Soydun",
  "643 ABD Doları  Soydun",
  "531 ABD Doları Soydun!",
  "213 ABD Doları Soydun",
  "2.234 ABD Doları Soydun",
  "3.456 ABD Doları Soydun",
  "2.765 ABD Doları Soydun",
  "9.324 ABD Doları Soydun",
  "24.768 ABD Doları Soydun",
  "31.234 ABD Doları Soydun",
  "234.876 ABD Doları Soydun",
  "453.345 ABD Doları Soydun",
  "654.865 ABD Doları Soydun",
  "734.763 ABD Doları Soydun",
  "931.573 ABD Doları Soydun",
  "311.645 ABD Doları Soydun",
  "Büyük vurgun yaptın toplam 1.000.0000 ABD Doları wwOOOOww",
];

exports.run = function(client, message) {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const soygun = CrewSoygun[Math.floor(Math.random() * CrewSoygun.length)];
  message.channel.send(
  
  "**Soygunun yapılacağı mekan seciliyor..**"
  
  ).then(
  function(i){
    i.edit("**mekan bulundu.**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.MessageEmbed()
      .setTitle('**Soygunu yaptın ve şimdi harcama zamanı** :D')
    .setDescription('')
      .addField('**Bankadan soyduğun para miktarı :**',soygun)
    .setColor('RED')
    
    
    )
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['soyuncu','soygun-yap'],
  permLevel: 0 
};

exports.help = {
  name: 'soygunyap',

  description: 'Soygun Yaparsınız',
    kategori: 'eğlence',
  usage: 'soygunyap' 
}