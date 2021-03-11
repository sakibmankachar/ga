module.exports = {
  name: "boob",
  code: `$If[$getUserVar[voteaccess]==False]
❌You have to vote Me to access This Command.
https://top.gg/bot/$clientID/vote
After Voting type s.voteaccess
$elseif[$getuservar[voteaccess]==True]
$color[ff0000]
$description[**Here Some Boobs From Me**]
$onlyNSFW[❌This command can only be used in the NSFW channel]
$image[$randomText[https://cdn.boob.bot/boobs/800123D5.png;https://cdn.boob.bot/boobs/4D1C.JPG;https://cdn.boob.bot/boobs/800001D0.jpg;https://cdn.boob.bot/boobs/4DDF.JPG;https://cdn.boob.bot/boobs/8000179C.jpg;https://cdn.boob.bot/boobs/4E48.JPG;https://cdn.boob.bot/boobs/8000CA39.gif;https://cdn.boob.bot/boobs/8000B80F.gif;https://cdn.boob.bot/boobs/8000A072.gif;https://cdn.boob.bot/boobs/80003A1F.gif;https://cdn.boob.bot/boobs/800071D3.gif;https://cdn.boob.bot/boobs/8000306F.gif;https://cdn.boob.bot/boobs/8000538D.gif;https://cdn.boob.bot/boobs/800063E6.gif;https://cdn.boob.bot/boobs/800154E0.png;https://cdn.boob.bot/boobs/80002589.gif;https://cdn.boob.bot/boobs/80012777.png;https://cdn.boob.bot/boobs/800007DE.jpg;https://cdn.boob.bot/boobs/80000306.jpg;https://cdn.boob.bot/boobs/80011BF6.jpg;https://cdn.boob.bot/boobs/8000D17D.gif;https://cdn.boob.bot/boobs/80001B3E.jpg;https://cdn.boob.bot/boobs/800148C4.jpg;https://cdn.boob.bot/boobs/80011AC0.jpg;https://cdn.boob.bot/boobs/4DA3.JPG;https://cdn.boob.bot/boobs/8000D3E9.gif;https://cdn.boob.bot/boobs/800106C5.gif;https://cdn.boob.bot/boobs/80007138.gif;https://cdn.boob.bot/boobs/80010A67.gif;https://cdn.boob.bot/boobs/4D49.JPG;https://cdn.boob.bot/boobs/800063E6.gif;https://cdn.boob.bot/boobs/8000ABF3.gif;https://cdn.boob.bot/boobs/80000D51.gif;https://cdn.boob.bot/boobs/8000B508.gif;https://cdn.boob.bot/boobs/8000A243.gif;https://cdn.boob.bot/boobs/8001001C.gif;https://cdn.boob.bot/boobs/800085CE.gif;https://cdn.boob.bot/boobs/8000992E.gif;https://cdn.boob.bot/boobs/80008F7E.gif;https://cdn.boob.bot/boobs/80009EA1.gif;https://cdn.boob.bot/boobs/80014351.jpg;https://cdn.boob.bot/boobs/80016368.jpg;https://cdn.boob.bot/boobs/800040C8.gif;https://cdn.boob.bot/boobs/80003240.gif]]
$footer[Requested by $username#$discriminator[$authorID]]
$cooldown[3s;Please Wait %time%.]
$endelseif
$endif`
};
