var weather = ['sun', 'rain', 'sun', 'rain', 'rain', 'rain'];

var weatherStat = {};

weather.forEach(function(el) {
  var keyExist = weatherStat.hasOwnProperty(el);

  if (keyExist) {
    // increase by 1

    weatherStat[el] += 1;

  } else {

    weatherStat[el] = 1;

  }

});

console.log(weatherStat);
____


var str = "lighthouse in the house";

// var ourStr = str.split(" ").join("").split(" ");

var result = {};

str.forEach(function(el) {

  var keyExist = result.hasOwnProperty(el);

  if (keyExist) {

    result[el] += 1;

  } else {

    result[el] = 1;

  }

});

console.log(result);

