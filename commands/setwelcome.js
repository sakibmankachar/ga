module.exports= {
  name: "setwelcome",
  code: `$setServerVar[welcome;$mentionedChannels[1;yes]]
$description[The channel <#$mentionedChannels[1]> was setted as welcome channel, i will welcome the new users in that channel]
$footer[Setted by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[manageserver;You need manage server permissions to set this!]
$color[fffff1]
$addTimestamp`
}