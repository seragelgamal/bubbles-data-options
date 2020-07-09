// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

let bubbleInfo = [];

for (let i = 0; i < 10; i++) {
    bubbleInfo.push([randomDec(0, cnv.height), randomDec(0, cnv.width), randomDec(0, Math.max(cnv.height, cnv.width))]);
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (let i = 0; i < bubbleInfo.length; i++) {
        // Logic
        for (let n = 0; n < bubbleInfo[i].length; n++) {
            bubbleInfo[i][n] += randomDec(-5, 5);
        }

        // drawing
        strokeCircle(constrain(bubbleInfo[i][0], 0, cnv.width), constrain(bubbleInfo[i][1], 0, cnv.height), constrain(bubbleInfo[i][2], 0, Math.max(cnv.height, cnv.width)));
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}