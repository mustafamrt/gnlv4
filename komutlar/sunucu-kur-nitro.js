const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: '🌟' }, reason: 'ayn' }).then(s => s.setColor('#000000'))
message.guild.roles.create({ data: { name: '⭐' }, reason: 'ayn' }).then(s => s.setColor('#000000'))

message.guild.roles.create({ data: { name: 'Owner' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR', 'BAN_MEMBERS']);
role.setColor('#ffffff');
});
message.guild.roles.create({ data: { name: 'Moderator' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});

message.guild.roles.create({ data: { name: 'Staff' }, reason: 'ayn' }).then(role => {
  role.setPermissions(['MANAGE_NICKNAMES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS','VİEW_AUDIT_LOG']);
  role.setColor('#9bffae');
  });
  message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'Sponsor' } , reason: 'ayn'}).then(s => s.setColor('#0097af'))
message.guild.roles.create({ data: { name: 'Supporter' } , reason: 'ayn'}).then(s => s.setColor('#ff4000'))
message.guild.roles.create({ data: { name: 'King Inviter' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: 'Nitro Guard' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: 'Nitro God 🚀' }, reason: 'ayn' }).then(s => s.setColor('#050505'))
message.guild.roles.create({ data: { name: 'Inviter III' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: 'Inviter II' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: 'Inviter I' }, reason: 'ayn' }).then(s => s.setColor('#992c2c'))
message.guild.roles.create({ data: { name: 'Muted' }, reason: 'ayn' }).then(s => s.setColor('#b40808'))

message.guild.channels.create('🚀゜', {type: 'category'}).then(scd => {
message.guild.channels.create('🚀', {type: 'voice'}).then(a => a.setParent(scd.id) && a.setUserLimit(5));
});


message.guild.channels.create('🍃', {type: 'category'}).then(bilgilendirme => {
message.guild.channels.create('🔔゜announcement', {type: 'text'}).then(c => c.setParent(bilgilendirme.id));
message.guild.channels.create('💎゜invite-check', {type: 'text'}).then(c => c.setParent(bilgilendirme.id));
message.guild.channels.create('🎁゜event', {type: 'text'}).then(c => c.setParent(bilgilendirme.id));
message.guild.channels.create('🔪゜read-me', {type: 'text'}).then(c => c.setParent(bilgilendirme.id));
message.guild.channels.create('🚀゜drop', {type: 'text'}).then(c => c.setParent(bilgilendirme.id));
});

message.guild.channels.create('🍂', {type: 'category'}).then(chat => {
message.guild.channels.create('🎁゜rewards', {type: 'text'}).then(c => c.setParent(chat.id));
message.guild.channels.create('💸゜proof', {type: 'text'}).then(c => c.setParent(chat.id));
});

message.guild.channels.create('yetkili özel', {type: 'category'}).then(yönetici => {
message.guild.channels.create('güvenlik', {type: 'text'}).then(c => c.setParent(yönetici.id));
message.guild.channels.create('yetkili-özel', {type: 'text'}).then(c => c.setParent(yönetici.id));
message.guild.channels.create('yetkili-özel', {type: 'text'}).then(c => c.setParent(yönetici.id));
});
  
message.guild.channels.create('Sunucu Log', {type: 'category'}).then(log => {
message.guild.channels.create('Sunucu Log', {type: 'text'}).then(c => c.setParent(log.id));

});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sk-nitro'],
  permLevel: 0
}

exports.help = {
  name: 'nitro-sunucu-kur'
};