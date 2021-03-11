module.exports = {
  name: "voteaccess",
  code: `$deleteCommand
$dm
$setUserVar[voteaccess;True]
  $title[Vote Access]
  $description[**You have got access to vote required Commands!**]
  $footer[🎉 Congratulations]
  $color[#ff2052]
$onlyIf[$getUserVar[voteaccess]==True;You have already got access to Vote Required Commands]
  $onlyIf[$jsonRequest[https://top.gg/api/bots/$clientID/check?userId=$authorID;voted;:x: Error while getting request;Authorization:$getvar[apikey]]==1;{title:Vote not found!}{description:Sorry, I couldn't find your vote, please vote for me on [top.gg\\](https://top.gg/bot/$clientid/vote)}{color:FF0000}]`
}