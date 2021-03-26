const { MessageEmbed } = require('discord.js')
const inventory = require('../inventory/ServerConfig.json')
const conf = require('../../ayarlar.json')
exports.run = async(client, message, args) => {
let fembed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(inventory.Renk.kirmizi);   
let tembed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor(inventory.Renk.yesil);
if(!message.member.roles.cache.get(inventory.st) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(fembed.setDescription(`Bu komutu kullanmak için <@&${inventory.Staff.Yetkili}> rolüne ihtiyacın var.`)).then(x => x.delete({ timeout: 6500 }));
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(fembed.setDescription(`Bir kullanıcı belirtmelisin.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === message.author.id) return message.channel.send(fembed.setDescription(`Kendin için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === message.guild.OwnerID) return message.channel.send(fembed.setDescription(`Sunucu sahibi için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.id === client.user.id) return message.channel.send(fembed.setDescription(`Bot için bu komutu kullanamazsın.`)).then(x => x.delete({ timeout: 6500 }));
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(fembed.setDescription(`Belirtilen kullanıcı sizden üst/aynı pozisyonda.`)).then(x => x.delete({ timeout: 6500 }));
let page = 1
const secim = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setDescription(`Özel Üye Listesinden Seçim Yapın
\`☕\` <@&${inventory.Roller.BirKahveDaha}> 
\`💲\` <@&${inventory.Roller.Destekçi}> 
\`🎉\` <@&${inventory.Roller.Hayırsever}> 
\`🧛\` <@&${inventory.Roller.Dracula}> 
\`😂\` <@&${inventory.Roller.KahkahaŞelalesi}> 
\`🎉\` <@&${inventory.Roller.BenÇokŞanslıyım}> 
\`🌐\` <@&${inventory.Roller.Technopat}>
\`👴\` <@&${inventory.Roller.Emektar}>
\`🌏\` <@&${inventory.Roller.YıllıkDost}>
\`👨🏻‍🦳\` <@&${inventory.Roller.OldiesButGoldies}> 
\`🚬\` <@&${inventory.Roller.Sadness}> 
\`🕵️\` <@&${inventory.Roller.AreYouSerious}> 
\`👨‍🎨\` <@&${inventory.Roller.LeonardoDaVinci}> 
\`💤\` <@&${inventory.Roller.UyanArtıkCimcime}> 
\`⏰\` <@&${inventory.Roller.AlarmımıKurdum}> 
\`🔊\` <@&${inventory.Roller.AloSesimGeliyorMu}>
\`😡\` <@&${inventory.Roller.YavaşLanGaçTaneAlıyon}>
\`💼\` <@&${inventory.Roller.ToplantıKatıldı}>
\`🕵️\` <@&${inventory.Roller.Staff}>

Eğer yanlış bir rol verirseniz lütfen \`${conf.prefix}özel-üye-al\` komutunu kullanın.`)
.setColor(inventory.Renk.mor)
.setThumbnail(member.user.avatarURL({dynamic:true}))
message.channel.send(secim).then(async mesaj =>{
await mesaj.react('☕') 
await mesaj.react('💲') 
await mesaj.react('🎉') 
await mesaj.react('🧛') 
await mesaj.react('😂') 
await mesaj.react('🎉') 
await mesaj.react('🌐') 
await mesaj.react('🌏') 
await mesaj.react('🎨')
await mesaj.react('👨🏻‍🦳') 
await mesaj.react('🚬') 
await mesaj.react('🕵️') 
await mesaj.react('👨‍🎨') 
await mesaj.react('💤') 
await mesaj.react('⏰') 
await mesaj.react('🔊') 
await mesaj.react('😡') 
await mesaj.react('💼') 
await mesaj.react('🕵️') 
const seviye1emoji = (reaction, user) => reaction.emoji.name === '☕' && user.id === message.author.id;
const seviye2emoji = (reaction, user) => reaction.emoji.name === '💲' && user.id === message.author.id;
const seviye3emoji = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id;
const seviye4emoji = (reaction, user) => reaction.emoji.name === '🧛' && user.id === message.author.id;
const seviye5emoji = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
const seviye6emoji = (reaction, user) => reaction.emoji.name === '🎉' && user.id === message.author.id;
const seviye7emoji = (reaction, user) => reaction.emoji.name === '🌐' && user.id === message.author.id;
const seviye8emoji = (reaction, user) => reaction.emoji.name === '🌏' && user.id === message.author.id;
const seviye9emoji = (reaction, user) => reaction.emoji.name === '🎨' && user.id === message.author.id;
const seviye10emoji = (reaction, user) => reaction.emoji.name === '👨🏻‍🦳' && user.id === message.author.id;
const seviye11emoji = (reaction, user) => reaction.emoji.name === '🚬' && user.id === message.author.id;
const seviye12emoji = (reaction, user) => reaction.emoji.name === '🕵️' && user.id === message.author.id;
const seviye13emoji = (reaction, user) => reaction.emoji.name === '👨‍🎨' && user.id === message.author.id;
const seviye14emoji = (reaction, user) => reaction.emoji.name === '💤' && user.id === message.author.id;
const seviye15emoji = (reaction, user) => reaction.emoji.name === '⏰' && user.id === message.author.id;
const seviye16emoji = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
const seviye17emoji = (reaction, user) => reaction.emoji.name === '😡' && user.id === message.author.id;
const seviye18emoji = (reaction, user) => reaction.emoji.name === '💼' && user.id === message.author.id;
const seviye19emoji = (reaction, user) => reaction.emoji.name === '🕵️' && user.id === message.author.id;
const seviye1 = mesaj.createReactionCollector(seviye1emoji, { time: 30000 });
const seviye2 = mesaj.createReactionCollector(seviye2emoji, { time: 30000 });
const seviye3 = mesaj.createReactionCollector(seviye3emoji, { time: 30000 });
const seviye4 = mesaj.createReactionCollector(seviye4emoji, { time: 30000 });
const seviye5 = mesaj.createReactionCollector(seviye5emoji, { time: 30000 });
const seviye6 = mesaj.createReactionCollector(seviye6emoji, { time: 30000 });
const seviye7 = mesaj.createReactionCollector(seviye7emoji, { time: 30000 });
const seviye8 = mesaj.createReactionCollector(seviye8emoji, { time: 30000 });
const seviye9 = mesaj.createReactionCollector(seviye9emoji, { time: 30000 });
const seviye10 = mesaj.createReactionCollector(seviye10emoji, { time: 30000 });
const seviye11 = mesaj.createReactionCollector(seviye11emoji, { time: 30000 });
const seviye12 = mesaj.createReactionCollector(seviye12emoji, { time: 30000 });
const seviye13 = mesaj.createReactionCollector(seviye13emoji, { time: 30000 });
const seviye14 = mesaj.createReactionCollector(seviye14emoji, { time: 30000 });
const seviye15 = mesaj.createReactionCollector(seviye15emoji, { time: 30000 });
const seviye16 = mesaj.createReactionCollector(seviye16emoji, { time: 30000 });
const seviye17 = mesaj.createReactionCollector(seviye17emoji, { time: 30000 });
const seviye18 = mesaj.createReactionCollector(seviye18emoji, { time: 30000 });
const seviye19 = mesaj.createReactionCollector(seviye19emoji, { time: 30000 });
seviye1.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.BirKahveDaha)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.BirKahveDaha}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.BirKahveDaha)
const seviye1verildi = new MessageEmbed()
.setAuthor(`Al Sana Bir kahve daha?`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.BirKahveDaha}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye1verildi)})

seviye2.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Destekçi)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Destekçi}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Destekçi)
const seviye2verildi = new MessageEmbed()
.setAuthor(`Al Sana Destekçi !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Destekçi}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye2verildi)})

seviye3.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Hayırsever)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Hayırsever}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Hayırsever)
const seviye3verildi = new MessageEmbed()
.setAuthor(`Al Sana Hayırsever !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Hayırsever}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye3verildi)})

seviye4.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Dracula)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Dracula}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Dracula)
const seviye4verildi = new MessageEmbed()
.setAuthor(`Al Sana Dracula !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Dracula}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye4verildi)})

seviye5.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.KahkahaŞelalesi)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.KahkahaŞelalesi}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.KahkahaŞelalesi)
const seviye5verildi = new MessageEmbed()
.setAuthor(`Al Sana Kahkaha Şelalesi !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.KahkahaŞelalesi}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye5verildi)})

seviye6.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.BenÇokŞanslıyım)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.BenÇokŞanslıyım}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.BenÇokŞanslıyım)
const seviye6verildi = new MessageEmbed()
.setAuthor(`Al Sana Ben Çok Şanslıyım !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.BenÇokŞanslıyım}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye6verildi)})

seviye7.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Technopat)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Technopat}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Technopat)
const seviye7verildi = new MessageEmbed()
.setAuthor(`Al Sana Technopat !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Technopat}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye7verildi)})

seviye8.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Emektar)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Emektar}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Emektar)
const seviye8verildi = new MessageEmbed()
.setAuthor(`Al Sana Emektar !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Emektar}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye8verildi)})

seviye9.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.YıllıkDost)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.YıllıkDost}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.YıllıkDost)
const seviye9verildi = new MessageEmbed()
.setAuthor(`Al Sana Yıllık Dos !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.YıllıkDost}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye9verildi)})

seviye10.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.OldiesButGoldies)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.OldiesButGoldies}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.OldiesButGoldies)
const seviye10verildi = new MessageEmbed()
.setAuthor(`Al Sana Oldies But Goldies !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.OldiesButGoldies}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye10verildi)})

seviye11.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Sadness)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Sadness}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Sadness)
const seviye11verildi = new MessageEmbed()
.setAuthor(`Al Sana Sadness !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Sadness}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye11verildi)})

seviye12.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.AreYouSerious)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.AreYouSerious}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.AreYouSerious)
const seviye12verildi = new MessageEmbed()
.setAuthor(`Al Sana Are You Serious !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.AreYouSerious}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye12verildi)})

seviye13.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.LeonardoDaVinci)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.LeonardoDaVinci}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.LeonardoDaVinci)
const seviye13verildi = new MessageEmbed()
.setAuthor(`Al Sana Leonardo Da Vinci !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.LeonardoDaVinci}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye13verildi)})

seviye14.on('collect', async striga => {
 mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.UyanArtıkCimcime)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.UyanArtıkCimcime}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.UyanArtıkCimcime)
const seviye14verildi = new MessageEmbed()
.setAuthor(`Al Sana Uyan Artık Cimcime !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.UyanArtıkCimcime}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye14verildi)})

seviye15.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.AlarmımıKurdum)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.AlarmımıKurdum}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.AlarmımıKurdum)
const seviye15verildi = new MessageEmbed()
.setAuthor(`Al Sana Alarmımı Kurdum !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.AlarmımıKurdum}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye15verildi)})

seviye16.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.AloSesimGeliyorMu)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.AloSesimGeliyorMu}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.AloSesimGeliyorMu)
const seviye16verildi = new MessageEmbed()
.setAuthor(`Al Sana Alo Sesim Geliyor Mu !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.AloSesimGeliyorMu}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye16verildi)})


seviye17.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.YavaşLanGaçTaneAlıyon)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.YavaşLanGaçTaneAlıyon}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.YavaşLanGaçTaneAlıyon)
const seviye17verildi = new MessageEmbed()
.setAuthor(`Al Sana Yavaş Lan Gac Tane Alıyon !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.YavaşLanGaçTaneAlıyon}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye17verildi)})

seviye18.on('collect', async striga => {
mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.ToplantıKatıldı)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.ToplantıKatıldı}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.ToplantıKatıldı)
const seviye18verildi = new MessageEmbed()
.setAuthor(`Al Sana Toplantı Katıldı !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.ToplantıKatıldı}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye18verildi)})

seviye19.on('collect', async striga => {
 mesaj.reactions.removeAll()
if(member.roles.cache.get(inventory.Roller.Staff)) return mesaj.edit(fembed.setDescription(`Kullanıcı zaten <@&${inventory.Roller.Staff}> rolüne sahip.`)).then(x => x.delete({ timeout: 6500 }));
member.roles.add(inventory.Roller.Staff)
const seviye19verildi = new MessageEmbed()
.setAuthor(`Al Sana Staff !`)
.setDescription(`${member} kullanıcısına ${message.author} tarafından <@&${inventory.Roller.Staff}> rolü verildi.`)
.setColor('RANDOM')
mesaj.edit(seviye19verildi)})

})}
exports.conf = {aliases: ['özel', 'özel-rol-ver', 'özel-üye']}
exports.help = {name: "özel-üye-liste"};
   