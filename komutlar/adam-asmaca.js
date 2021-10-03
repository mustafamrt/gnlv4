const { stripIndents } = require('common-tags');
let oyndurum = new Set();

module.exports.run = async (bot, message, args) => {

  let kelime= [
  "elma",
  "armut",
  "lüks",
  "eşya",
  "sunucu",
  "koruma",
  "eşek",
  "anlamak",
  "siber",
  "kral",
  "eskici",
  "yılbaşı",
  "köpek",
  "salata",
  "biber",
  "camii",
  "maymun",
  "aslan",
  "ali",
  "bali",
   "kuş",
   "salatalık",
   "kahveci",   
   "çocuk",
   "bilgisayar",
   "kalem",
   "oyun",
    "sandık",
    "defter",
    "kitap",   
  "duman",
  "balta",
  "dizi",
  "film",
  "buluş",
  "ayrılmak",
  "şemsiye",
  "telefon",
   "discord",
   "okul",
   "sınav",   
     "hece",
   "harf",
   "dil",
   "soru",
    "oyuncak",
    "zeytin",
    "fare",  
    "egehanss",
            
] 
 
        if (oyndurum.has(message.channel.id)) return message.reply('Kanal başına sadece bir adam asmaca oyunu meydana gelebilir.');

        try {
            const cevap = kelime[Math.floor(Math.random() * kelime.length)].toLowerCase();
            let point = 0;
            let displayText = null;
            let tahmin = false;
            const confirmation = [];
            const yanlış = [];
            const display = new Array(cevap.length).fill('_');
            while (cevap.length !== confirmation.length && point < 6) {
                await message.channel.send(stripIndents`
                    ${displayText === null ? '**Adam Asmaca**!' : displayText ? '**Çok iyisin!**' : '**Yanlış Harf!**'}
                         **Kelime:**    \`${display.join(' ')}\`
                    **Yanlış Harfler:** ${yanlış.join(', ') || 'Yok'}
                     \`\`\`
                    _________
                    |    |
                    |    ${point > 0 ? '' : ''}
                    |   ${point > 2 ? '┌' : ' '}${point > 1 ? '()' : ''}${point > 3 ? '┐' : ''}
                    |    ${point > 4 ? '/' : ''} ${point > 5 ? '\\' : ''}
                    |
                    \`\`\`
                `);
                const filter = res => {
                    const choice = res.content.toLowerCase();
                    return res.author.id === message.author.id && !confirmation.includes(choice) && !yanlış.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 15000
                });
                if (!guess.size) {
                    await message.channel.send('Zamanın doldu!');
                    break;
                }
                const choice = guess.first().content.toLowerCase();
                if (choice === 'end') break;
                if (choice.length > 1 && choice === cevap) {
                    tahmin = true;
                    break;
                } else if (cevap.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < cevap.length; i++) {
                        if (cevap.charAt(i) !== choice) continue;
                        confirmation.push(cevap.charAt(i));
                        display[i] = cevap.charAt(i);
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) yanlış.push(choice);
                    point++;
                }
            }
            oyndurum.delete(message.channel.id);
            if (cevap.length === confirmation.length || tahmin) return message.channel.send(`**Tebrikler kelimeyi buldun! **${cevap}!`);
            return message.channel.send(`Maalesef bilemedin kelime bu: **${cevap}**`);
        } catch (err) {
            oyndurum.delete(message.channel.id);
            return message.reply(`Olamaz! Bir Hata Verdi: \`${err.message}\``);
        }
    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['adam-asmaca'],
  permlevel: 0
};

exports.help = {
  name: 'adamasmaca',
  description: 'Adam asmaca oynarsınız.',
  usage: 'adamasmaca'
};