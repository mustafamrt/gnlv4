const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Egehanss Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=645226005144797184&permissions=2146958847&scope=bot)** **•** **[Web-Site](https://www.narcoscode.com/)**
Bir komut hakkında detaylı __yardım için__: **-yardım**`)

.addField('**• Komutlar**')
.addField('> -ilginçbilgi ',' → İlginç bilgiler işte kanka')
.addField('> -intihar-et','→ İntihar edersiniz')
.addField('> -kahve','→ Kahve içersiniz ab')
.addField('> -renkara','→ Renk ararsınız')
.addField('> -yazıtura','→ Yazı Tura')
.addField('> -slot','→ Slot oynarsınız.')
.addField('> -piyango','→ Piyango Çekilişine katılırsınız.')
.addField('> -sos','→ SoS Oynarsınız.')

return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};