var Translator = (function(originalTranslate) {
    var frenchWords = {
        "merry": "Joyeux",     
        "christmas": "Noël"
    };


    originalTranslate.translateFrench = function(input) {
        var newArray = [];
        for (var i = 0; i < input.length; i++) {
            newArray.push(frenchWords[input[i]]);
            newArray.push(" ");
        }
        var finished = newArray.join("");
        return finished;
    };

    return originalTranslate;

})(Translator);

