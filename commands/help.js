module.exports = {
  name: "help",
  code: `
 $color[RED]
 $thumbnail[$userAvatar[$clientID]]
 $if[$message[1]==]
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $addField[Help? | Here comes Help;to See Commandlist or command type \`s.help <Commandlist> or s.help <Command> or s.help All\`
Available Command list:
⚒️**AutoMod**
\`s.help AutoMod\`
🔨**Moderate**
\`s.help Moderate\`
🗒️**Logs**
\`s.help Logs\`
✍️**Type-Role**
\`s.help Type-Role\`
🎮**Game**
\`s.help Game\`
😀**RolePlay**
\`s.help RolePlay\`
🔞**NSFW**
\`s.help NSFW\`
💲**Economy**
\`s.help Economy\`
⬆️**Leveling and Ranking**
\`s.help Leveling and Ranking\`
🗨️**Misc**
\`s.help Misc\`
😂 **Fun**
\`s.help Fun\`
✔️**Extra**
\`s.help Extra\`
***If you need any support or advance help. Then you could join my official discord server.*** [Click Here\\](https://discord.gg/96BqdnWvh8)
;yes]
 $elseif[$message[1]==Leveling and Ranking]
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $addField[⬆️Leveling and Ranking;\`rank, setrankmsg, resetrank, setrank\`]
 $endelseIf
 $elseif[$message[1]==Economy]
 $addField[💸 Economy;\`balance, work, rob, deposit, withdraw\`]
 $endelseIf
$elseif[$message[1]==Fun]
 $addField[😂Fun;\`meme\`]
 $endelseIf
$elseif[$message[1]==Extra]
 $addField[✔️Extra;\`guide, JALLOGS guide, covid19, invite, giverole, givexrole\`]
 $endelseIf
 $elseif[$message[1]==AutoMod]
 $addField[⚒️ AutoMod;\`autoModon, autoModoff\`]
$endelseIf
 $elseif[$message[1]==Misc]
 $addField[🗨 Misc;\`ping, help, helproulettle, avatar\`]
 $endelseIf
 $elseif[$message[1]==Moderate]
 $addField[🔨 Moderation;\`ban, kick, warn, unwarn, unmuted, muted, checkwarn\`]
 $endelseIf
 $elseif[$message[1]==Logs]
 $addField[🗒️Logs;\`setwelcome, setleave\`]
 $endelseIf
 $elseif[$message[1]==Game]
 $addField[🎮Game;\`rps, roulette(under development), slots\`]
 $endelseIf
 $elseif[$message[1]==NSFW]
 $addField[🔞NSFW;||\`pussy, boob, ass, porn\`||]
 $endelseIf
 $elseif[$message[1]==Action]
 $addField[😀RolePlay;\`pat, smile, wave, hug, kiss, blush\`]
 $endelseIf
 $elseif[$message[1]==autoModon]
 $addField[autoModon;\`To on the AutoMod System. Usage: s.autoModon\`]
 $endelseIf
 $elseif[$message[1]==autoModoff]
 $addField[autoModoff;\`To off the AutoMod System. Usage: s.autoModoff\`]
 $endelseIf
 $elseif[$message[1]==rank]
 $addField[rank;\`To see your rank. Usage: s.rank or s.rank <user>\`]
 $endelseIf
 $elseif[$message[1]==setrankmsg]
 $addField[setrankmsg;\`To set a level-up or rank-up message. Usage: s.setrankmsg <message>\`]
 $endelseIf
 $elseif[$message[1]==covid19]
 $addField[covid19;\`to get covid19 result on a country. Usage: s.covid19 <country>\`]
 $endelseIf
 $elseif[$message[1]==setrank]
 $addField[setrank;\`To set a rank channel. Usage: s.setrank <channel>\`]
 $endelseIf
 $elseif[$message[1]==resetrank]
 $addField[resetrank;\`To reset or off the rank or level system. Usage: s.resetrank\`]
 $endelseIf
 $elseif[$message[1]==balance]
 $addField[balance\`To see your balance. Usage: s.balance\`]
 $endelseIf
 $elseif[$message[1]==work]
 $addField[work;\`To work. Usage: s.work\`]
 $endelseIf
 $elseif[$message[1]==withdraw]
 $addField[withdraw;\`To Withdraw Money from bank(if you have). Usage: s.withdraw <money> or s.withdraw all\`]
 $endelseIf
 $elseif[$message[1]==deposit]
 $addField[deposit;\`To deposit money in bank. Usage: s.deposit <money> or s.deposit all\`]
 $endelseIf
 $elseif[$message[1]==rob]
 $addField[crime;\`To stole or rob money from user. Usage: s.crime <user> \`]
 $endelseIf
 $elseif[$message[1]==ping]
 $addField[ping;\`To see my ping. Usage: s.ping\`]
 $endelseIf
 $elseif[$message[1]==avatar]
 $addField[avatar;\`To see user or your Avatar. Usage: s.avatar or s.avatar <user>\`]
 $endelseIf
 $elseif[$message[1]==help]
 $addField[help;\`This. Usage: s.help or s.help <Commandlist> or s.help <Command>\`]
 $endelseIf
 $elseif[$message[1]==helproulettle]
 $addField[🗒️Logs;\`To get help on roulette. Usage: s.helproulettle\`]
 $endelseIf
 $elseif[$message[1]==ban]
 $addField[ban;\`To ban a user from a server and require ban or administration permission. Usage: s.ban <user>\`]
 $endelseIf
 $elseif[$message[1]==guide]
 $addField[guide;\`Want some guide on BDFD? Then here is it. Usage: s.guide\`]
 $endelseIf
 $elseif[$message[1]==meme]
 $addField[meme;\`Want some random meme? Then here is it. Usage: s.meme\`]
 $endelseIf
$elseif[$message[1]==JALLOGS guide]
 $addField[JALLOGS;\`Want some guide on Welcome and leave on BDFD? Then here is it. Usage: s.JALLOGS guide\`]
 $endelseIf
 $elseif[$message[1]==kick]
 $addField[kick;\`To kick a user from a server and require kick or administration permission. Usage: s.kick <user>\`]
 $endelseIf
 $elseif[$message[1]==warn]
 $addField[warn;\`To warn a user and require manage server or administration permission. Usage: s.warn <user>\`]
 $endelseIf
$elseif[$message[1]==unwarn]
 $addField[unwarn;\`To unwarn a user and require manage server or administration permission. Usage: s.unwarn <user>\`]
 $endelseIf
$elseif[$message[1]==checkwarn]
 $addField[checkwarn;\`To check warns of a user. Usage: s.checkwarn <user>\`]
 $endelseIf
$elseif[$message[1]==muted]
 $addField[muted;\`To mute a user from a server and require manage server or administration permission and must my a role name muted. Usage: s.mute <user>\`]
 $endelseIf
$elseif[$message[1]==unmute]
 $addField[unmute;\`To unmute a user from a server and require manage server or administration permission. Usage: s.unmute <user>\`]
 $endelseIf
$elseif[$message[1]==setwelcome]
 $addField[setwelcome;\`To set a channel where I will welcome user. Usage: s.setwelcome <channel>\`]
 $endelseIf
$elseif[$message[1]==setleave]
 $addField[setleave;\`To set a channel where I will goodbye user. Usage: s.setleave <channel>\`]
 $endelseIf
$elseif[$message[1]==invite]
 $addField[invite;\`Want my invite link? Usage: s.invite\`]
 $endelseIf
$elseif[$message[1]==rps]
 $addField[rps;\`Want to play rock, paper, Scissors with me? Usage: s.rps <rock or paper or Scissors>\`]
 $endelseIf
$elseif[$message[1]==roulette]
 $addField[roulette;\`Want to play roulette with me? Usage: s.roulettle <bet>
Note: This Command is under development so it might not work.\`]
 $endelseIf
$elseif[$message[1]==pussy]
 $addField[pussy;||\`Want some random pic and gif of pussy? Usage: s.pussy\`||]
 $endelseIf
$elseif[$message[1]==boob]
 $addField[boob;||\`Want some random pic and gif of boobs? Usage: s.boob\`||]
 $endelseIf
$elseif[$message[1]==porn]
 $addField[porn;||\`Want some random pic and gif of porn? Usage: s.porn\`||]
 $endelseIf
$elseif[$message[1]==ass]
 $addField[ass;||\`Want some random pic and gif of ass? Usage: s.ass\`||]
 $endelseIf
$elseif[$message[1]==hug]
 $addField[hug;\`Want to give hug to someone? Usage: s.hug <user>\`]
 $endelseIf
$elseif[$message[1]==smile]
 $addField[smile;\`Want to smile? Usage: s.smile\`]
 $endelseIf
$elseif[$message[1]==kiss]
 $addField[kiss;\`Want to kiss someone?Usage: s.kiss <user>\`]
 $endelseIf
$elseif[$message[1]==blush]
 $addField[blush;\`Want to show that you are getting blush? Usage: s.blush\`]
 $endelseIf
$elseif[$message[1]==wave]
 $addField[wave;\`Want to wave someone? Usage: s.wave <user>\`]
 $endelseIf
$elseif[$message[1]==pat]
 $addField[pat;\`Want to pat someone? Usage: s.pat <user>\`]
 $endelseIf
$elseif[$message[1]==All]
$title[Help? | Here comes Help]
$addfield[⚒️**AutoMod**;\`autoModon, autoModoff\`]
$addfield[🔨**Moderate**;\`ban, kick, unban, muted, unmuted, warn, unwarn, checkwarn\`]
$addfield[🗒️**Logs**;\`setwelcome, setleave\`]
$addfield[🎮**Game**;\`rps, roulette (under development), slots\`]
$addfield[😀**RolePlay**;\`pat, blush, wave, hug, kiss\`]
$addfield[🔞**NSFW**;||\`boob, pussy, ass, porn\`||]
$addfield[💲**Economy**;\`work, rob, balance, deposit, withdraw\`]
$addfield[⬆️**Leveling and Ranking**;\`setrank, rank, setrankmsg, resetrank\`]
$addfield[🗨️**Misc**;\`ping, avatar, help, helproulettle\`]
$addfield[😂**Fun**;\`meme\`]
$addfield[✍️ Type-Role;\`setroleon, setroleoff, setrolelog, resetrolelog\`]
$addfield[✔️Extra;\`guide, JALLOGS guide, covid19, invite, giverole, givexrole\`]
$addfield[Support;**If you need any support or advance help. Then you could join my official discord server. ** [Click Here\\](https://discord.gg/96BqdnWvh8)]
$endelseif
 $elseif[$message[1]==leveling and ranking]

 $author[$userTag[$clientID];$userAvatar[$clientID]]

 $addField[⬆️Leveling and Ranking;\`rank, setrankmsg, resetrank, setrank\`]

 $endelseIf

 $elseif[$message[1]==economy]

 $addField[💸 Economy;\`balance, work, rob, deposit, withdraw\`]

 $endelseIf

$elseif[$message[1]==fun]

 $addField[😂Fun;\`meme\`]

 $endelseIf

$elseif[$message[1]==extra]

 $addField[✔️Extra;\`guide, JALLOGS guide, covid19, invite, giverole, givexrole\`]

 $endelseIf

 $elseif[$message[1]==automod]

 $addField[⚒️ AutoMod;\`autoModon, autoModoff\`]

$endelseIf

 $elseif[$message[1]==misc]

 $addField[🗨 Misc;\`ping, help, helproulettle, avatar\`]

 $endelseIf

 $elseif[$message[1]==moderate]

 $addField[🔨 Moderation;\`ban, kick, warn, unwarn, unmuted, muted, checkwarn\`]

 $endelseIf

 $elseif[$message[1]==logs]

 $addField[🗒️Logs;\`setwelcome, setleave\`]

 $endelseIf

 $elseif[$message[1]==game]

 $addField[🎮Game;\`rps, roulette(under development), slots\`]

 $endelseIf

 $elseif[$message[1]==nsfw]

 $addField[🔞NSFW;||\`pussy, boob, ass, porn\`||]

 $endelseIf

 $elseif[$message[1]==action]

 $addField[😀RolePlay;\`pat, smile, wave, hug, kiss, blush\`]

 $endelseIf
 $elseif[$message[1]==all]

$title[Help? | Here comes Help]

$addfield[⚒️**AutoMod**;\`autoModon, autoModoff\`]

$addfield[🔨**Moderate**;\`ban, kick, unban, muted, unmuted, warn, unwarn, checkwarn\`]

$addfield[🗒️**Logs**;\`setwelcome, setleave\`]

$addfield[🎮**Game**;\`rps, roulette (under development), slots\`]

$addfield[😀**RolePlay**;\`pat, blush, wave, hug, kiss\`]

$addfield[🔞**NSFW**;||\`boob, pussy, ass, porn\`||]

$addfield[💲**Economy**;\`work, rob, balance, deposit, withdraw\`]

$addfield[⬆️**Leveling and Ranking**;\`setrank, rank, setrankmsg, resetrank\`]

$addfield[🗨️**Misc**;\`ping, avatar, help, helproulettle\`]

$addfield[😂**Fun**;meme]

$addfield[✔️Extra;\`guide, JALLOGS guide, covid19, invite, giverole, givexrole\`]

$addfield[✍️ Type-Role;\`resetrolelog, setrolelog, setroleon, setroleoff\`]

$addfield[Support;**If you need any support or advance help. Then you could join my official discord server. ** [Click Here\\](https://discord.gg/96BqdnWvh8)]

$endelseif

$elseIf[$message[1]==type-role]

$addfield[✍️ Type-Role;\`resetrolelog, setrolelog, setroleon, setroleoff\`]

$endelseif

$elseIf[$message[1]==setroleon]

$addfield[setrole on;\`To Turn on Type-Role System Usage: s.setroleon\`]

$endelseif

$elseIf[$message[1]==setroleoff]

$addfield[setroleoff;\`To Turn off Type-Role System. Usage: s.setroleoff\`]

$endelseif

$elseIf[$message[1]==resetrole]

$addfield[resetrole;\`To Reset the Type-Role uses log. Usage: s.resetrole\`]

$endelseif

$elseIf[$message[1]==setrole]

$addfield[setrole;\`To set the Type-Role uses log. Usage: s.setrole <channel>\`]

$endelseif

$elseIf[$message[1]==Type-Role]

$addfield[✍️ Type-Role;\`resetrolelog, setrolelog, setrole on, setrole off\`]

$endelseif

$elseif[$message[1]==slots]

$addfield[slots;\`Play a game of matching. if a thing luckily get matched (3) that means you won the game you will also get money but if you lose you will also lose some money\`]

$endelseif
$elseif[$message[1]==giverole]
$addfield[giverole;\`I will make a role and I will give it to mentioned one\`]
$endelseif
$elseif[$message[1]==givexrole]
$addfield[givexrole;\`I will the Mentioned user the existing role which you typed or mentioned\`]
$endelseif

 $endif
`
};
