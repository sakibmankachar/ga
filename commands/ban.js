module.exports = {
  name: "ban",
  code: `$ban

$title[BAN]

$color[#ff2052]

$description[<$mentioned[1]> Banned from the server!]

$footer[Banned by <$authorID>]

$argsCheck[>1;Please type ID]

$onlyPerms[ban;You cannot use the command]`
}