const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const nrc = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » narcps Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-kedi](https://discord.gg/ZBmqym9JhG) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-köpek](https://discord.gg/ZBmqym9JhG) → Sosyal medyalarım. 
> [-tavşan](https://discord.gg/ZBmqym9JhG) → Botta ne kadar komut oldunu gösterir.
> [-inek](https://discord.gg/ZBmqym9JhG) → Botun Pingine Bakarsın. 
> [-maymun](https://discord.gg/ZBmqym9JhG) → Bot hakkında bilgi gösterir


**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(nrc)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'hayvan', 
    description: 'hayvan gif Listesini Gösterir!',
    usage: '+hayvan'
};