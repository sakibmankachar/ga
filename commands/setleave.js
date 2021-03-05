module.exports = {
  name: "setleave",
  code: `$setServerVar[goodbye;$mentionedChannels[1;yes]]
$description[The channel <#$mentionedChannels[1]> was setted as goodbye channel, i will say goodbye in that channel to the users that leave]
$footer[Setted by $username[$authorID]#$discriminator[$authorID]]
$onlyPerms[manageserver;You need manage server permissions to set this!]
$color[fffff1]
$addTimestamp`
};
