var tech;
var fashion;
var travel;
var biker;
var home;
var heading;
var event = 0;

function preload() {
  home = loadImage("addons/home.png");
  tech = loadImage("addons/technologyMousePressed.png");
  fashion = loadImage("addons/Fashion.png");
  travel = loadImage("addons/traveller.png");
  biker = loadImage("addons/biker.png");
  heading = loadStrings("addons/technologyName.txt")

}

function setup() {
  createCanvas(screen.width, screen.height);
  frameRate(1)
}


function draw() {
  removeElements();
  if (event == 0) {
      image(home, 0, -20, width, height-50);
    var char = createP("End of year Sale  |   Click on the name to know more");
    char.position(143, 5);
    char.style("color", "#ff4141");
    char.style("font-family", "Georgia");
    char.style("font-size", "18px");
    char.style("font-weight", "normal");
    char.style("letter-spacing", "2px");

    var char = createP(heading[int(random(0, 9))]);
    char.position(143, -50);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "50px");


    var char = createP(heading[int(random(11, 20))]);
    char.position(143, 160);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "110px");

    var char = createP(heading[int(random(22, 31))]);
    char.position(143, 380);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "70px");

    var char = createP(heading[int(random(33, 42))]);

    char.position(143, 590);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "197px");
  }else if(event == 1){
    eventAction();
  image(tech, 0, -20, width, height-50);
    var char = createP(heading[int(random(0, 9))]);
    char.position(143, -50);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "50px");

  }else if(event == 2){
    eventAction();
    image(fashion, 0, -20, width, height-60);
    var char = createP(heading[int(random(11, 20))]);
    char.position(143, 160);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "110px");
  }else if(event == 3){
    eventAction();
    image(travel, 0, 0, width, height-65);
    var char = createP(heading[int(random(22, 31))]);
    char.position(143, 380);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "70px");
  }else if(event == 4){
    eventAction();
    image(biker, 0, -7, width, height-65);
    var char = createP(heading[int(random(33, 42))]);
    char.position(143, 590);
    char.style("color", "white");
    char.style("font-family", "arial");
    char.style("font-size", "90px");
    char.style("font-weight", "bold");
    char.style("letter-spacing", "197px");
  }
}



function mousePressed() {
  if (mouseY <= 190) {
    if (event > 0) {
      event = 0;
    }else if(event == 0){
      event = 1;
    }
  }
  if (mouseY>=190 && mouseY <= 400) {
    if (event > 0) {
      event = 0;
    }else if(event == 0){
      event = 2;
    }
  }
  if (mouseY>=400 && mouseY <= 610) {
    if (event > 0) {
      event = 0;
    }else if(event == 0){
      event = 3;
    }
  }if (mouseY>=610 && mouseY <= width) {
    if (event > 0) {
      event = 0;
    }else if(event == 0){
      event = 4;
    }
  }
}

function eventAction(){

  var char = createP("End of year Sale | Click anywhere to go back");
  char.position(143, 5);
  char.style("color", "#ff4141");
  char.style("font-family", "Georgia");
  char.style("font-size", "18px");
  char.style("font-weight", "normal");
  char.style("letter-spacing", "2px");

}
