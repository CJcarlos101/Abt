const Discord = require('discord.js');

const { Client, MessageEmbed } = require('discord.js');

const client = new Discord.Client();

const prefix = "cj!"

const prefix2 = "cs!"

client.login('token')

client.once('ready', () => {
  console.log('CJcarlos bot astolfo pfp is now online');
});

client.on("message", (message) => {
  //help command for server help
  if (message.content === 'cj!help') {

    const embed = new MessageEmbed()
  
    .setTitle("Commands list")
  
    .setColor(0xfFF00)
  
    .setDescription(`Hey ${message.author} im cjcarlos bot 1.2 astolfo pfp.I have two prefixes which is **cs! for rhythm game commands** and **cj! for general commands** here are my list of commands for rhythm game commands: **__cs!arcaea,cs!cytus,cs!deemo,cs!osu!,cs!ddr,cs!taiko no tatsujin,cs!gutar hero, and cs!voez.__** here are my general commands: **__cj!beep makes the bot say boop,cj!astolfo gives a bean plushy,cj!ping to test if the bot is online,cj!bee movie for something *special*, cj!emergency for ~~*emergencies?*~~__**`);

  message.channel.send(embed);
}
if (message.content === 'cj!astolfo') {
  message.channel.send("https://cdn.discordapp.com/attachments/730410162199855208/743391557230526474/bean.jpg");
}
  //rhythm game commands 
  if (message.content.startsWith(prefix2 + "arcaea")) {
    message.channel.send("all about arcaea here at https://arcaea.fandom.com/wiki/Arcaea_Wiki !");
  } else  
  if (message.content.startsWith(prefix2 + "cytus")) {
    message.channel.send("all about cytus here at https://cytus.fandom.com/wiki/Cytus_II and https://cytus.fandom.com/wiki/Cytus !");
  } else
  if (message.content.startsWith(prefix2 + "deemo")) {
    message.channel.send("all about deemo here at https://deemo.fandom.com/wiki/Deemo_Wiki !");
  } else 
  if (message.content.startsWith(prefix2 + "osu!")) {
    message.channel.send("all about osu here at https://osu.ppy.sh/help/wiki/Main_Page  !");
  } else
  if (message.content.startsWith(prefix2 + "ddr")) {
    message.channel.send("all about dance dance revolution here at https://dancedancerevolution.fandom.com/wiki/Dance_Dance_Revolution_(DDR)_Wiki !");
  } else
  if (message.content.startsWith(prefix2 + "taiko no tatsujin")) {
    message.channel.send("all about taiko no tatsujin here at https://taiko.fandom.com/wiki/Taiko_no_Tatsujin_Wiki !");
  } else
  if (message.content.startsWith(prefix2 + "guitar hero")) {
    message.channel.send("all about guitar hero here at https://guitarhero.fandom.com/wiki/Guitar_Hero_Wiki !");
  } else
  if (message.content.startsWith(prefix2 + "voez")) {
    message.channel.send("all about voez here at https://voez.fandom.com/wiki/VOEZ_Wikia  !");
  } else
  if (message.content.startsWith(prefix + "beep")) {
  message.channel.send("boop");
  } else
  if (message.content.startsWith(prefix + "bee movie")) {
    message.channel.send("According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.<:dorimecheemsburger:740056973395099668>");
  } else 
  if (message.content === prefix + "ping") {
  var ping = Date.now() - message.createdTimestamp + " ms";

const embed2 = new MessageEmbed()

.setTitle ("Server ping")

.setColor(0x000fff)

.setDescription("The ping for this server rn is `" + `${Date.now() - message.createdTimestamp}` + " ms` ur welcome im astolfo");

message.channel.send(embed2);
} else
if (message.content === prefix + "emergency") {

const embed3 = new MessageEmbed()

.setTitle ("Emergency protocol")

.setColor(0x00ccff)

.setDescription(`**HEY ${message.author}** A man has fallen into the river in LEGO City! Start the new rescue helicopter! HEY! Build the helicopter, and off to the rescue! Prepare the lifeline, lower the stretcher, and make the rescue! The new emergency collection from LEGO®️ City.`);

message.channel.send(embed3);
} 

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-new-people-owo');
  if (!channel) return;
  const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/730318251816517714/746607370901258380/Final_welcome_card.gif');
  channel.send(`Welcome to the server ${member}! We hope you enjoy your stay here at Rhythm Game club and pls dont forget to read <#730324403786743841> and <#730324724101545996>!`, attachment);
});

});