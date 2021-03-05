module.exports = {
  name: "autoModon",
  code: `$setServerVar[bw;True]
 $onlyBotPerms[managemessages;Bot missing permission **MANAGE MASSAGES**]
 $onlyPerms[managechannels;You are not a moderate or Admin!]
 $title[AutoMod System]
 $description[AutoMod Enable]
 $footer[Request by $username ]
 $addTimestamp
 $color[WHITE]
`
}