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
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-NSFW](https://discord.gg/qzHTkhjQgT) → NSFW gifler.
> -Woman → Kadın gif xd
> -Man → erkek gif xd
> -Baby → bebek gif xd
> -gifara → gif ararsınız
> [-hayvan](https://discord.gg/qzHTkhjQgT) → Hayvan gifleri.
> [-kemalsunal](https://discord.gg/qzHTkhjQgT) → **Kemal Sunal** gifleri.

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
    name: 'gifyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};