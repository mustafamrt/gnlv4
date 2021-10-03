const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const egehanss = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle("**Narcos Code**")
.setThumbnail("https://images-ext-2.discordapp.net/external/H4ghLST5Ie7ZKqa46zXEdtKhYYQIzgbBK9VZVzL4rxI/%3Fsize%3D128/https/cdn.discordapp.com/icons/760590308869406751/a_60ea9ac408410df4ad3f10bd567d29cb.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/ZBmqym9JhG)** **•** **[YouTube](https://www.youtube.com/channel/UClixJk7ZT1YGMcnD0fV_Gaw)** **•** **[Web-Site](https://www.narcoscode.tk)**`)
.addField('**• Komutlar**','> !kullanıcı | Kullanıcı Komutları\n> !kullanıcı2 | Kullanıcı komutları 2\n> !moderasyon | Moderasyon komutları\n> !moderasyon2 | Moderasyon komutları 2\n> !aboneyardım | Abone komutları\n> !eğlence | Eğlence komutları\n> !eğlence2 | Eğlence komutları 2\n> !logo | Logo komutları\n> !botlist | Botlist komutları\n> !yticket | Ticket komutları\n> !yseviye | Seviye komutları\n> !sunucu-tema | Sunucu Kur ve Tema komutları\n> !extra | Extra komutlar \n> !yprofil | Profil komutları')
.setFooter('Egehanss Code')
return message.channel.send(egehanss)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['y'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '!yardım'
};