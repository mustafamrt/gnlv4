const Discord = require("discord.js");
const db = require("wio.db");
 
exports.run = async (client, message, args) => {
  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send("**Lütfen İsmini yaz.**");
  message.channel.send(":white_check_mark: | **İsmin Başarıyla ``" + isim + "`` olarak ayarlandı!**");
  db.set(`pisim_${message.author.id}`, isim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "isimayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};