function countLetters (str) {

 var result = {};

 var ourStr = str.split(" ").join("").split("");

 for (i = 0; i < ourStr.length; i++) {

   var letter = ourStr[i];

   if (result[letter]) {

    result[letter] += 1;

   } else {

     result[letter] = 1;

   }

  }

  return result;

}

console.log(countLetters("lighthouse in the house"));