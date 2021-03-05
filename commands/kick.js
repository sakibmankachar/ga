module.exports = {
  name: "kick",
  code: `$kickMention

$title[KICK]

$color[#ff2052]

$description[$username[$mentioned[1]] Is kicked by $username]

$footer[Kicked by $username]

$argsCheck[>1;Please mention someone]

$onlyPerms[kick;You cannot use this command]`
}