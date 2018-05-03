var movie = [
  {
    title: "Goon",
    rating: 3.5,
    watched: true
  },
  {
    title: "The Avengers",
    rating: 4.5,
    watched: false
  },
  {
    title: "Suicide Squad",
    rating: 2.5,
    watched: true
  },
  {
    title: "Wonder Woman",
    rating: 5,
    watched: false
  }
]

movie.forEach(function(movies){
  buildString(movies);
  console.log(buildString(movies));
})


function buildString(movies){
  var result = "You have ";
  if(movies.watched){
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.rating + " stars";
  return result;
}
