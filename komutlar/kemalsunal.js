const Discord = require ("discord.js");

exports.run = (client, message) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
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
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( )**
Bir komut hakkında detaylı __yardım için__: **+yardım**

**• Komutlar**
> [-ks](https://discord.gg/ZBmqym9JhG) → Kemal sunan gif.
> [-yumruk-at](https://discord.gg/ZBmqym9JhG) → yumruk atar.
> [-busana](https://discord.gg/ZBmqym9JhG) → busana  gifi atar.
> [-hayırdır](https://discord.gg/ZBmqym9JhG) → hayırdır inşallah gifi atar.
> [-halinebak](https://discord.gg/ZBmqym9JhG) → halinebak gifi atar.
> [-kapakolsun](https://discord.gg/ZBmqym9JhG) → Kapak olsun gifi atar.

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
    aliases: ['kemal-sunal','Kemal-Sunal',''], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kemalsunal', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kemalsunal'
};