import express from "express";
import {createImage} from "./createImage.js";
import {getOthersPrints, getOthersDownloads, 
  getPoliciesPrints, getPoliciesDownloads} from "./firebaseData.js";

const app = express();
let port = process.env.PORT || 3300;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/stats-docs-prints.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getOthersPrints();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-docs-downloads.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getOthersDownloads();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-policies-prints.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getPoliciesPrints();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-policies-downloads.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getPoliciesDownloads();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.listen(port, () => {
  console.log("El servidor está inicializado en el puerto 3100");
});