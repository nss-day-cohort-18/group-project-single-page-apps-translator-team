//////////////////////////////////////////////////////////////
//We may have to change some of these functions to IIFEs later
//////////////////////////////////////////////////////////////

var showOutput = document.getElementById("showMe");

var translateId = document.getElementById("translate");  //this is the submit button
translateId.addEventListener("click", selectLanguage);

function selectLanguage() {
	var selectBox = document.getElementById("language");
	if (selectBox.value === "french") {
		frenchTranslate();
	} else if (selectBox.value === "italian") {
		italianTranslate();
	} else {
		spanishTranslate();
	};
};


function frenchTranslate() {
	var textArea = document.getElementById("area").value;
	console.log("connected!");
	var splitTextArea = textArea.split(" ");
	console.log(splitTextArea);
	//do something
};

function italianTranslate() {
	var textArea = document.getElementById("area").value;
	console.log("connected!");
	//do something
};

function spanishTranslate() {
	var textArea = document.getElementById("area").value;
	console.log("connected!");
	//do something
};