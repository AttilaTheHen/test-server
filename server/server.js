const express = require('express');
const app = express();
const cors = require('cors');

// Can't create server using express, must use http
const http = require('http');

app.use(cors);
app.use(express.json());

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world');
});

server.listen(3000, () => console.log('app running...'));