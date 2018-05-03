var games = [
  {
    title: "Batman Arkham Asylum",
    finished: true,
    rating: 4
  },
  {
    title: "Bioshock",
    finished: true,
    rating: 4.5
  },
  {
    title: "Dishonored",
    finished: true,
    rating: 4
  },
  {
    title: "Dishonored 2",
    finished: false,
    rating: 4
  }
]

function buildString(game){
  var result = "You have ";
  if(game.finished){
    result += "finished ";
  }
  else {
    result += "not finished ";
  }
  result += "\"" + game.title + "\" - ";
  result += game.rating + " stars";
  return result;
}

games.forEach(function(game){               //needs to be name of variable, not function
  buildString(game);
  console.log(buildString(game));
})
