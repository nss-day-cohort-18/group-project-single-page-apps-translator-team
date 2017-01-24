//////////////////////////////////////////////////////////////
//We may have to change some of these functions to IIFEs later
//////////////////////////////////////////////////////////////

var showOutput = document.getElementById("showMe");

function savedInput() {
	var textArea = document.getElementById("area").value;
	console.log("textArea", textArea);
};

var translateId = document.getElementById("translate");  //this is the submit button
translateId.addEventListener("click", selectLanguage);

function selectLanguage() {
	var frenchId = document.getElementById("french");
	var italianId = document.getElementById("italian");
	var spanishId = document.getElementById("spanish");
	if (frenchId.checked) {
		frenchTranslate();
	} else if (italianId.checked) {
		italianTranslate();
	} else {
		spanishTranslate();
	};
};

function frenchTranslate() {
	savedInput();
	//do something
};

function italianTranslate() {
	savedInput();
	//do something
};

function spanishTranslate() {
	savedInput();
	//do something
};