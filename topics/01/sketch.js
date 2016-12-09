var textField;
var output;

function setup(){
  noCanvas();
  textField = createInput();
  // "changed" event triggers by "lost focus" or "hit enter key"
  textField.changed(newtext);
  // "input" event triggers by any "key press"
  textField.input(newTyping);
  output = select("#output");
}

function newtext() {
  // Output to the console
  // console.log(input.value());
  // Output to a new paragraph 
  createP(textField.value());
  textField.value("");
}

function newTyping() {
  // createP(textField.value());
  output.html(textField.value());
}
