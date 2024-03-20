const {createCanvas} = require("canvas");

const createImage = (text) => {
	const height = 22;
	const tmpCanvas = createCanvas(80, height);
	const tmpCtx = tmpCanvas.getContext("2d");
	tmpCtx.font = "bold 11pt 'Roboto'";
	const txtWidth = tmpCtx.measureText(text).width;
	const width = txtWidth+15;

	const canvas = createCanvas(width, height);
	const context = canvas.getContext("2d");

	context.fillStyle = "#171669"; // San Cristóbal Brand Color
	context.roundRect(0, 0, width, height, 5);
	context.fill(0,0, width, height);
	context.beginPath();

	context.font = "bold 11pt 'Roboto'";
	context.textAlign = "center";
	context.textBaseline = "middle";
	context.fillStyle = "#fff";

	context.fillText(text, width/2, height/2);

	const buffer = canvas.toBuffer("image/png");
	return buffer;
}

module.exports = {createImage};