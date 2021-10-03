const Discord = require("discord.js");
const db = require("wio.db");
 
exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
  if (user.bot) return message.channel.send("Botların profili olmaz!");
 
  let isim = await db.fetch(`pisim_${user.id}`);
  let isimYazi;
  if (isim == null) isimYazi = " İsim ayarlanmamış!";
  else isimYazi = `:diamond_shape_with_a_dot_inside: ${isim}`;
 
  let soyisim = await db.fetch(`psoyisim_${user.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = " Soy İsim ayarlanmamış!";
  else soyisimYazi = `:diamond_shape_with_a_dot_inside: ${soyisim}`;
 
  let cinsiyet = await db.fetch(`pcinsiyet_${user.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = " Cinsiyet ayarlanmamış!";
  if (cinsiyet == "kız") csYazi = ":woman: Kız";
  if (cinsiyet == "erkek") csYazi = ":man: Erkek";
  if (cinsiyet == "yok") csYazi = " Belirtmek istemiyor.";
 
  let yas = await db.fetch(`pyas_${user.id}`);
  let yasYazi;
  if (yas == null) yasYazi = " Yaş ayarlanmamış!";
  else yasYazi = ` ${yas}`;
 
  let bayrak = await db.fetch(`pbayrak_${user.id}`);
  let bYazi;
  if (bayrak == null) bYazi = ` Bayrak Girilmemiş.`;
  else bYazi = `:flag_white: ${bayrak}`;
 
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${user.username} Adlı Kullanıcının Profili`)
    .setThumbnail(user.avatarURL())
    .setColor("RANDOM")
    .addField("İsim", isimYazi, true)
    .addField("Soy isim", soyisimYazi, true)
    .addField("Yaş", yasYazi, true)
    .addField("Cinsiyet", csYazi, true)
    .addField("Bayrak!", bYazi, true);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "profilim",
  description: "",
  usage: "",
  kategori: "Profil"
};