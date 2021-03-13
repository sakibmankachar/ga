module.exports = {
  name: "givexrole",

  code: `$argsCheck[<1;❌Please Mention a user to give role]

$argsCheck[<2;❌Please type a role to give the user]

$description[**$username** given the role **<#$finerole[$nomentionmessage]** to **$mentioned[1;yes]** ]

$giverole[$findRole[$nomentionmessage];$mentioned[1;yes]]

$onlyPerms[manageserver;admin;❌Only User with Admin and Manage Server Permission can Use this command!]`
};
