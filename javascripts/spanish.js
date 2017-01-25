
"use strict";
    
var Translator = (function(finished){

	var textToTranslate = ["merry", "stinkin'", "Christmas"];
	var spanishWords = {merry: "feliz", Christmas: "Navidad"};
	var translatedText = [];


	return {
		translate: function() {
			for (var i = 0; i < textToTranslate.length; i++) {
				translatedText.push(spanishWords[textToTranslate[i]]);
				if (spanishWords[textToTranslate[i]] === undefined) {
					translatedText.pop(spanishWords[textToTranslate[i]]);
				}
			}
		var finished = translatedText.join(" ");
		return finished;	
		}
	}
}(Translator));
console.log(Translator.translate());