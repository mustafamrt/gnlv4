const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

const {stripIndents} = require('common-tags');
this.playing = new Set();
const yes = ['yes', 'y', 'ye', 'yeah', 'yup', 'yea', 'ya','có','evet','yep','istiyorum','oynuyalım','evett'];
const no = ['no', 'n', 'nah', 'nope', 'nop','không','hayır','istemiyorum','oynamıycam','hayırr'];

exports.run = async(client, message, args) => { 
  let mention = message.mentions.users.first();
	if(!mention) return message.channel.send('Kullanıcı Etiketlemelisin');
	if(mention.id === message.author.id) return message.channel.send('Kendine karşı oynayamazsın!');
	if(this.playing.has(message.channel.id)) return message.channel.send('Oyun şu anda bu odada kullanılıyor!');
	this.playing.add(message.channel.id);
	try {
		await message.channel.send(`${mention}, Sos oynama davetini kabul ediyor musunuz? hayır mı? (Yanıt vermek için 30 saniyeniz var)
Karar vermek için evet veya hayır yazın.
`);
		const verification = await verify(message.channel, mention);
		if (!verification) {
				this.playing.delete(message.channel.id);
				return message.channel.send(`${mention.username} davetiniz reddedildi...`);
		}
		const sides = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		const taken = [];
		let userTurn = true;
		let winner = null;
		while (!winner && taken.length < 9) {
				const user = userTurn ? message.author : mention;
				const sign = userTurn ? '?' : '??';
				await message.channel.send(stripIndents`
					${user}, Hangi tarafı seçersin?
					\`\`\`
					${sides[0]} | ${sides[1]} | ${sides[2]}
					—————————
					${sides[3]} | ${sides[4]} | ${sides[5]}
					—————————
          ${sides[6]} | ${sides[7]} | ${sides[8]}
					\`\`\`
				`);
				const filter = res => {
					const choice = res.content;
					return res.author.id === user.id && sides.includes(choice) && !taken.includes(choice);
				};
				const turn = await message.channel.awaitMessages(filter, {
					max: 1,
					time: 30000
				});
				if (!turn.size) {
					await message.channel.send('Zamanın Doldu');
					userTurn = !userTurn;
					continue;
				}
				const choice = turn.first().content;
				sides[Number.parseInt(choice, 10)] = sign;
				taken.push(choice);
				if (verifyWin(sides)) winner = userTurn ? message.author : mention;
				userTurn = !userTurn;
			} 
			this.playing.delete(message.channel.id);
			return message.channel.send(winner ? `Tebrikler ${winner} kazandı!` : `${winner} Kazandı tebrikler :)`);
	} catch(e) {
		this.playing.delete(message.channel.id);
		console.log(e);
	}
}
function verifyWin(sides){
		return (sides[0] === sides[1] && sides[0] === sides[2])
			|| (sides[0] === sides[3] && sides[0] === sides[6])
			|| (sides[3] === sides[4] && sides[3] === sides[5])
			|| (sides[1] === sides[4] && sides[1] === sides[7])
			|| (sides[6] === sides[7] && sides[6] === sides[8])
			|| (sides[2] === sides[5] && sides[2] === sides[8])
			|| (sides[0] === sides[4] && sides[0] === sides[8])
			|| (sides[2] === sides[4] && sides[2] === sides[6]);
}
async function verify(channel, user, time = 30000) {
		const filter = res => {
			const value = res.content.toLowerCase();
			return res.author.id === user.id && (yes.includes(value) || no.includes(value));
		};
		const verify = await channel.awaitMessages(filter, {
			max: 1,
			time
		});
		if (!verify.size) return 0;
		const choice = verify.first().content.toLowerCase();
		if (yes.includes(choice)) return true;
		if (no.includes(choice)) return false;
		return false;
 }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["xox","sos"],
  permLevel: 0
};

exports.help = {
  name: 'sos',
  description: 'sos Komutudur',
  usage: 'sos <kullanıcı>'
};