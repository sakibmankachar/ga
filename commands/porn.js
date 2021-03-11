module.exports = {
  name: "porn",
  code: `$If[$getUserVar[voteaccess]==False]
❌You have to vote Me to access This Command.
https://top.gg/bot/$clientID/vote
After Voting type s.voteaccess
$elseif[$getuservar[voteaccess]==True]
$onlyNSFW[❌This command can only be used in the NSFW channel]
$description[**Here Some Porn From Me**]
$image[$randomText[https://images.sex.com/images/pinporn/2019/09/17/460/21830444.gif;https://images.sex.com/images/pinporn/2019/09/19/460/21836573.gif;http://porngif.cz/gif/zadky/0151.gif;http://porngif.cz/gif/ze%20predu/0198.gif;http://porngif.cz/gif/ze%20zadu/0596.gif;http://porngif.cz/gif/ze%20predu/0278.gif;http:/ /porngif.cz/gif/na%20konicka/0029.gif;http://porngif.cz/gif/na%20konicka/0176.gif;http://porngif.cz/gif/ze%20predu/0065.gif;http://porngif.cz/gif/ze%20zadu/0490.gif;http://porngif.cz/gif/na%20konicka/0237.gif;http://porngif.cz/gif/ze%20zadu/0276.gif;http://porngif.cz/gif/na%20konicka/0361.gif;http://porngif.cz/gif/na%20konicka/0205.gif;http://porngif.cz/gif/na%20konicka/0301.gif;http://porngif.cz/gif/ze%20zadu/0336.gif;http://porngif.cz/gif/ze%20zadu/0423.gif;http://porngif.cz/gif/strikani/0120.gif;http://porngif.cz/gif/strikani/0343.gif;http://porngif.cz/gif/strikani/0283.gif;http://porngif.cz/gif/ze%20zadu/0079.gif;http://porngif.cz/gif/ze%20zadu/0550.gif;http://porngif.cz/gif/ze%20predu/0342.gif;http://porngif.cz/gif/ze%20zadu/0511.gif;http://porngif.cz/gif/ze%20predu/0072.gif;http://porngif.cz/gif/ze%20predu/0136.gif;http://porngif.cz/gif/ze%20zadu/0168.gif;http://porngif.cz/gif/strikani/0150.gif;http://porngif.cz/gif/na%20konicka/0278.gif;http://porngif.cz/gif/ze%20zadu/0533.gif;http://porngif.cz/gif/strikani/0190.gif;http://porngif.cz/gif/na%20konicka/0212.gif;http://porngif.cz/gif/ze%20zadu/0471.gif;http://porngif.cz/gif/na%20konicka/0001.gif;http://porngif.cz/gif/ze%20predu/0477.gif;http://porngif.cz/gif/na%20konicka/0293.gif;http://porngif.cz/gif/strikani/0147.gif;http://porngif.cz/gif/ze%20zadu/0442.gif]]
$color[$random[0;999999]]
$footer[Requested by $username#$discriminator[$authorID]]
$cooldown[3s; Please Wait %time%] 
$endelseif

$endif`
};
