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
.setTitle("**  » Narcos Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=645226005144797184&permissions=2146958847&scope=bot)** **•** **[Web-Site](https://www.narcoscode.com/)**
Bir komut hakkında detaylı __yardım için__: **-yardım**


**• Komutlar**
> [-rol-ver](https://discord.gg/ZBmqym9JhG) → Etiketlediniz kullanıcıya rol verir.
> [-rol-al](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kişden rol alır.
> [-anket](https://discord.gg/ZBmqym9JhG) → Anket yaparsınız.
> [-rololuştur](https://discord.gg/ZBmqym9JhG) → Rol oluşturur.
> [-id](https://discord.gg/ZBmqym9JhG) → İstediğin bi kişinin ID sini alır.
> [-kanal-id](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kanalın ID sini atar.
> [-davet-oluştur](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kanalın ID sini atar.
> [-oy-kick](https://discord.gg/ZBmqym9JhG) → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla](https://discord.gg/ZBmqym9JhG) → Matamatik işlemi yapar.
> [-davet-sıralaması](https://discord.gg/ZBmqym9JhG) → Sunucuda yapılan davetleri sıralar
> [-iltifat](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kişiye bot iltifat eder.
> [-nick](https://discord.gg/ZBmqym9JhG) → Etiketlediğin kişinin ismini değiştirir.
> [-tekerleme](https://discord.gg/ZBmqym9JhG) → Tekerleme yazar.
> [-ilgincbilgi](https://discord.gg/ZBmqym9JhG) → İlginç bilgi yazar.
> [-desteaç](https://discord.gg/ZBmqym9JhG) → Zula deste açar.
> [-soygunyap](https://discord.gg/ZBmqym9JhG) → Vurgun yapmaya hazırmısın? :D


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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};