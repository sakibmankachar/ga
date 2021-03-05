module.exports = {
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `$deletecommand
 $onlyIfMessageContains[$message;fuck;]
 $onlyIf[$getServerVar[bw]==true;]
 <@$authorID> Use of Bad Words or Swearing is Not Allowed in this server Reason: **AutoMod Enable**
 `
}