module.exports = {
  name: "work",
  code: `$setUserVar[money;$sum[$getUserVar[money;$authorID];$random[200;3000]];$authorID]
$color[08b763]
$footer[\`s.balance\` to check your current balance]
$description[You worked as a $randomText[employ; co-worker;worker; carpenter] and got :dollar: $random[200;3000] money!]
$author[$username;$authorAvatar]
$cooldown[2hr;Please wait for %time% before trying to work again.]`
}