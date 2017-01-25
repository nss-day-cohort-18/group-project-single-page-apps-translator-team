var Translator = (function (frenchWords) {

var frenchObject = {           
        "Merry": "joyeux",     
        "Christmas": "Noël"
} 
  
        frenchWords.getFrenchWords = function () {
                return textToTranslate;
        }
        
        // frenchwords.addtextToTranslate = function (textToTranslate) {
        //         textToTranslate.push(textToTranslate);
        // }
        
        return frenchWords;
      };
})(Translator);

console.log("Translator", Translator);


// var translatedText = [];

//     return {
//         translateSpanish: function(splitTextArea) {
//             console.log(splitTextArea);
//             for (var i = 0; i < splitTextArea.length; i++) {
//                 translatedText.push(spanishWords[splitTextArea[i]]);
//                 if (spanishWords[splitTextArea[i]] === undefined) {
//                     translatedText.pop(spanishWords[splitTextArea[i]]);
//                 }
//             }
//         var finished = translatedText.join(" ");
//         return finished;    
//         }
//     }