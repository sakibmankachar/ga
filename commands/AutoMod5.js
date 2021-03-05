module.exports = {
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;motherfucker;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
}