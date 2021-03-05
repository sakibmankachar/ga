module.exports = {
  name: "withdraw",
  aliases: ["with"],
  code: `$setUserVar[bank;$sub[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sum[$getUserVar[money;$authorID];$message];$authorID]
$description[You withdrew :dollar: $message from your :bank: bank]
$author[$username;$authorAvatar]
$suppressErrors[Not a valid number!]
$onlyIf[$message<=$getUserVar[money;$authorID];That amount is higher than the amount in your bank!]
$onlyIf[$message>0;You cannot withdraw an amount lower than \`0\`. If you want to withdraw all, then use the command s.with-all]`
}
