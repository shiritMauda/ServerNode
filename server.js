 const http = require('http');
const app = require('./app');
const port = process.env.port || 3000;

const server = http.createServer(app);

server.listen(port); 





/* var server = app.listen(5000, function () {
    console.log('Server is running..');
}); */

