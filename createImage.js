import {createCanvas} from "canvas";

const width = 80;
const height = 30;

const createImage = (text) => {
	const canvas = createCanvas(width, height);
	const context = canvas.getContext("2d");

	context.fillStyle = "#171669"; // San Cristóbal Brand Color
	context.roundRect(0, 0, width, height, 8);
	context.fill(0,0, width, height);
	context.beginPath();

	context.font = "bold 10pt 'sans'";
	context.textAlign = "center";
	context.fillStyle = "#fff";

	context.fillText(text, width/2, 20);

	const buffer = canvas.toBuffer("image/png");
	return buffer;
}

export {createImage};