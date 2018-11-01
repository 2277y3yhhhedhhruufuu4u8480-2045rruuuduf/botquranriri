const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
الحياة تكسرنا وتبعدنا عن الصحبة. لاكن الصحبه موجوده عندنآ:rose:  حياك الله :dancer: 
اطلب من سموك الرقي تنورنا :butterfly: يلحلو:heart: 
                          https://discord.gg/YZ6tS9d
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login('NDg3MzQ5NjE4NzI0ODMxMjM1.Drw_hg.8s2_tojVZaK_H728gA4hh57Arms');
