var first, last, full;
var actionButton;

function setup(){
  noCanvas();
  first = select("#firstName");
  last  = select("#lastName");
  actionButton = select("#actionButton");

  full  = select("#welcome");

  // first.input(updateMessage);
  // last.input(updateMessage);
  actionButton.mousePressed(updateMessage);
}

function updateMessage() {
  full.html("Welcome, " + first.value() + " " + last.value().toUpperCase() + "!");
}
