module.exports = {
  name: "autoModoff",
  code: `$setServerVar[bw;False]
 $onlyBotPerms[managemessages;Bot missing permission **MANAGE MASSAGES**]
 $onlyPerms[managechannels;You are not a moderator or Admin!]
 $title[AutoMod System]
 $description[AutoMod Disable]
 $footer[Request by $username ]
 $addTimestamp
 $color[WHITE]
 `
}