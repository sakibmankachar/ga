module.exports = {
  name: "covid19",
  code: `$title[Covid On $message]

$image[https://covid-img.herokuapp.com/country/$toLowercase[$message]]

$color[$random[111111;999999]]

$footer[Covid Stats ]

$addTimestamp`
};
