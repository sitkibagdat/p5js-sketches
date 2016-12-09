function loadFile(){
	loadStrings("rainbow.txt", fileLoaded);	
}

function fileLoaded(data){
	select("#output").html(join(data, "<br>"));
}

function fileSelected(file){
	if (file.type == "text") {
		createP("<strong>" + file.name + " - " + file.size + " - " + file.type + "</strong>");
		createP(file.data);
	} else {
		createP("I need a text file!");
	}
}

function setup(){
	noCanvas();

	loadButton = select("#loadFile");
	loadButton.mousePressed(loadFile);

	createFileInput(fileSelected);
}
