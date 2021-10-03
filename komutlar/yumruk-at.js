const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://media1.giphy.com/media/26AHxQqwx7ZN0fcje/giphy.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send('🚫 Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Yumruk Atıldı!`)
        .setColor("#FF69B4")
        .setFooter(`Cowboy`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yumruk"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'yumruk-at',
    description: 'Etiketlediniz Kisiye Yumruk Atar.',
    usage: 'yumruk-at'
   }