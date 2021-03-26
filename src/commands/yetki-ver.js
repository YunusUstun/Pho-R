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
.setAuthor(`Bir Kullanıcının Yetkisi Belirleniyor.`)
.setDescription(`Yetki Listesinden Hangi Rolü **Vericekseniz** Seçim Yapın

__**Üst Yetkiler:**__
\`9.\` <@&${inventory.yetkilirolleri.YönetimLider}> 
\`8.\` <@&${inventory.yetkilirolleri.AdminLider}> 
\`7.\` <@&${inventory.yetkilirolleri.ModLider}> 
**Üst Yetki Rolleri:** <@&${inventory.yetkilirolleri.BanRole}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.KickRole}> <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}>

__**Orta Yetkiler:**__
\`6.\` <@&${inventory.yetkilirolleri.Yönetim}> 
\`5.\` <@&${inventory.yetkilirolleri.Admin}> 
\`4.\` <@&${inventory.yetkilirolleri.Moderatör}> 
**Orta Yetki Rolleri:** <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.RegisterRole}>, <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}>

__**Alt Yetkiler:**__
\`3.\` <@&${inventory.yetkilirolleri.TestYönetim}> 
\`2.\` <@&${inventory.yetkilirolleri.TestAdmin}>
\`1.\` <@&${inventory.yetkilirolleri.TestMod}> 
**Alt Yetki Rolleri:** <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}>

Bu işlemi yapmadan önce bu kullanıcı yetkiliyse \`${conf.prefix}yetkileri-sıfırla @etket/ID\` komutunu kullanın`)
.setFooter(`Sıralama rol pozisyonlarına göre yapılmıştır.`)
.setColor(inventory.Renk.mor)
message.channel.send(secim).then(async mesaj =>{
await mesaj.react('9️⃣')
await mesaj.react('8️⃣')
await mesaj.react('7️⃣')
await mesaj.react('6️⃣')
await mesaj.react('5️⃣')
await mesaj.react('4️⃣')
await mesaj.react('3️⃣')
await mesaj.react('2️⃣')
await mesaj.react('1️⃣')   
const seviye1emoji = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
const seviye2emoji = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
const seviye3emoji = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
const seviye4emoji = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
const seviye5emoji = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === message.author.id;
const seviye6emoji = (reaction, user) => reaction.emoji.name === '6️⃣' && user.id === message.author.id;
const seviye7emoji = (reaction, user) => reaction.emoji.name === '7️⃣' && user.id === message.author.id;
const seviye8emoji = (reaction, user) => reaction.emoji.name === '8️⃣' && user.id === message.author.id;
const seviye9emoji = (reaction, user) => reaction.emoji.name === '9️⃣' && user.id === message.author.id;
const seviye1 = mesaj.createReactionCollector(seviye1emoji, { time: 30000 });
const seviye2 = mesaj.createReactionCollector(seviye2emoji, { time: 30000 });
const seviye3 = mesaj.createReactionCollector(seviye3emoji, { time: 30000 });
const seviye4 = mesaj.createReactionCollector(seviye4emoji, { time: 30000 });
const seviye5 = mesaj.createReactionCollector(seviye5emoji, { time: 30000 });
const seviye6 = mesaj.createReactionCollector(seviye6emoji, { time: 30000 });
const seviye7 = mesaj.createReactionCollector(seviye7emoji, { time: 30000 });
const seviye8 = mesaj.createReactionCollector(seviye8emoji, { time: 30000 });
const seviye9 = mesaj.createReactionCollector(seviye9emoji, { time: 30000 });
seviye1.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.TestMod)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
const seviye1verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.TestMod}>, <@&${inventory.yetkilirolleri.RegisterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! *ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye1verildi)})
seviye2.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.TestAdmin)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
const seviye2verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.TestAdmin}>, <@&${inventory.yetkilirolleri.RegisterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye2verildi)})
seviye3.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.TestYönetim)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
const seviye3verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.TestYönetim}>, <@&${inventory.yetkilirolleri.RegisterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel1)
mesaj.edit(seviye3verildi)})
seviye4.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.Moderatör)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye4verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.Moderatör}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye4verildi)})
seviye5.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.Admin)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye5verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.Admin}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye5verildi)})
seviye6.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.Yönetim)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye6verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.Yönetim}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel2)
mesaj.edit(seviye6verildi)})
seviye7.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.ModLider)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.BanRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye7verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.ModLider}>, <@&${inventory.yetkilirolleri.BanRole}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel3)
mesaj.edit(seviye7verildi)})
seviye8.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.AdminLider)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.BanRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye8verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.AdminLider}>, <@&${inventory.yetkilirolleri.BanRole}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel3)
mesaj.edit(seviye8verildi)})
seviye9.on('collect', async striga => {
mesaj.reactions.removeAll()
member.roles.add(inventory.yetkilirolleri.YönetimLider)
member.roles.add(inventory.yetkilirolleri.RegisterRole)
member.roles.add(inventory.yetkilirolleri.MuteRole)
member.roles.add(inventory.yetkilirolleri.KickRole)
member.roles.add(inventory.yetkilirolleri.JailRole)
member.roles.add(inventory.yetkilirolleri.BanRole)
member.roles.add(inventory.yetkilirolleri.RozetRole)
member.roles.add(inventory.yetkilirolleri.TransporterRole)
const seviye7verildi = new MessageEmbed()
.setAuthor(`İşlem Başarılı !`)
.setDescription(`${member} kullanıcısı artık bir yetkili\n\n Verilen roller: <@&${inventory.yetkilirolleri.YönetimLider}>, <@&${inventory.yetkilirolleri.BanRole}>, <@&${inventory.yetkilirolleri.JailRole}>, <@&${inventory.yetkilirolleri.KickRole}>, <@&${inventory.yetkilirolleri.MuteRole}>, <@&${inventory.yetkilirolleri.RegisterRole}> <@&${inventory.yetkilirolleri.RozetRole}> <@&${inventory.yetkilirolleri.TransporterRole}> \nİyi günler ve iyi çalışmalar dilerim ${member} seni burada daha çok görmek istiyorum ! **ÊxÊ | Phoenix ❤️ ÂLBÂY ÊxÊ**`)
.setColor(inventory.Renk.Ozel3)
mesaj.edit(seviye7verildi)})
})}
exports.conf = {aliases: ['yetkiver', 'yetki-ver', 'yetkiliyap', 'yetki-berlirle']}
exports.help = {name: "yetki-liste"};
   