const discord = require("discord.js")

exports.run = function(client, message, args){

var box = [
"Götür küpü, dök küpü. Getir küpü dök küpü",
"GüI dibi, büIbüI diIi gibi",
"Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
"FaIcı, faIcının faIına, fasa fiso dedi.",
"O pikap, şu pikap, bu pikap.",
"Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
"Keşkekçinin keşkekIenmiş keşkek kepçesi.",
"Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
"ÇataIcada topaI çoban çataI yapıp çataI satar, nesi için çataIcada topaI çoban çataI yapıp çataI satar?",
"Dört deryanın deresini dört dergâhın derbendine devrederIerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
"Sen seni biI, sen seni, biI sen seni, biI sen seni, sen seni biImezsen patIatırIar enseni."
]
const nrc = box[Math.floor(Math.random() * box.length)];
 
message.channel.send(
new discord.MessageEmbed()
.setTitle("Tekerleme")
.setDescription(nrc)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'tekerleme',
  category: 'eğlence',
  description: 'Rastgele bir tekerleme atar',
  usage: 'tekerleme' 
}