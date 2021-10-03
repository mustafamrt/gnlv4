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
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-sa-as](https://discord.gg/qzHTkhjQgT) →  Sa-As sistemini aktif eder.
> [-sunucubilgi](https://discord.gg/qzHTkhjQgT) →  Sunucu hakkında bilgi verir
> [-üyedurum](https://discord.gg/qzHTkhjQgT) →  Sunucu üyeleri hakkında bilgi verir
> [-çekiliş](https://discord.gg/qzHTkhjQgT) → Çekiliş yaparsınız.
> [-otorol](https://discord.gg/qzHTkhjQgT) → Otorol Ayarlarsınız.
> [-sayaç](https://discord.gg/qzHTkhjQgT) → Sayaç Ayarlarsınız.
> [-snipe](https://discord.gg/qzHTkhjQgT) → Snipe Atarsınız.
> [-sesli-mute](https://discord.gg/qzHTkhjQgT) → Sustur/Aç.
> [-sunucukur](https://discord.gg/qzHTkhjQgT) → Sunucu Kurarsınız.
> [-kilitle](https://discord.gg/qzHTkhjQgT) → Kanalı kitlersiniz.
> [-öneri-ayarla](https://discord.gg/qzHTkhjQgT) → Öneri kanalını ayarlarsınız.
> [-kayıt](https://discord.gg/qzHTkhjQgT) → Kayıt edersiniz.
> [-kayıtrol](https://discord.gg/qzHTkhjQgT) → Kayıt rolünü ayarlarsınız.
> [-rol-koruma](https://discord.gg/qzHTkhjQgT) → Rol koruma sistemini ayarlarsınız.
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
    name: 'moderasyon2', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};