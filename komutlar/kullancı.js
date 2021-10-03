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
> [-ilet](https://discord.gg/ZBmqym9JhG) → Yapımcıma yazdığınız yazıyı iletir!.**Boş yere kullanmayın!!!**
> [-aşk-ölç](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kişinin aşkını ölcer <3 .
> [-kullanıcı-bilgi](https://discord.gg/ZBmqym9JhG) → Etiketlediniz kullanıcın bilgilerini gösterir.
> [-medya](https://discord.gg/ZBmqym9JhG) → Sosyal medyalarım. 
> [-toplamkomut](https://discord.gg/ZBmqym9JhG) → Botta ne kadar komut oldunu gösterir.
> [-aile](https://discord.gg/ZBmqym9JhG) → Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?
> [-say](https://discord.gg/ZBmqym9JhG) → Sunucu hakkında detaylı bilgi verir.
> [-avatar](https://discord.gg/ZBmqym9JhG) → Etiketlediğin birisinin avatarını gösterir.
> [-yetkilerim](https://discord.gg/ZBmqym9JhG) → Hangi yetkilere sahip olduğunuzu gösterir.
> [-profil](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kişini profilini görürsünüz.
> [-sunucuresmi](https://discord.gg/ZBmqym9JhG) → Sunucu resmini gösterir.
> [-ping](https://discord.gg/ZBmqym9JhG) → Botun Pingine Bakarsın. 
> [-kurallar](https://discord.gg/ZBmqym9JhG) → Genel kuralları gösterir.
> [-davet](https://discord.gg/ZBmqym9JhG) → beni sunucuna ekle.
> [-botbilgi](https://discord.gg/ZBmqym9JhG) → Bot hakkında bilgi gösterir
> [-bug-bildir](https://discord.gg/ZBmqym9JhG) → Yazdığınız bug'u yapımcılarıma bildirir.
> [-istek-kod](https://discord.gg/ZBmqym9JhG) → Yazdığınız istek kodu yapımcılarıma bildirir.
> [-instagram](https://discord.gg/ZBmqym9JhG) → Yazdığınız intagram kullanıcsı hakkında bilgi verir.

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
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-kullanıcı'
};