module.exports = {
  name: "rob",
  code: `$deletecommand
$setUserVar[money;$sub[$getUserVar[money;$mentioned[1]];$random[1;$getUserVar[money;$mentioned[1]]]];$mentioned[1]]
$setUserVar[money;$sum[$getUserVar[money]]$random[1;$getUserVar[money;$mentioned[1]]]]]
$title[Robbed!]
$color[00ff00]
$description[$username robbed $username[$mentioned[1]] and got $random[1;$getUserVar[money;$mentioned[1]]]]
$author[$username;$authorAvatar]
$onlyIf[$random[1;5]==3;{execute:AwaitedRobFail}]
$onlyIf[$getUserVar[money;$mentioned[1]>2999;That user doesn't have enough money to rob!]
$onlyIf[$getUserVar[money]>2999;You need at least $3000 to rob someone!]
$cooldown[2hr;You need to wait for %time% before trying to rob someone again!]
$onlyIf[$mentioned[1]!=;Please mention someone to rob!]
`
};
