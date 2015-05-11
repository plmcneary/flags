// Get the canvas context
var ctx = document
 .querySelector('canvas')
 .getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

//
// TODO: Put all drawing logic and shtuff here...
//

//red rectangle

ctx.fillStyle = '#ED0C1B ';
ctx.fillRect(0, 0, 500, 260);


//White Stripes

var X = 0;
var Width = 500;
var Height = 20;
var Y = 20;

while(Y <=220){
 ctx.fillStyle = 'white';
 ctx.fillRect(0, Y, 500, 20);
 Y += 40;
}

//blue rectangle
ctx.fillStyle = '#000052 ';
ctx.fillRect(0, 0, 220, 140);
