module.exports = {
  name: "warn",

  code: `$argsCheck[<1;❌ Please Mention a User to Warn]
  $argsCheck[<2;❌ Please Mention a Reason to warn the user]
  $setUserVar[warns;$sum[$getUserVar[warns;$mentioned[1]];1];$mentioned[1]]

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
