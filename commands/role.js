module.exports = {
  name: "role",

  code: `$title[Role Created]

$description[**$username** just created a role **$message** and the role has given to the **$username**]

$createRole[$message]

$argsCheck[<1; Please Type a Role Name]

$giveRole[$authorID;$findRole[$message]]`
};
