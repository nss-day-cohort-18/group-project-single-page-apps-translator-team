"use strict";

// "use strict";
    
// var textToTranslate = [ "Merry", "Happy", "Christmas", "New", "Year", "Ringraziamento", "Hanukkah"];
// var italianWords = { Merry: "Buon", Happy: "Felice", Christmas: "Natale", New: "Nuovo", Year: "Anno", Thanksgiving: "Ringraziamento", Hanukkah: "Hanukkah"};
// var translatedText = [];

// for (var i = 0; i < textToTranslate.length; i++) {
//     translatedText.push(italianWords[textToTranslate[i]]);
//     if (italianWords[textToTranslate[i]] === undefined) {
//         translatedText.pop(italianWords[textToTranslate[i]]);
//     }
// }

// var finished = translatedText.join(" ");
// console.log(finished);
 ///////////////////////////////////////////////////////////////////////////////////
var Translator = function (italianWords) {
var italianWords = { 
        Merry: "Buon",
         Happy: "Felice",
          Christmas: "Natale",
           New: "Nuovo",
            Year: "Anno",
             Thanksgiving: "Ringraziamento",
              Hanukkah: "Hanukkah"
      };
      var textToTranslate = [ "Merry", "Happy", "Christmas", "New", "Year", "Ringraziamento", "Hanukkah"];

      return {
        getitalianWords: function () {
                return textToTranslate;
        },
        addtextToTranslate: function (textToTranslate) {
                textToTranslate.push(textToTranslate);
        }
        
      };
}();
console.log("Translator", Translator);
// var finished = translatedText.join(" ");
// console.log(finished);
// Translator.addTextToTranslate("New");
// console.log("textToTranslate",Translator.getItalianWords());






// Translator.addItalianWords({"Ringraziamento": "Thanksgiving"});
//  console.log("words",Translator.getItalianWords()); 
// // var Translator = ['spanish', 'french', 'italian']; 

// var Translator = function (wordsToTranslate) {
//         var italian = {
//                 "Buon": "Merry",
//                 "Natale": "Christmas",
//                 "Felice": "Happy",
//                 "Nuovo": "New",
//                 "Anno": "Year"
//         };
//         var words = {
//                 "Hannukah": "Hanukkah"   
//                 }; 


//set, allows other developers to access, but not modify?
// console.log("italian", italian); // this variable is private, no one can get to it.
        // return {
          // getItalianWords: function () { // (getting) called getter function. Allows you to get a private variable exposed to other developers.
                // return words;

          // },
          // addItalianWords: function (wordsToTranslate) { // (setting) adding words to an existing array?
                // words.push(wordsToTranslate); // this pushes words that are  new/need to be translated to the words array.
        //   }    
        // };
// }();
// Translator.addItalianWords({"Ringraziamento": "Thanksgiving"});
//  console.log("words",Translator.getItalianWords()); 
 // console.log("italian", italian); // cant be defined because its not in the global scope!


// var Translator = (function(italian){    
//         var language = {
//                 "Feliz": "Happy",  
//                 "Navidad": "Christmas" 
//         };

//         var target = []; 
  
//         return {               
//                 getTranslatorSource: function(sandwichname){

//                         return prices[sandwichname];    
//                 },
//                 setTranslatorTarget: function(whichone){
//                         var myArray = target.push();
//                         return something[whichone];                     
//                 }
//         };
// })();
