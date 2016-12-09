var srcTxt;

function preload(){
	srcTxt = loadStrings("files/rainbow.txt");
}

function diasticMachine(seed, words){
	var poemWords = [];
	
	for(var i = 0; i < seed.length; i++){
		var ch = seed[i];

		for(var j = 0; j < words.length; j++){
			if (ch == words[j][i]){
				poemWords.push(words[j]);
				break;
			}
		}
	}
	
	return join(poemWords, " ");
}

function startTheProcess(){
	var words = splitTokens(join(srcTxt, ''), ",. ()[]*");
	var seed = select("#seed").value();
	select("#gen-poem-title").html("Generated Poem for <small>\"" + seed + "\"</small>");
	select("#poem").html(diasticMachine(seed, words));
}

function setup(){
	noCanvas();
	var submitButton = select("#submit");
	submitButton.mousePressed(startTheProcess);
}
