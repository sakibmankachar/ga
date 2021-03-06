module.exports = {
  name: "unwarn",
  code: `
$setUserVar[warns;$sub[$mentioned[1];$getUserVar[warns;$mentioned[1]];1]]
$title[Removed Warn]
$description[This User Warn has been removed!]
$footer[This User now has $getServarVar[warn] warns]
$onlyIf[$getServerVar[warn]!==0;You can unwarn This user. He/She has no warns.]
$onlyPerms[manageserver;admin;❌You can't Use this command]
`
};
