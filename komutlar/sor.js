const Discord = require('discord.js');
const prefix = require("../ayarlar.json")

const cevaplar = [                  'Bu kesin.',
                                    'Kesinlikle öyle.',
                                    'Kuşkusuz.',
                                    'Evet, Kesinlikle.',
                  '                  Birşey merak ettim, bundan sanane?',
                         'Buna güvenebilirsin.',
                                    'Gördüğüm kadarıyla, Evet.',
                                    'Büyük olasılıkla.',
                                    'Görünüşe göre, iyi.',
                                    'çok ilginç bi soru düşünmem lazım dostum...',
                                    'İşaretler eveti gösteriyor.',
                                    'Anlayamadım, tekrar edin.',
                                    'Daha sonra sor.',
                                    'Şimdi söylemesen iyi olur.',
                                    'Tahmin edemiyorum...',
                                    'Konsantre ol ve tekrar sor.',
                                    'Buna güvenme.',
                                    'Cevabım, hayır.',
                                    'Kaynaklarım hayır diyor.',
                                    'Görünüşe göre, bu iyi değil.',
                                    'Çok şüpheli.',
                                    'Şüpheli.',
                                    'Büyük olasılıkla, hayır.',
                                    'İçgüdüm, hayır diyor.',
                                    'Kararsız kaldım, bidaha sormaya ne dersin?'               
];
                             

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply("Bana bir soru sormalısın! **Örnek**: .sor <soru>")
    else message.channel.send(cevap)

}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["8ball","acaba"],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'güncel sor',
  usage: 'sor <soru>'
};