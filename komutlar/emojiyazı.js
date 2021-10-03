const Discord = require('discord.js');

const nrc = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': '*️⃣'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    nrc[c] = nrc[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


exports.run = function(client, message, args) {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }

    if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım**: -emojiyazı <mesaj>')
        
    message.channel.send(args.join(' ').split('').map(c => nrc[c] || c).join(' '));

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'emojiyazı', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyazı <mesaj>'
};