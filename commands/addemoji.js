//automatically add emoji from using it.

module.exports = {
  name: "addemoji",

  code: `$description[Successfully added the emoji $customEmoji[$message[2]] to $serverName!]

$addEmoji[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]].$replaceText[$replaceText[$isValidLink[https://cdn.discordapp.com/emojis/$findNumbers[$message[1]].gif];true;gif];false;png];$message[2]]

$footer[Command Author: $username;$authorAvatar]

$title[Emoji Adder]

$color[$random[11111;99999]]

$onlyIf[$message[2]!=;{description: Please provide a name for the emoji!}]

$onlyIf[$message[1]!=;{description: Please use a emoji like \`s.emoji 🎉\`}]`
};
