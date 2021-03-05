module.exports = {
  name: "hell",
  nonPrefixed: true,
  code: `$deletecommand
  $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**`
};
