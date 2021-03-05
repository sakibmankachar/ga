module.exports = {
  name: "balance",
  aliases: ["bal", "money"],
  code: `
$color[00ff00]
$description[:dollar: __**MONEY:**__ $getUserVar[money;$authorID]

:bank: __**BANK:**__ $getUserVar[bank;$authorID]

:credit_card: __**Net Worth:**__ $sum[$getUserVar[money;$authorID];$getUserVar[bank;$authorID]]
]
$author[$username;$authorAvatar]`
}
