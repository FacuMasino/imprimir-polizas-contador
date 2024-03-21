const express = require("express");
const {createImage} = require("./createImage.js");
const fetch = require("node-fetch");
const {getOthersPrints, getOthersDownloads, 
  getPoliciesPrints, getPoliciesDownloads} = require("./firebaseData.js");

process.env.FONTCONFIG_PATH='./fonts'; // configura directorio para fuentes canvas

const app = express();
let port = process.env.PORT || 3300;

const badgeEndpoint = "https://img.shields.io/badge/";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/stats-printed-docs", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getOthersPrints();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-downloaded-docs.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getOthersDownloads();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-printed-policies.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getPoliciesPrints();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-downloaded-policies.png", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const totalPrints = await getPoliciesDownloads();
  const image = createImage(totalPrints);
  
  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': image.length
   });
  res.end(Buffer.from(image,'base64'));
});

app.get("/stats-downloaded-policies.svg", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const total = await getPoliciesDownloads();
  const fetchUrl = `${badgeEndpoint}Polizas%20descargadas%3A%20${total}-171669`;
  const resp = await fetch(fetchUrl, {'Accept-Encoding': 'gzip, deflate, br, zstd'});
  const bufferData = await resp.arrayBuffer();
  res.writeHead(200, {
     'Content-Type': 'image/svg+xml',
     'Content-Length': bufferData.byteLength
   });
  res.end(Buffer.from(bufferData,'base64'));
});

app.get("/stats-printed-policies.svg", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const total = await getPoliciesPrints();
  const fetchUrl = `${badgeEndpoint}Polizas%20impresas%3A%20${total}-171669`;
  const resp = await fetch(fetchUrl, {'Accept-Encoding': 'gzip, deflate, br, zstd'});
  const bufferData = await resp.arrayBuffer();
  res.writeHead(200, {
     'Content-Type': 'image/svg+xml',
     'Content-Length': bufferData.byteLength
   });
  res.end(Buffer.from(bufferData,'base64'));
});

app.get("/stats-printed-docs.svg", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const total = await getOthersPrints();
  const fetchUrl = `${badgeEndpoint}Documentos%20impresos%3A%20${total}-171669`;
  const resp = await fetch(fetchUrl, {'Accept-Encoding': 'gzip, deflate, br, zstd'});
  const bufferData = await resp.arrayBuffer();
  res.writeHead(200, {
     'Content-Type': 'image/svg+xml',
     'Content-Length': bufferData.byteLength
   });
  res.end(Buffer.from(bufferData,'base64'));
});

app.get("/stats-downloaded-docs.svg", async function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  const total = await getOthersDownloads();
  const fetchUrl = `${badgeEndpoint}Documentos%20descargados%3A%20${total}-171669`;
  const resp = await fetch(fetchUrl, {'Accept-Encoding': 'gzip, deflate, br, zstd'});
  const bufferData = await resp.arrayBuffer();
  res.writeHead(200, {
     'Content-Type': 'image/svg+xml',
     'Content-Length': bufferData.byteLength
   });
  res.end(Buffer.from(bufferData,'base64'));
});


app.listen(port, () => {
  console.log("El servidor está inicializado en el puerto 3100");
});