// server.js
const fs = require('fs');
const https = require('https');
const next = require('next');

const app = next({ dev: true });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem'),
};

app.prepare().then(() => {
  https.createServer(httpsOptions, (req, res) => {
    handle(req, res);
  }).listen(3001, () => {
    console.log('> HTTPS Ready on https://localhost:3001');
  });
});
