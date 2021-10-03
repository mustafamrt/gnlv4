const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000) //komutu alıp asıl botunuza atabilirsiniz
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/attachments/779099271441809420/780001661166813204/gif_lencor.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **+yardım**

**• Komutlar**
> [-sex](https://discord.gg/qzHTkhjQgT) → sex gifi atar.
> [-twork](https://discord.gg/qzHTkhjQgT) → twork gifi atar.
> [-daşşak](https://discord.gg/qzHTkhjQgT) → Gif atar.
> [-amınakoduğum](https://discord.gg/qzHTkhjQgT) → *Gif atar.
> [-şakşak](https://discord.gg/qzHTkhjQgT) → Gif atar.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['nfsw','nsfw','NFSW'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'NSFW', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-NSFW'
};