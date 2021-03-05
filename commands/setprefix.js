module.exports = {
  name: "setprefix",
  code: `$title[Prefix]
$description[Successfully added that Prefix]
$footer[Newest Prefix is $message]
$setServerVar[prefix;$message]
$onlyPerms[admin;manageserver;You can't use this command]
`
}