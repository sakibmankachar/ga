module.exports = {
  name: "setrolelog",

  code: `
  $argsCheck[<1;❌ Please Mention a channel]

$description[Successfully Setted <#$mentionedChannels[1]> as Type-Role Logs Channel!]

$onlyPerms[manageserver;admin;❌Only Users with Admin or Manage Role Can Use This Command only]

$setServerVar[rolelog;$mentionedChannels[1]]`
};
