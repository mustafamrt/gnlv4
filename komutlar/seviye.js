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
.setTitle("**  » Egehanss Code  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-!yardım**


**• Komutlar**
> [!seviye-ayarlar](https://discord.gg/ZBmqym9JhG) →  Seviye Ayarları!
> [!seviye](https://discord.gg/ZBmqym9JhG) →  Seviyeni Gösterir!
> [!seviye-top](https://discord.gg/ZBmqym9JhG) →  İlk 5!
> [!seviye-xp](https://discord.gg/ZBmqym9JhG) → Mesaj başına gelen xp miktarını ayarlarsınız!
> [!seviye-sınır](https://discord.gg/ZBmqym9JhG) →  Max Seviyeyi ayarlarsınız!
> [!seviye-sıfırla](https://discord.gg/ZBmqym9JhG) →  Seviye ayarlarını sıfırlarsınız!
> [!seviye-log](https://discord.gg/ZBmqym9JhG) →  Seviye logunu ayarlarsınız!
> [!seviye-rol](https://discord.gg/ZBmqym9JhG) →  Seviye rollerini ayarlarsınız!
`)
 
 

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
    name: 'yseviye', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-botlist'
};