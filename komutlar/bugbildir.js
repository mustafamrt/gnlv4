const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
  let kanalid = message.channel.id;
let channel = bot.channels.get("736209990871941277")//bug repot kanal id
let embed = new Discord.SendEmbed()
.setTitle("Bug Reported")
.addField("Bug", bug)
.addField("Reported by", user, true)
.addField("Server", guild, true)
.addField("Server ID", guildid, true)
.addField("Channel", kanal, true)
.addField("Channel ID", kanalid, true)
.setColor("#27167A")
  const embed2 = new Discord.SendEmbed()
    .setColor("#27167A")
    .setDescription(
      `${message.author.username}, Your report was sent to the developers, ation will be took!`)
    message.channel.send(embed2)
channel.send(embed).then(message => {
  message.react('❌')
  message.react('✔')
  });
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hatabildir', 'bugreport', 'bug-bildir', 'hata', 'bug'],
  permLevel: 0  
};
exports.help = {
  name: 'bug-bildir',
  description: 'Botla ilgili hataları bildirirsiniz.',
  usage: 'bug-bildir'
}