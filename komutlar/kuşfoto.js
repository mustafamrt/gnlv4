const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Loading').then(message => {
      var espriler = ['https://cdn.pixabay.com/photo/2017/10/13/08/47/budgie-2847089_960_720.png','https://cf.kizlarsoruyor.com/a70261/fdf35d5e-6acf-488e-abbb-19cd710c1406.jpg','http://3.bp.blogspot.com/-3TC-gxJMCoQ/ToA0TTRK1DI/AAAAAAAABCQ/94GeYFe3MMw/s200/wellensittich400.jpg','http://2.bp.blogspot.com/-lj2QU_jnLcA/ToA1VhNYIdI/AAAAAAAABCU/A77_aoCHxCA/s200/Picture+8.png','http://1.bp.blogspot.com/-S86kU598nyE/ToAz-zzw8_I/AAAAAAAABCM/tz4DcTnOQ8o/s200/100_1243.jpg','https://muhabbetkusu.webnode.com.tr/_files/system_preview_detail_200000740-014090329b-public/Muhabbet-Ku%C5%9Funu-resimleri-2.png','https://muhabbetkusu.webnode.com.tr/_files/system_preview_detail_200000741-d1698d25d8-public/muhabbetkusuresimleri.jpg','https://muhabbetkusu.webnode.com.tr/_files/system_preview_detail_200000742-3daf73fa04-public/p5xb7.jpg','**Error 404** ERROR !'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bird', 'randombird', 'birdphoto', 'birds','kuş'],
  permLevel: 0
};

exports.help = {
  name: 'kuşfoto',
  description: 'Espri yapar.',
  usage: 'kuşfoto'
};