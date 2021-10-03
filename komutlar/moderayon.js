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
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-mute](https://discord.gg/qzHTkhjQgT) →  Etiketlediğin kişiye mute atar!
> [-unmute](https://discord.gg/qzHTkhjQgT) →  Etiketlediğin kişinin mutesini açar!
> [-muterol](https://discord.gg/qzHTkhjQgT) →  Muteli Rolünü Ayarlarsınız!
> [-muterololuştur](https://discord.gg/qzHTkhjQgT) →  Muteli rolünü ayarlarsınız!
> [-kayıt-bilgi](https://discord.gg/qzHTkhjQgT) →  Kayıt için bilgi.
> [-taç](https://discord.gg/qzHTkhjQgT) → Sunucunun sahibini gösterir.
> [-sil](https://discord.gg/qzHTkhjQgT) → Yazdığınız miktarda mesajı siler.
> [-ban](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [-kick](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [-duyuru](https://discord.gg/qzHTkhjQgT) → Bot yazdıgının mesajı duyuru yapar.
> [-küfür](https://discord.gg/qzHTkhjQgT) → Küfür engel sistemini açarsınız.
> [-reklam](https://discord.gg/qzHTkhjQgT) → Reklam engel sistemi açarsınız.
> [-slowmode](https://discord.gg/qzHTkhjQgT) → Yavaş modu ayarlarsınız. 
> [-forceban](https://discord.gg/qzHTkhjQgT) →  ID ile ban atar!
> [-unban](https://discord.gg/qzHTkhjQgT) → Birisinin banını açarsınız.

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
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};