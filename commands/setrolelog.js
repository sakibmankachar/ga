module.exports = {
  name: "setrolelog",

  code: `
  $argsCheck[<1;❌ Please Mention a channel]

$description[Successfully Setted $mentionedChannels[1] as Type-Role Logs Channel!]

$setServerVar[rolelog;$mentionedChannels[1]]`
};
