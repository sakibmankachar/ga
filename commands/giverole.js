module.exports = {
name: "giverole",
code: `$argsCheck[<1;❌Please Mention a user to give role]
$argsCheck[<2;❌Please type a role to give the user]
$description[**$userName** Created a role **$nomentionmessage** and the role has been given to **$mentioned[1;yes]** 
$giverole[$findRole[$nomentionmessage];$mentioned[1;yes]]
$createrole[$nomentionmessage]
$onlyPerms[manageserver;admin;❌Only User with Admin and Manage Server Permission can Use this command!]`
}