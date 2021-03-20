var dbd = require("dbd.js");
var fs = require("fs");
var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: ['<@$clientID>','$getServerVar[prefix]']
});

bot.onMessage();
bot.onLeave();
bot.onJoined();

var reader = fs.readdirSync(`./commands`).filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./commands/${file}`);
  bot.command({
    name: command.name,
    code: command.code
  });
}
bot.status({
  text: "s.help | Ver. 1.0 Beta",
  type: "PLAYING",
  time: 300
});

bot.status({
  text: "$serverCount servers!",
  type: "WATCHING",
  time: 150
});

bot.status({
  text: "$membersCount Users!",
  type: "WATCHING",
  time: 150
});

bot.variables({
  prefix: "s.",
  rch: "",
  rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
  lvl: "0",
  exp: "0",
  rexp: "200",
  rsystem: "0",
  bank: "0",
  case: "",
  warns: "0",
  welcome: "",
  goodbye: "",
  prefix: "s.",
  money: "500",
  bw: "False",
  search: "",
  voteaccess: "True",
  apikey: process.env.DBLTOKEN,
  role: "off",
  rolelog: ""
});

bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.

webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]`
});

bot.leaveCommand({
  channel: "$getServerVar[goodbye]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Goodbye&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[Now we are $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors`
});

bot.awaitedCommand({
  name: "AwaitedRobFail",
  code: `$deletecommand
$setUserVar[money;$sum[$getUserVar[money;$mentioned[1]];$random[1;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]
$setUserVar[money;$sub[$getUserVar[money]]$random[1;$getUserVar[money;$mentioned[1]]]]]
$title[Busted!]
$color[ff0000]
$description[$username was caught attempting to rob $username[mentioned[1]] and had to pay $random[1;$getUserVar[money;mentioned[1]]] as a fine]
$author[$username;$authorAvatar]
`
});
