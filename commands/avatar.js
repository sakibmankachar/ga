module.exports = {
  name: "avatar",
  aliases: ["av", "pfp"],
  code: `$author[$usertag[$finduser[$message]]]
$title[Download $usertag[$finduser[$message]]'s avatar with this hyperlink!;$useravatar[$finduser[$message]]]
$description[]
$image[$useravatar[$finduser[$message]]]
$footer[requested by $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]`
}