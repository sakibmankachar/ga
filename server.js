var dbd = require("dbd.js");
var fs = require("fs");
var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: "$getServerVar[prefix]"
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
  time: 300
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
  voteaccess: "False",
  apikey: process.env.DBLTOKEN
});

bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.
webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors`
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

bot.command({
  name: "anime",

  description: "Search anime info via title",

  usage: "anime <anime title>",

  code: `

$title[$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.titles.romaji;] / $jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.titles.japanese;] ]

$description[

📅 Published\`\`\`

$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.startDate;] - $jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.endDate;]\`\`\`

📖 Episode\`\`\`

$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.episodeCount;] Episode\`\`\`

⭐ Rating\`\`\`

$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.averageRating;]\`\`\`

🏆 Popularity Rank\`\`\`

$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.popularityRank;]\`\`\`

📜 Synopsis\`\`\`

$jsonRequest[https://api.willz.repl.co/anime/search?text=$message;text.synopsis;]\`\`\`

]

$color[RANDOM]

$image[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.posterImage.medium;]]

$footer[Requested By $username[$authorID];$authorAvatar]

$addTimestamp

$onlyIf[$message[1]!=;You need to put Anime name]