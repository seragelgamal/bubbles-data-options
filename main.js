// TITLE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

let bubbles = [];

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    // console.log(e.key);
    if (e.key == 'a') {
        bubbles.push({
            x: randomDec(0, cnv.width),
            y: randomDec(0, cnv.height),
            r: randomDec(0, Math.max(cnv.height, cnv.width))
        });
    } else if (e.key == 'p') {
        bubbles.splice(randomInt(0, bubbles.length), 1);
    } else if (e.key == 'r') {
        bubbles.splice(0, bubbles.length);
    }
}

document.addEventListener('click', clickHandler);

function clickHandler(e) {
    bubbles.push({
        x: e.layerX,
        y: e.layerY,
        r: randomDec(0, Math.max(cnv.height, cnv.width))
    });
}

// for (let i = 0; i < 10; i++) {
//     bubbles.push({
//         x: randomDec(0, cnv.width),
//         y: randomDec(0, cnv.height),
//         r: randomDec(0, Math.max(cnv.height, cnv.width))
//     });
// }

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (let i = 0; i < bubbles.length; i++) {
        // Logic
        bubbles[i].x += randomDec(-5, 5);
        bubbles[i].y += randomDec(-5, 5);
        bubbles[i].r += randomDec(-5, 5);
        bubbles[i].x = constrain(bubbles[i].x, 0, cnv.width);
        bubbles[i].y = constrain(bubbles[i].y, 0, cnv.height);
        bubbles[i].r = constrain(bubbles[i].r, 0, Math.max(cnv.width, cnv.height));

        // drawing
        strokeCircle(bubbles[i].x, bubbles[i].y, bubbles[i].r);
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}