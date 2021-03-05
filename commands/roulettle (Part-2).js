module.exports = {
  name: "roulettle",
  code: `$replyIn[25s]
$suppressErrors

$setUserVar[money;$$randomText[sum;sub][$getUserVar[money];$message[1]]]

$title[$replaceText[$replaceText[$randomText[sum;sub];sum; WINNER;1];sub; Unfortunately $username lost.;1]]

$description[ball $replaceText[$replaceText[$randomText[sum;sub];sum; draw;1];sub; draw;1] $replaceText[$replaceText[$randomText[sum;sub];sum;on: **$message[2]**;1];sub;on: **$randomText[red;black]**;1]

$replaceText[$replaceText[$randomText[sum;sub];sum; <@$authorID> $username won: $$message[1];1];sub;<@$authorID> you lost: $$message[1];1]]
$footer[$username#$discriminator[$authorID]]
$footerIcon[$userAvatar[$authorID]]
$color[$replaceText[$replaceText[$randomText[sum;sub];sum;1bbe00;1];sub;eb0000;1]]

$onlyIf[$checkContains[$toLowercase[$message[2]];red;black]==true;]

$onlyIf[$message[1]<=$getUserVar[money];]

$argsCheck[>1;]`
}
