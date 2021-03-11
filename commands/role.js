module.exports = {
  name: "role",

  code: `$argsCheck[<1; Please Type a Role Name]

$if[$getServerVar[role]==on]

$title[Role Created]

$description[**$username** just created a role **$message** and the role has given to the **$username**]

$channelSendMessage[$getServerVar[rolelog];**$Username** Created a Role **$message**]

$giveRole[$authorID;$findRole[$message]]

$createRole[$message]

$elseIf[$getServerVar[role]==off]

❌Type-Role System is Off!

$endelseif

$endif
`
};
