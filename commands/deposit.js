module.exports = {
  name: "deposit",
  aliases: ["dep"],
  code: `
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sub[$getUserVar[money;$authorID];$message];$authorID]
$description[You deposited :dollar: $message in your :bank: bank]
$author[$username;$authorAvatar]
$suppressErrors[Not a valid number!]
$onlyIf[$message<=$getUserVar[money;$authorID];That amount is higher than the amount in your wallet!]
$onlyIf[$message>0;You cannot deposit an amount lower than \`0\`. If you want to deposit all, then use the command \`*dep-all\`]
`
}
