 const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const fs = require('fs');
const db = require("wio.db")
exports.run = async (bot , message, args) => {

  let reason = args.slice(0).join(' ') 
  if(!reason) return message.reply("Sebeb Belirt.")
      setTimeout(function(){

  db.set(`afk_${message.author.id}, ${message.guild.id}`, reason)
  
  db.set(`afk-zaman_${message.author.id}, ${message.guild.id}`, Date.now())
      },500)
const dcs = new Discord.MessageEmbed()
.setTitle("<a:basarili:749532011483627541> Başarılı!")
.setDescription("Başarıyla Afk Oldun!")
.addField("Afk Nedeni;",`${reason}`)
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL())
.setTimestamp()
.setFooter(message.guild.name, message.guild.iconURL())
  message.channel.send(dcs)
  if(!message.member.nickname) return message.member.setNickname("[AFK] " + message.member.user.username)
  message.member.setNickname("[AFK] " + message.member.nickname).catch(err => console.log(err));
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'Afk Olursunuz.',
  usage: '<prefix>afk'
};