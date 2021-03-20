module.exports = {
  name: "$alwaysExecute",
  code: `$if[$message==<@$clientID>]
$title[My prefix is s.]
$description[
**Use \`s.help\` to view my command list!
Use \`s.invite\` to invite me to your server!**]
$footer[© Sakib Anam | Sak-bot]
$color[RANDOM]
$endIf`
};
