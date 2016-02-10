/*My first attempt filters the cities and returns
only the ones that are less than seven characters.
Then it joins them into a single string */
var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
var short_cities = cities.filter(function (city) {
    return city.length < 7;
});
console.log(short_cities.join());


/* My second attempt I uses a loop an pushes
only the ones that are less than seven characters
to a new array and then console logs the new array*/
var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
var small = []
function answer() {
  for (i = 0; i < 5; i++){
    if (cities[i].length < 7){
      small.push(cities[i]);
    }
  };
  return small;
};
console.log(answer());
