var sports = [
{
  title: "Hockey",
  played: true,
  rank: 1
},
{
  title: "Football",
  played: true,
  rank: 2
},
{
  title: "Baseball",
  played: true,
  rank: 3
}
]

function buildString(sport){
  var result = "You have ";
  if(sport.played){
    result += "played ";
  }
  else {
    result += "not played ";
  }
  result += "\"" + sport.title + "\" - ";
  result += sport.rank + " favorite to play";
  return result;
}

sports.forEach(function(sport){
  buildString(sport);
  console.log(buildString(sport));
})
