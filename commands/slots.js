module.exports = {
  name: "slots",
  code: `
  $author[$replaceText[$replaceText[$randomText[true;false];true;You Win];false;You Lose];$authorAvatar]

$title[$replaceText[$replaceText[$randomText[true;false];true;And get 400 money];false;Lost 200 money]]

$description[> $randomText[🍞;🍏;🍋;🍔;🥞] $randomText[🍔;🍏;🍞;🥞;🍋] $randomText[🥞;🍋;🍏;🍞;🍔]

> $replaceText[$replaceText[$randomText[true;false];true;$randomText[🍞 🍞 🍞;🍔 🍔 🍔;🍋 🍋 🍋;🥞 🥞 🥞;🍏 🍏 🍏]];false;$randomText[🍏;🍔;🍞;🍋;🥞] $randomText[🍏;🥞;🍞;🍋;🍔] $randomText[🍔;🍋;🍞;🍏;🥞]]  **«**

> $randomText[🍋;🍏;🍞;🍔;🥞] $randomText[🥞;🍞;🍔;🍋;🍏] $randomText[🍋;🍔;🥞;🍏;🍞]]

$color[$replaceText[$replaceText[$randomText[true;false];true;ffffff];false;00ff00]]

$footer[⏣  Money: $replaceText[$replaceText[$randomText[true;false];false;$sub[$getUserVar[money];200]];true;$sum[$getUserVar[money];400]]]

$addTimestamp

$setUserVar[money;$replaceText[$replaceText[$randomText[true;false];false;$sub[$getUserVar[money];200]];true;$sum[$getUserVar[money];400]]]

$onlyIf[$getUserVar[money]>=200;You didn't have enough 200 coins to play it.] 
`
};
