module.exports = {
  name: "warn",

  code: `$setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]

$onlyPerms[manageserver;admin;You can Use this command]

$title[⚠️ - Warning]

$description[

**Warned User**

<@$mentioned[1]>

**Warned by**

<@$authorID>

**Warn Reason**

$noMentionMessage]

$footer[Warned to $mentioned[1] by @$authorID]`
};
