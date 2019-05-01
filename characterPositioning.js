function charPosition (str) {

 var result = {};

 var ourStr = str.split(" ").join("").split("");

 for (i = 0; i < ourStr.length; i++) {

   var letter = ourStr[i];

   if (result[letter]) {

    result[letter].push(i);

   } else {

     result[letter] = [i];

   }

  }

  return result;

}

console.log(charPosition("lighthouse in the house"));