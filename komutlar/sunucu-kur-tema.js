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
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-sk-normal](https://discord.gg/ZBmqym9JhG) →  Normal sunucu kurar.
> [-sk-nitro](https://discord.gg/ZBmqym9JhG) →  Nitro sunucusu kurar.
> [-t-public](https://discord.gg/ZBmqym9JhG) →  Public teması gönderir.
> [-t-botlist](https://discord.gg/ZBmqym9JhG) →  Botlist teması gönderir.
> [-t-j4j](https://discord.gg/ZBmqym9JhG) →  J4J teması gönderir.
> [-t-mta](https://discord.gg/ZBmqym9JhG) →  MTA teması gönderir.
> [-t-yt-twitch](https://discord.gg/ZBmqym9JhG) →  YouTube/Twitch teması gönderir.
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
    name: 'sunucu-tema', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-sunucu-tema'
};