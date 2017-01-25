"use strict";

var Translator = (function(originalTranslate) {
    var frenchWords = {
        merry: "Buon",     
        christmas: "Natale"
    };

    originalTranslate.translateItalian = function(input) {
        var newArray = [];
        for (var i = 0; i < input.length; i++) {
            console.log[i];
            newArray.push(frenchWords[input[i]]);
            newArray.push(" ");
        }
        var finished = newArray.join("");
        return finished;
    };

    return originalTranslate;

})(Translator);