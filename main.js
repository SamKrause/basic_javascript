/*var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];

for (var i = 0; i <= 4; i++) {
    console.log(cities[i])
};
*/
/*var citylist = cities.join();*/
/*console.log(smallcities);*/

/*var pets = ["cat", "dog", "elephant"];
var filtered = pets.filter(function (pet) {
  return (pet !== "elephant");
});*/


var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
var small = cities.filter(function (city) {
    return city.length < 7;
});
console.log(small.join());
