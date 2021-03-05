module.exports = {
  name: "$alwaysExecute",
  code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[10;40]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
}