function setup(){
	createCanvas(400, 400);
}

function draw(){
    let txt = "dont press me"; 
    fill(0, 255, 68); // start color
    
    if (mouseIsPressed && mouseY < 200){
        fill(240, 0, 0);
        txt = "mother fucker";
    }
    
    rect(0, 0, 400, 200);  // the button
    
    // The button text
    fill(0, 0, 0);
    textSize(30);
    text(txt, 145, 115);
};
