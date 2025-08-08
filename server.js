const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
  console.log(`Received ${req.method} request for ${req.url}`);

  
  if (req.method !== 'GET') {
    res.statusCode = 405; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed\n');
    return;
  }
  
  if (req.url === '/get-data') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'ADO ATHAL BN' }));
    return;
  }

 
  if (req.url === '/' || req.url === '') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server is running. Use /get-data for JSON response.\n');
    return;
  }


  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Try: http://${hostname}:${port}/get-data`);
});


