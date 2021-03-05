module.exports = {
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;Motherfucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this Server | Reason: **AutoMod Enable**
 `
}