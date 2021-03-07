//Simple Better Server Info Command

module.exports = {
  name: "serverinfo",

  aliases: ["serverprofile", "server"],

  code: `$title[$serverName[$guildID]'s Info]

$thumbnail[$serverIcon[$guildID]]

$description[**Name**

$serverName[$guildID]

**ID**

$guildID

**Owner**

<@$ownerID>

**Region**

$serverRegion

**Boosts**

$serverBoostCount

**Boost Level**

$serverBoostCount

**Boost Level**

$serverBoostLevel

**Verification Level**

$serverVerificationLevel

**Total Members**

$membersCount

**Creation Date**

$creationDate[$guildID]

**Emojis**

$serverEmojis]

$color[73C2FB]`
};
