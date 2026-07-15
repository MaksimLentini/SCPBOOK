const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const TYPES = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon' };
http.createServer((req, res) => {
  let file = '.' + req.url;
  if (file === './') file = './index.html';
  const ext = path.extname(file).toLowerCase();
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('404'); }
    else { res.writeHead(200, { 'Content-Type': TYPES[ext] || 'text/plain' }); res.end(data); }
  });
}).listen(PORT, () => console.log('Running on port ' + PORT));