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
.setTitle("**  » Narcos Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]( )**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**

> [-gel](https://discord.gg/ZBmqym9JhG) → Etiketlenen kişiyi yanınıza çekersiniz.
> [-git](https://discord.gg/ZBmqym9JhG) → Etiketlenen kişiynin yanına gidersiniz.
> [-deprem-bilgi](https://discord.gg/ZBmqym9JhG) → Son 10 depremi listeler.
> [-öneri](https://discord.gg/ZBmqym9JhG) → Öneri gönderirsiniz.
> [-elyazısı](https://discord.gg/ZBmqym9JhG) → Mesajınızı el yazısına çevirir.
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
    name: 'kullanıcı2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};