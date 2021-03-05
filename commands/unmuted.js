module.exports = {
  name: "unmuted",
  code: `$unmute[muted]

$title[UNMUTE]

$description[<@$mentioned[<]> is unmuted by $username]

$footer[Unmuted by $username]

$argsCheck[>1;Please mention user]

$onlyPerms[manageroles;You cannot use this command]`
}