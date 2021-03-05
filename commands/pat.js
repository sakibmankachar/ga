module.exports = {
  name: "pat",
  code: `$argsCheck[>1; Please Mention Someone]
$onlyIf[$guildID!=;This command is disabled in DMs, Please use it somewhere else.]
$onlyIf[$message!=;]
$onlyIf[$authorID!=$mentioned[1];**❌ You Can't Pat yourself**]
$onlyIf[$userExists[$mentioned[1]]==true;This user does not exist, Please mention a user that exists]

$color[$randomText[dcc5ff;9efffa;cbffc0;ffcdf4;ffe5d3;ffffb3]]
$description[**<@$authorID> pats <@$mentioned[1]> on the head!**]
$image[$randomText[https://media1.tenor.com/images/68c98c4b89cf159d410c8f1bd5b7c124/tenor.gif;https://media1.tenor.com/images/16ec668d63ac6c1e8a1635b855cb1654/tenor.gif;https://media1.tenor.com/images/54722063c802bac30d928db3bf3cc3b4/tenor.gif;https://media1.tenor.com/images/76f574af72542be9e30fbffec02339b3/tenor.gif?itemid=13570956;https://media1.tenor.com/images/57e98242606d651cc992b9525d3de2d8/tenor.gif?itemid=17549072;https://media1.tenor.com/images/078599227bc087959b79ea111fbc0f3a/tenor.gif?itemid=13596135;https://cdn.discordapp.com/attachments/708671684491739199/708672410475560970/ko9MR4Q5E3y.gif?size=2048;https://cdn.discordapp.com/attachments/708671684491739199/708672413545660507/LR8lKzjm1Eo.gif?size=2048;https://cdn.discordapp.com/attachments/708671684491739199/708672400631267368/63EVshtRzG1.gif?size=2048;748310506934239284/755087993823297536/tenor-1.gif?size=2048;https://cdn.discordapp.com/attachments/758055465400926362/758532816035905536/IeBMrEGZ.gif?https://cdn.nekos.life/v3/sfw/gif/pat/pat_047.gif?https://media.discordapp.net/attachments/399448944889036801/688911115224088606/e94e56da-cdca-43e2-beea-d1b07a4c0a29.gif?https://media.discordapp.net/attachments/399448944889036801/698947645972021338/32f2e5fc-c0c1-4d75-a78e-2a5afa163d98.gif?https://media.discordapp.net/attachments/399448944889036801/722409482742792283/8ea8c63a-6c36-4c68-865c-2c1ab86eebcc.gif?size=2048;https://purrbot.site/img/sfw/pat/gif/pat_0$random[01;80].gif]]`
}