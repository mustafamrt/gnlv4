const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args, db) => {
   await fetch(
    `https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10`
  )
    .then(res => res.json())
    .then(json => {
      let cikti = json.result;
      var efe = "";
      const embed = new Discord.MessageEmbed()
        .setAuthor("Türkiyedeki Son 10 Deprem")
        .setColor("#728bd6")
        .setThumbnail(
          "https://upload.wikimedia.org/wikipedia/tr/0/0f/Kandilli_Rasathanesi_ve_Deprem_Ara%C5%9Ft%C4%B1rma_Enstit%C3%BCs%C3%BC_logosu.jpg"
        )
        .setFooter(
          `Komut ${message.author.tag} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        );
      for (const ayn of cikti) {
        embed.addField(
          `${ayn.lokasyon}`,
          ` **Zaman:** ${ayn.date} **Büyüklük:** ${ayn.mag} - **Derinlik:** ${ayn.depth}km \n`
        );
      }

      message.channel.send(embed);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["depremler", "deprem-bilgi"],
  permLevel: 0,
  kategori: "bilgi"
};

exports.help = {
  name: "deprembilgi",
  description: "Gün içerisinde olan son 10 depremleri gösterir.",
  usage: "deprembilgi"
};