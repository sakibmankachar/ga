module.exports = {
  name: "warn",
  code: `$setServerVar[warns;$sum[$mentioned[1];$getServerVar[warns;$mentioned[1]];1]]
$onlyPerms[manageserver;admin;You can Use this command]
$title[⚠️ - Warning]
$description[
**Warned User**
<@$mentioned[1]>
**Warned by**
<@$authorID>
**Warn Reason**
$noMentionMessage]
$footer[Warned to <@$mentioned[1]> by <@$authorID>]`
};
