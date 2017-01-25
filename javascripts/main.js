//////////////////////////////////////////////////////////////
//We may have to change some of these functions to IIFEs later
//////////////////////////////////////////////////////////////

var showOutput = document.getElementById("showMe");

var translateId = document.getElementById("translate");  //this is the submit button
translateId.addEventListener("click", selectLanguage);

function selectLanguage() {
	var selectBox = document.getElementById("language");
	var textArea = document.getElementById("area").value;
	if (selectBox.value === "french") {
		frenchTranslate(textArea);
	} else if (selectBox.value === "italian") {
		italianTranslate(textArea);
	} else {
		spanishTranslate(textArea);
	};
};

var answer;

function frenchTranslate(textArea) {
	console.log("connected!");
	var splitTextArea = textArea.split(" ");
	console.log(splitTextArea);
	var answer = Translator.translateFrench(splitTextArea);

	//do something
};

function italianTranslate(textArea) {
	console.log("connected!");
	var splitTextArea = textArea.split(" ");
	console.log(splitTextArea);
	var answer = Translator.translateItalian(splitTextArea);
	//do something
};

function spanishTranslate(textArea) {
	console.log("connected!");
	var splitTextArea = textArea.split(" ");
	console.log(splitTextArea);
	var answer = Translator.translateSpanish(splitTextArea);

	//do something
};

showOutput.innerHTML = answer;



