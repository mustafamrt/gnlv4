const discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (args.length < 1) {
    return message.reply('doğru kullanım +ters <yazı>')
  }
  await message.channel.send(args.join(' ').split('').reverse().join(''));
};

exports.conf = {
  aliases: [ 'ters' ],
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'tersyaz',
  description: 'Gönderdiğiniz mesajın ters çevrilmiş halini yazar.',
  category: 'Kullanıcı',
  usage: 'tersyaz <yazı>',
}; 